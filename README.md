# AION Soft Tech website

The public company website for AION Soft Tech, published at
[aionsofttech.github.io/website](https://aionsofttech.github.io/website/).

## Local development

Install dependencies with `npm ci`, then run `npm run dev` and open
[http://localhost:5176](http://localhost:5176). Create a production build with `npm run build`.

The site presents AppBana as in development and AgentBana as a future product direction, not a
currently available service. Contact is set to `support@aionsofttech.com`.

## Deployment

The GitHub Actions workflow builds and deploys the site when changes reach `main`. Set the repository's
Pages source to **GitHub Actions**. The site currently uses the GitHub Pages address only; no custom
domain is configured in this repository.
