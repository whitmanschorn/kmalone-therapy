# Porkbun DNS Setup for kmalonetherapy.com

This guide will help you configure your Porkbun domain (kmalonetherapy.com) to point to your GitHub Pages site.

## Prerequisites

- GitHub Pages must be enabled for your repository
- Your site must be deployed successfully to GitHub Pages
- Access to your Porkbun account

## Step 1: Configure GitHub Pages

1. Go to your repository on GitHub: `https://github.com/whitmanschorn/kmalone-therapy`
2. Click on **Settings** → **Pages**
3. Under "Build and deployment":
   - Source: Select "GitHub Actions"
4. Under "Custom domain":
   - Enter: `kmalonetherapy.com`
   - Click **Save**
5. Wait for DNS check to complete (may take a few minutes)
6. Once verified, check "Enforce HTTPS"

## Step 2: Add DNS Records in Porkbun

Log into your Porkbun account and navigate to the DNS management for `kmalonetherapy.com`.

### A Records (Required for Apex Domain)

Add these **four** A records pointing to GitHub's servers:

| Type | Host | Answer | TTL |
|------|------|--------|-----|
| A | @ | 185.199.108.153 | 600 |
| A | @ | 185.199.109.153 | 600 |
| A | @ | 185.199.110.153 | 600 |
| A | @ | 185.199.111.153 | 600 |

**Note:** The `@` symbol represents the apex domain (kmalonetherapy.com).

### CNAME Record (Optional for www subdomain)

If you want `www.kmalonetherapy.com` to work as well:

| Type | Host | Answer | TTL |
|------|------|--------|-----|
| CNAME | www | whitmanschorn.github.io | 600 |

### CNAME Record for GitHub Pages (Alternative Method)

If you prefer to use only a CNAME record (without A records):

| Type | Host | Answer | TTL |
|------|------|--------|-----|
| CNAME | @ | whitmanschorn.github.io | 600 |

**Important:** Most DNS providers don't allow CNAME records for apex domains. If Porkbun supports ALIAS or ANAME records, you can use those instead. Otherwise, use the A records method above.

## Step 3: Verify CNAME File

The GitHub Actions workflow will automatically create a `CNAME` file in the `out` directory during build. This file contains:

```
kmalonetherapy.com
```

You can verify this by checking the `out` folder after a local build.

## Step 4: Wait for DNS Propagation

- DNS changes can take 5 minutes to 48 hours to propagate worldwide
- Typically propagates within 15-30 minutes
- You can check propagation status at: https://dnschecker.org

## Step 5: Test Your Domain

Once DNS has propagated:

1. Visit `https://kmalonetherapy.com` in your browser
2. Verify the site loads correctly
3. Check that HTTPS is working (look for the padlock icon)
4. Test `www.kmalonetherapy.com` if you added the www CNAME record

## Troubleshooting

### Certificate Errors
- If you see certificate errors, wait longer for DNS to propagate
- GitHub Pages needs to provision an SSL certificate (can take up to 24 hours)
- Make sure "Enforce HTTPS" is checked in GitHub Pages settings

### Domain Not Resolving
- Verify DNS records are correct (no typos)
- Check DNS propagation status
- Clear your browser cache and DNS cache:
  - Mac: `sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder`
  - Windows: `ipconfig /flushdns`

### 404 Errors
- Ensure the CNAME file exists in the `out` directory
- Verify GitHub Actions deployment succeeded
- Check that custom domain is configured in GitHub Pages settings

## DNS Records Summary

Here's what your Porkbun DNS configuration should look like:

```
A      @    185.199.108.153   600
A      @    185.199.109.153   600
A      @    185.199.110.153   600
A      @    185.199.111.153   600
CNAME  www  whitmanschorn.github.io  600
```

## Additional Configuration

### Adding CNAME to Build

The GitHub Actions workflow automatically handles this, but if you need to manually ensure the CNAME file is created:

Add to `package.json` scripts:
```json
"postbuild": "echo 'kmalonetherapy.com' > out/CNAME"
```

Or add a `public/CNAME` file with content:
```
kmalonetherapy.com
```

## Need Help?

If you encounter issues:
1. Check GitHub Pages deployment logs in the Actions tab
2. Verify DNS records in Porkbun
3. Review GitHub's custom domain documentation: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

## Useful Commands

Check if DNS is resolving correctly:
```bash
# Check A records
dig kmalonetherapy.com

# Check CNAME records
dig www.kmalonetherapy.com

# Check from specific DNS server
dig @8.8.8.8 kmalonetherapy.com
```

## Next Steps

Once your domain is live:
1. Update social media links to use kmalonetherapy.com
2. Update Google Calendar link if applicable
3. Submit your site to Google Search Console
4. Set up Google Analytics (optional)
