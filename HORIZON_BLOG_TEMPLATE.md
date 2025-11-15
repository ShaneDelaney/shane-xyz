# Horizon Blog Project Template

Use this template structure when adding new Meta Horizon Developer Blog features to your portfolio.

## Template Structure

```typescript
{
  id: "unique-blog-id",  // Use kebab-case URL-friendly identifier
  title: "[Title of Published Feature]",
  company: "Meta",
  role: "Content Marketing Coordinator",
  timeline: "2025",  // Update year as needed
  description: "Brief one-sentence summary of the feature.",
  longDescription: "A more detailed 2-3 sentence description that provides context about the creator/developer and their work in the Horizon ecosystem.",
  details: [
    "Led narrative direction and shaped the story angle around [key theme]",
    "Conducted interview with [creator/developer] to surface authentic insights and [specific focus]",
    "Provided editorial oversight to ensure clarity, accuracy, and brand voice alignment",
    "Guided agency partners on execution and content delivery",
    "Assisted in preparing and posting the feature on Meta Horizon Developers Blog"
  ],
  tags: ["Narrative Direction", "Editorial Oversight", "Developer Stories", "[Additional Tag]"],
  metrics: ["Meta Horizon Developers Blog", "[Series name or additional context]"],
  image: "/meta.png",
  link: "https://developers.meta.com/horizon/blog/[blog-url-slug]",
  relatedLinks: [
    {
      title: "Read the full feature",
      url: "https://developers.meta.com/horizon/blog/[blog-url-slug]",
      description: "Published on the Meta Horizon Developers Blog – [1-2 sentence description of what the piece covers]."
    }
  ]
}
```

## How to Use

1. **Copy the template above** from the portfolio page (`src/app/work/portfolio/page.tsx`)
2. **Update these fields** for each new blog post:
   - `id`: Create a unique identifier (e.g., "creator-name-horizon-blog")
   - `title`: Use the exact published title
   - `timeline`: Update the year
   - `description` & `longDescription`: Customize based on the specific feature
   - `details`: Modify the first two bullet points to reflect the specific story angle and interview focus
   - `tags`: Add relevant tags specific to the project (keep core tags: "Narrative Direction", "Editorial Oversight", "Developer Stories")
   - `metrics`: Add any relevant context (e.g., "VR Creator Series", "Mobile Developer Spotlight")
   - `link` & `relatedLinks.url`: Insert the published blog URL
   - `relatedLinks.description`: Write a compelling 1-2 sentence summary

3. **Add to portfolio**: Insert the new project object at the top of the `projects` array in `src/app/work/portfolio/page.tsx`

4. **Update work page**: Add the project `id` to the `portfolioLinks` array in the Meta role entry in `src/app/work/page.tsx`

## Example Entry

The Matthiaos blog post serves as the reference example in your portfolio. See:
- Portfolio entry: `src/app/work/portfolio/page.tsx` (id: "matthiaos-horizon-blog")
- Work page link: `src/app/work/page.tsx` (Meta role, portfolioLinks array)

## Your Role Description

Your work should be reflected as:
- ✅ Strategic narrative direction
- ✅ Interview lead
- ✅ Editorial oversight
- ✅ Agency guidance
- ✅ Posting support

Not as:
- ❌ Writing the final feature stories
- ❌ Primary content author

