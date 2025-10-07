# Kathryn Malone Therapy Website

A modern, professional therapy practice website built with Next.js 15, Tailwind CSS, and Contentful CMS. Deployed to GitHub Pages with custom domain support.

## 🌟 Features

- **Modern Stack**: Next.js 15 with App Router, TypeScript, and Tailwind CSS
- **Content Management**: Contentful CMS for easy content updates
- **Static Export**: Optimized for GitHub Pages deployment
- **Responsive Design**: Mobile-first, accessible design
- **SEO Optimized**: Meta tags, semantic HTML, and sitemap support
- **Blog/Resources**: Dynamic blog posts with category organization
- **Professional Pages**: Home, About, Services, Contact, and Resources

## 🚀 Quick Start

### Prerequisites

- Node.js 20+ and npm
- Contentful account with API credentials
- GitHub account (for deployment)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/whitmanschorn/kmalone-therapy.git
cd kmalone-therapy
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your Contentful credentials:
```env
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_delivery_api_token
CONTENTFUL_PREVIEW_ACCESS_TOKEN=your_preview_api_token
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Content Management

### Contentful Setup

See [CONTENTFUL_SETUP.md](./CONTENTFUL_SETUP.md) for detailed instructions on:
- Creating content models
- Setting up field types
- Adding initial content
- Managing blog posts

### Content Models

The site uses these Contentful content models:

1. **Therapist Profile** - Professional bio, credentials, photo
2. **Service** - Therapy services offered
3. **Page** - Static page content
4. **Site Settings** - Global site configuration
5. **Blog Post** - Articles and resources with short titles for navigation

## 🎨 Customization

### Styling

The site uses Tailwind CSS with a calming color scheme suitable for mental health services:
- Primary: Blue tones (`blue-900`, `blue-800`)
- Backgrounds: Subtle gradients (`blue-50`, `indigo-50`)
- Text: Carefully chosen gray scales for readability

Modify colors in `app/globals.css`:
```css
:root {
  --primary: #1e40af;
  --primary-dark: #1e3a8a;
  --secondary: #059669;
}
```

### Typography

The site uses Inter font family for clean, professional appearance. Change in `app/layout.tsx`:
```typescript
import { Inter } from "next/font/google";
```

## 🏗️ Project Structure

```
kmalone-therapy/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── resources/         # Blog listing and posts
│   │   └── [slug]/        # Dynamic blog post pages
│   ├── services/          # Services page
│   ├── layout.tsx         # Root layout with header/footer
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Header.tsx         # Navigation with Resources dropdown
│   └── Footer.tsx         # Site footer
├── lib/                   # Utility functions
│   └── contentful.ts      # Contentful client setup
├── types/                 # TypeScript type definitions
│   ├── contentful.ts      # Content model types
│   └── blog.ts            # Blog post types
├── public/                # Static assets
│   └── CNAME              # Custom domain configuration
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Actions deployment
├── CONTENTFUL_SETUP.md    # Contentful configuration guide
├── PORKBUN_DNS_SETUP.md   # Domain setup instructions
└── README.md              # This file
```

## 🚢 Deployment

### GitHub Pages

The site automatically deploys to GitHub Pages when you push to the `main` branch.

1. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: GitHub Actions
   - Custom domain: `kmalonetherapy.com`
   - Enable "Enforce HTTPS"

2. **Add Secrets:**
   - Go to repository Settings → Secrets → Actions
   - Add these secrets:
     - `CONTENTFUL_SPACE_ID`
     - `CONTENTFUL_ACCESS_TOKEN`
     - `CONTENTFUL_PREVIEW_ACCESS_TOKEN`

3. **Push to deploy:**
```bash
git add .
git commit -m "Deploy site"
git push origin main
```

The GitHub Actions workflow will:
- Install dependencies
- Build the Next.js site
- Export static files
- Deploy to GitHub Pages

### Custom Domain Setup

See [PORKBUN_DNS_SETUP.md](./PORKBUN_DNS_SETUP.md) for complete DNS configuration instructions.

Quick summary:
1. Add A records pointing to GitHub's IP addresses
2. Add CNAME record for www subdomain
3. Configure custom domain in GitHub Pages settings
4. Wait for DNS propagation (15-30 minutes)

## 🔧 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production site and export static files
- `npm run start` - Start production server (not used for static export)
- `npm run lint` - Run ESLint

## 📱 Features & Pages

### Home Page
- Hero section with call-to-action
- Services preview grid
- Introduction section
- Contact CTA

### About Page
- Therapist bio and photo
- Professional credentials
- Therapeutic approach
- Background information

### Services Page
- Comprehensive service listings
- Detailed descriptions
- Pricing and duration
- "What to Expect" section

### Contact Page
- Contact information
- Office hours
- Google Calendar scheduling integration
- Crisis resources section

### Resources (Blog)
- Article listings with categories
- Dynamic blog post pages
- Tag-based organization
- Short titles in navigation dropdown

## 🔐 Environment Variables

Required environment variables:

```env
# Contentful CMS
CONTENTFUL_SPACE_ID=          # Your Contentful space ID
CONTENTFUL_ACCESS_TOKEN=       # Content Delivery API token
CONTENTFUL_PREVIEW_ACCESS_TOKEN= # Preview API token (optional)
```

## 🎯 Future Development

### Integrating Contentful Data

Currently, pages use placeholder data. To connect to Contentful:

1. Create content models in Contentful (see `CONTENTFUL_SETUP.md`)
2. Add content entries
3. Update pages to fetch from Contentful:

```typescript
// Example: Fetching services
import { contentfulClient } from '@/lib/contentful';

export async function getServices() {
  const response = await contentfulClient.getEntries({
    content_type: 'service',
    order: ['fields.order'],
  });
  return response.items;
}
```

### Recommended Enhancements

- [ ] Connect all pages to Contentful CMS
- [ ] Add proper markdown rendering for blog posts
- [ ] Implement contact form with email service
- [ ] Add Google Analytics
- [ ] Set up Google Search Console
- [ ] Add sitemap generation
- [ ] Implement image optimization
- [ ] Add loading states and error handling
- [ ] Create admin dashboard for quick content updates
- [ ] Add testimonials section
- [ ] Implement appointment booking system

## 📄 License

This project is private and proprietary to Kathryn Malone Therapy.

## 🤝 Support

For technical issues or questions:
- Review documentation in this README
- Check [CONTENTFUL_SETUP.md](./CONTENTFUL_SETUP.md)
- Check [PORKBUN_DNS_SETUP.md](./PORKBUN_DNS_SETUP.md)
- Review GitHub Actions logs for deployment issues

## 📞 Contact

**Kathryn Malone Therapy**
- Website: https://kmalonetherapy.com
- Email: contact@kmalonetherapy.com
- Phone: (555) 123-4567

---

Built with ❤️ using Next.js, Tailwind CSS, and Contentful
