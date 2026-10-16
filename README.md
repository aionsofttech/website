# AION Soft Tech website

The public company website for AION Soft Tech, published at
[aionsofttech.com](https://aionsofttech.com/).

## Local development

Install dependencies with `npm ci`, then run `npm run dev` and open
[http://localhost:5176](http://localhost:5176). Create a production build with `npm run build`.

The site announces AppBana as available in public beta (general availability coming soon) and
presents AgentBana as a future product direction, not a currently available service. Contact is set
to `support@aionsofttech.com`.

### AppBana URLs

| Purpose | URL |
| --- | --- |
| Studio (beta) | https://studio.appbana.aionsofttech.com/ |
| Apps runtime | https://apps.appbana.aionsofttech.com/ |
| API | https://api.appbana.aionsofttech.com/health |
| AI Builder | https://ai.appbana.aionsofttech.com/health |
| Dev | https://dev.appbana.aionsofttech.com/health |
| Test | https://test.appbana.aionsofttech.com/health |
| Live | https://appbana.aionsofttech.com/health |

The site's "Try the beta" links open AppBana Studio at https://appbana.aionsofttech.com/; the Apps
runtime is also linked. Other URLs are not linked from the public site.

## Deployment

The GitHub Actions workflow builds and deploys the site when changes reach `main`. Set the repository's
Pages source to **GitHub Actions** and configure `aionsofttech.com` as the custom domain. The build
copies `public/CNAME` into the deployed site. At GoDaddy, point the apex domain to GitHub Pages using
the four A records documented in [GitHub's custom-domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain).
