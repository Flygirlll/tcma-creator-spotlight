# TCMA Multi-Page Website

## Goal
Build a premium, editorial agency website for The Creator Marketing Agency using the supplied copy and logo. The experience will clearly separate brand-facing content from creator-facing content, work across mobile through desktop, and avoid invented results, clients, statistics, or legal claims.

## Pages and navigation
- Create the complete route set: Home, Services, four service detail pages, For Brands, Creator Network, Creator Application, About, Case Studies, Contact, Privacy, and Terms.
- Add a shared sticky header with the supplied TCMA logo, desktop links, a mobile menu, and the persistent strategy-call action.
- Add a shared four-column footer with the supplied navigation and social labels.
- Use the supplied page-specific SEO titles and descriptions, plus Open Graph and Twitter metadata on every route.
- Mark public content routes for sitemap inclusion and preserve crawler access in `robots.txt`. A deploy-domain sitemap directive will wait until a public URL exists.

## Visual direction
- Establish the supplied palette as semantic theme tokens: TCMA green, cream, charcoal, off-white, sage, slate, and white.
- Load Fraunces for editorial headlines, Inter for body/interface copy, and Bebas Neue for compact labels.
- Use a confident editorial layout with large type, generous whitespace, sharp-to-subtle corners, strong rules, and restrained motion.
- Generate a cohesive set of authentic creator and product-in-use images: natural phone-shot energy, diverse creators, editorial framing, and subtle green/charcoal grading—never generic office stock or influencer-app gradients.
- Use the uploaded logo in the header/footer and create its padded square favicon.

## Shared content components
- Build reusable service cards for Home and Services.
- Build one reusable service-detail structure with inclusion lists, audience fit, four-item accordion FAQs, and contact action.
- Build the creator ecosystem flow and reusable six-step process, switching from horizontal to vertical on small screens.
- Build the exact three-card “Coming Soon” case-study state.
- Add modest fade-up reveals, simple route transitions, color-only button feedback, and reduced-motion support.

## Page content
- Reproduce the supplied copy and section order for every page without blending the brand and creator voices.
- Keep Home brand-focused and include: introduction, agency explanation, services, differentiators, ecosystem, process, industries, and final strategy-call action.
- Keep the Creator Network direct and creator-focused, ending only in the application action.
- Embed the supplied Calendly booking page inline on Contact, immediately visible and responsive.
- Present Privacy and Terms as clearly identified placeholders pending professional review.

## Creator application and Cloud
- Enable Lovable Cloud for secure application storage.
- Create `creator_applications` with all supplied fields, default status/date, internal notes, explicit grants, and row-level access allowing anonymous submissions but no public reads.
- Build the multi-section application with required/optional fields, grouped availability controls, URL/email validation, 300-character introduction limit, required consent, accessible inline errors, retry feedback, and the supplied success state.
- Do not add an admin dashboard or collect files, payments, IDs, or other sensitive information.

## Responsive and accessibility checks
- Ensure touch targets, focus states, labels, menus, accordions, form feedback, and contrast are accessible.
- Verify every route at approximately 375px, 768px, and 1280px with no horizontal scrolling, clipped text, or collisions.
- Verify the mobile sticky action does not cover forms or footer content, the Calendly embed remains usable, and all internal links work.
- Check the final build, browser console, and key interactions before completion.

## Assumptions
- The drafted FAQs stay as supplied.
- Social labels remain non-linked until real profile URLs are provided; no profiles will be fabricated.
- Git source control and Vercel deployment readiness are respected, but external repository linking and deployment are not performed unless separately requested.
