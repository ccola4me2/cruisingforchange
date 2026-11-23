// Pages come straight from public/. This script only adds the mail side:
// every message to an @cruisingforchange.org address that Email Routing
// sends here is forwarded to each inbox in the FORWARD_TO secret
// (comma separated, each one verified under Email Routing > Destination addresses).
export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  },

  async email(message, env) {
    const inboxes = (env.FORWARD_TO || "")
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    if (!inboxes.length) {
      message.setReject("No inbox is set up for this address yet.");
      return;
    }
    // One inbox failing (say, not verified yet) must not stop the others.
    const results = await Promise.allSettled(inboxes.map((to) => message.forward(to)));
    results.forEach((r, i) => {
      if (r.status === "rejected") console.log(`forward to inbox ${i + 1} failed: ${r.reason}`);
    });
    if (results.every((r) => r.status === "rejected")) {
      message.setReject("Could not deliver to any inbox.");
    }
  },
};
