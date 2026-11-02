# cruisingforchange.org

Website for Cruising for Change, the Parrothead Drifters' fundraising for Singing for Change aboard the International Parrothead Day Cruise.

Plain HTML, CSS and JS, served as static assets by a Cloudflare Worker. Everything the site serves lives in `public/`.

- `public/index.html`: the home page
- `public/css/styles.css`: design system, carried over from the parrotheadscruise.com site (phc repo)
- `public/assets/img/`: logos, Singing for Change artwork, the thank-you letter, the first-pitch photo

The sailing photo of Jimmy Buffett used on the parrotheadscruise.com charity page must not be used here.

## Deploy

Connect this repo to Cloudflare Workers Builds (Workers & Pages, Create, Import a repository). It reads `wrangler.jsonc`; no build command is needed. Then add `cruisingforchange.org` and `www.cruisingforchange.org` as custom domains on the `cruisingforchange` Worker.
