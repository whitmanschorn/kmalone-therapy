# Contentful Webhook Setup for Auto-Deploy

Since Contentful webhooks don't support custom authentication headers needed for GitHub's API, here are the practical options:

## Option 1: Manual Deploy (Current Setup - Simplest)

After publishing content in Contentful, trigger a deployment:

```bash
git commit --allow-empty -m "Deploy latest content" && git push
```

Or use GitHub Actions UI:
1. Go to https://github.com/whitmanschorn/kmalone-therapy/actions
2. Select "Deploy to GitHub Pages"
3. Click "Run workflow"

## Option 2: Use Zapier/Make/n8n (Recommended for Auto-Deploy)

Use a no-code automation tool as a bridge:

### Using Zapier (Free tier available):
1. Create a Zap with:
   - **Trigger:** Contentful "Entry Published"
   - **Action:** GitHub "Trigger Workflow"
2. Configure the GitHub action to trigger your deployment workflow

### Using Make.com (formerly Integromat):
Similar setup with Contentful → GitHub workflow trigger

## Option 3: Deploy on a Schedule

Add scheduled deploys to always show latest content:

```yaml
on:
  schedule:
    - cron: '0 */6 * * *'  # Every 6 hours
```

## Option 4: Custom Webhook Server (Advanced)

Host a simple serverless function (Vercel/Netlify/Cloudflare Workers) that:
1. Receives Contentful webhook
2. Calls GitHub API with proper authentication
3. Triggers the workflow

Example Vercel serverless function:
```javascript
// api/contentful-webhook.js
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const response = await fetch(
    'https://api.github.com/repos/whitmanschorn/kmalone-therapy/dispatches',
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json',
      },
      body: JSON.stringify({ event_type: 'contentful-publish' })
    }
  );

  res.status(200).json({ success: true });
}
```

Then configure Contentful webhook to: `https://your-domain.vercel.app/api/contentful-webhook`

## Current Recommendation

For now, use **Option 1** (manual trigger) since it's simple and reliable. When you want automation, **Option 2** (Zapier) is the easiest without coding.
