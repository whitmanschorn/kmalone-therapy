# Contentful Webhook Setup for Auto-Deploy

This guide explains how to configure Contentful to automatically trigger GitHub Actions deployments when content is published.

## GitHub Actions Configuration

The workflow in `.github/workflows/deploy.yml` is configured to accept `repository_dispatch` events with the type `contentful-publish`.

## Setting Up the Webhook in Contentful

### 1. Create a GitHub Personal Access Token

1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Name it: `Contentful Webhook`
4. Select scope: `repo` (full control of private repositories)
5. Generate and copy the token - **save it securely, you won't see it again**

### 2. Configure Contentful Webhook

1. Go to Contentful → Settings → Webhooks
2. Click "Add Webhook"
3. Configure the webhook:

   **Name:** `GitHub Actions Deploy`

   **URL:**
   ```
   https://api.github.com/repos/whitmanschorn/kmalone-therapy/dispatches
   ```

   **Headers:**
   - Add header: `Authorization`
   - Value: `token YOUR_GITHUB_TOKEN_HERE` (replace with your GitHub token)
   - Add header: `Accept`
   - Value: `application/vnd.github.v3+json`

   **Content type:** `application/json`

   **Payload:**
   ```json
   {
     "event_type": "contentful-publish"
   }
   ```

   **Triggers:**
   - ☑️ Entry: Publish
   - ☑️ Entry: Unpublish (optional - if you want unpublish to also rebuild)
   - ☑️ Asset: Publish
   - ☑️ Asset: Unpublish (optional)

4. Click "Save"

### 3. Test the Webhook

1. In Contentful, edit and publish any entry
2. Go to GitHub → Actions tab
3. You should see a new workflow run triggered by "repository_dispatch"
4. The site will rebuild and redeploy with your updated content

## How It Works

1. You publish content in Contentful
2. Contentful webhook sends POST request to GitHub API
3. GitHub triggers `repository_dispatch` event
4. Workflow runs: fetches content from Contentful, builds site, deploys to GitHub Pages
5. Your site is updated with the new content (usually within 2-3 minutes)

## Troubleshooting

**Webhook not triggering:**
- Check webhook activity log in Contentful Settings → Webhooks → [Your webhook] → Activity log
- Verify the GitHub token has `repo` scope
- Ensure repository name in URL is correct

**Build failing:**
- Check that Contentful secrets are set in GitHub: Settings → Secrets and variables → Actions
- Required secrets: `CONTENTFUL_SPACE_ID`, `CONTENTFUL_ACCESS_TOKEN`, `CONTENTFUL_PREVIEW_ACCESS_TOKEN`

**Delayed updates:**
- GitHub Actions typically take 2-3 minutes to complete
- GitHub Pages deployment may cache for a few minutes
- Hard refresh your browser (Cmd+Shift+R or Ctrl+Shift+R)
