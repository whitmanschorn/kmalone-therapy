# Contentful Setup Guide

## Content Models to Create

### 1. Therapist Profile (therapistProfile)
**Content Type ID**: `therapistProfile`

Fields:
- **name** (Short text, required)
  - Field ID: `name`
- **title** (Short text, required)
  - Field ID: `title`
  - Example: "Licensed Clinical Social Worker"
- **credentials** (Short text, list, required)
  - Field ID: `credentials`
  - Example: ["LCSW", "EMDR Certified", "Trauma-Informed"]
- **bio** (Long text, required)
  - Field ID: `bio`
- **profilePhoto** (Media, one file, required)
  - Field ID: `profilePhoto`
  - Accepts: Images only
- **email** (Short text, optional)
  - Field ID: `email`
- **phone** (Short text, optional)
  - Field ID: `phone`

### 2. Service (service)
**Content Type ID**: `service`

Fields:
- **name** (Short text, required)
  - Field ID: `name`
- **slug** (Short text, required, unique)
  - Field ID: `slug`
- **description** (Short text, required)
  - Field ID: `description`
  - Max 200 characters
- **detailedDescription** (Long text, optional)
  - Field ID: `detailedDescription`
  - Markdown enabled
- **duration** (Short text, optional)
  - Field ID: `duration`
  - Example: "50 minutes"
- **price** (Short text, optional)
  - Field ID: `price`
  - Example: "$150 per session"
- **icon** (Media, one file, optional)
  - Field ID: `icon`
- **order** (Integer, optional)
  - Field ID: `order`
  - For display ordering

### 3. Page (page)
**Content Type ID**: `page`

Fields:
- **title** (Short text, required)
  - Field ID: `title`
- **slug** (Short text, required, unique)
  - Field ID: `slug`
- **content** (Long text, required)
  - Field ID: `content`
  - Markdown enabled
- **metaDescription** (Short text, optional)
  - Field ID: `metaDescription`
- **metaKeywords** (Short text, list, optional)
  - Field ID: `metaKeywords`
- **heroImage** (Media, one file, optional)
  - Field ID: `heroImage`

### 4. Site Settings (siteSettings)
**Content Type ID**: `siteSettings`

Fields:
- **siteName** (Short text, required)
  - Field ID: `siteName`
- **tagline** (Short text, optional)
  - Field ID: `tagline`
- **logo** (Media, one file, optional)
  - Field ID: `logo`
- **primaryColor** (Short text, optional)
  - Field ID: `primaryColor`
  - Example: "#3B82F6"
- **secondaryColor** (Short text, optional)
  - Field ID: `secondaryColor`
- **googleCalendarLink** (Short text, optional)
  - Field ID: `googleCalendarLink`
- **socialMedia** (Object, optional)
  - Field ID: `socialMedia`
  - JSON object with facebook, instagram, linkedin fields

### 5. Blog Post (blogPost)
**Content Type ID**: `blogPost`

Fields:
- **title** (Short text, required)
  - Field ID: `title`
  - Full article title
- **shortTitle** (Short text, required)
  - Field ID: `shortTitle`
  - Abbreviated title for navigation menu
  - Max 50 characters
- **slug** (Short text, required, unique)
  - Field ID: `slug`
  - URL-friendly identifier
- **excerpt** (Short text, required)
  - Field ID: `excerpt`
  - Brief summary for article listings
  - Max 200 characters
- **content** (Long text, required)
  - Field ID: `content`
  - Markdown enabled
  - Full article content
- **publishedDate** (Date & time, required)
  - Field ID: `publishedDate`
- **author** (Short text, optional)
  - Field ID: `author`
  - Defaults to therapist name
- **featuredImage** (Media, one file, optional)
  - Field ID: `featuredImage`
- **tags** (Short text, list, optional)
  - Field ID: `tags`
  - For categorization
- **category** (Short text, optional)
  - Field ID: `category`
  - Primary category (e.g., "Anxiety", "Trauma", "Wellness")

## Setup Steps

1. Log into your Contentful space
2. Go to Content Model section
3. Create each content type listed above with the specified fields
4. Upload the therapist photos to Media section
5. Create entries for each content type
6. Get your API credentials:
   - Space ID
   - Content Delivery API access token
   - Content Preview API access token (for preview mode)
7. Add credentials to `.env.local`

## Initial Content to Create

### Therapist Profile Entry
- Name: Katherine Malone
- Title: Licensed Clinical Social Worker
- Credentials: ["LCSW", "Trauma-Informed Therapist"]
- Bio: (Add professional bio)
- Profile Photo: (Upload one of the 3 photos)

### Service Entries
1. Individual Therapy
2. Trauma Therapy
3. Anxiety & Depression Treatment
4. EMDR Therapy
(Add more as needed)

### Page Entries
1. About (slug: about)
2. Contact (slug: contact)

### Site Settings Entry
- Site Name: K Malone Therapy
- Tagline: "Compassionate Mental Health Care"
- Google Calendar Link: (Placeholder URL)

### Blog Post Entries
1. Understanding Anxiety
   - Short Title: "Understanding Anxiety"
   - Slug: understanding-anxiety
   - Category: Anxiety
2. Trauma-Informed Therapy
   - Short Title: "Trauma-Informed Therapy"
   - Slug: trauma-informed-therapy
   - Category: Trauma
3. Mindfulness Techniques
   - Short Title: "Mindfulness Techniques"
   - Slug: mindfulness-techniques
   - Category: Wellness
4. When to Seek Therapy
   - Short Title: "When to Seek Therapy"
   - Slug: when-to-seek-therapy
   - Category: Therapy
