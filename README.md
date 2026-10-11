# AION Soft Tech website

The public company website for [AION Soft Tech](https://aionsofttech.com), published through GitHub
Pages from this repository.

## Local development

Install dependencies with `npm ci`, then run `npm run dev` and open
[http://localhost:5176](http://localhost:5176). Create a production build with `npm run build`.

The site presents AppBana as in development and AgentBana as a future product direction, not a
currently available service. Contact is set to `support@aionsofttech.com`.

## Deployment

The GitHub Actions workflow builds and deploys the site when changes reach `main`. Set the repository's
Pages source to **GitHub Actions** and configure `aionsofttech.com` as its custom domain. DNS records
for the domain are managed at the registrar; keep any existing email records when updating them.
