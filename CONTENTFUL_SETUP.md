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
4. Prepare and upload images (see Image Workflow section below)
5. Create entries for each content type
6. Get your API credentials:
   - Space ID
   - Content Delivery API access token
   - Content Preview API access token (for preview mode)
7. Add credentials to `.env.local`

## Image Workflow

### Preparing Images for Upload

This project includes a CLI tool for resizing images before uploading to Contentful. This ensures optimal performance and consistent sizing across the website.

#### Using the Resize Script

The `scripts/resize-image.sh` script uses macOS's built-in `sips` tool to resize images.

**Basic Usage:**
```bash
./scripts/resize-image.sh <input-file> <output-file> [width]
```

**Examples:**
```bash
# Resize to specific width (maintains aspect ratio)
./scripts/resize-image.sh photo.jpg photo-800.jpg 800

# Use predefined sizes
./scripts/resize-image.sh photo.jpg photo-thumb.jpg thumbnail  # 200px
./scripts/resize-image.sh photo.jpg photo-med.jpg medium       # 800px
./scripts/resize-image.sh photo.jpg photo-lg.jpg large         # 1200px

# Just optimize without resizing
./scripts/resize-image.sh photo.jpg photo-optimized.jpg
```

**Predefined Sizes:**
- `thumbnail` or `thumb`: 200px width
- `medium` or `med`: 800px width
- `large` or `lg`: 1200px width

#### Recommended Image Sizes

**Profile Photos:**
- Original/Source: Keep original high-res version
- Web Display: 800px width (use medium preset)
- Thumbnail: 200px width (use thumbnail preset)

**Blog Post Featured Images:**
- Web Display: 1200px width (use large preset)
- Card Thumbnails: 800px width (use medium preset)

**Service Icons:**
- Standard Size: 200px width (use thumbnail preset)

#### Uploading to Contentful

**Via Contentful Web App:**
1. Resize images using the script above
2. Navigate to Media in your Contentful space
3. Click "Add asset" → "Upload"
4. Select your resized image
5. Add title and description
6. Click "Publish"

**Via Contentful MCP (Advanced):**
```bash
# After resizing your image with the script
# Use base64 encoding to upload
base64 -i photo-800.jpg | pbcopy
# Then use Contentful MCP upload_asset tool
```

**Important Notes:**
- Always publish assets after uploading or they won't appear in the app
- Use descriptive titles and alt text for accessibility
- The asset URL format is: `https://images.ctfassets.net/[space-id]/...`
- Images are automatically served via Contentful's CDN

#### Troubleshooting

**Asset shows "Invalid URI host" error:**
- The asset upload may not have completed properly
- Try re-uploading the asset through the Contentful web interface
- Ensure the asset is published after upload

**Image not displaying on website:**
- Check that the asset is published in Contentful
- Verify the entry referencing the asset is also published
- Confirm `next.config.ts` includes Contentful domains in `remotePatterns`
- Check browser console for any CORS or loading errors

## Initial Content to Create

### Therapist Profile Entry
- Name: Kathryn Malone
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
