export type Service = {
  slug: string; number: string; name: string; short: string; heading: string; body: string;
  includes: string[]; audience: string; cta: string; metaTitle: string; metaDescription: string;
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  { slug: 'creator-partnerships', number: '01', name: 'Creator Partnerships', short: 'We identify and build long-term relationships between your brand and the right creators.', heading: 'Build relationships that outlast a single campaign.', body: 'A one-off sponsored post rarely builds brand equity. TCMA focuses on identifying creators who genuinely fit your product and audience, then building relationships that can grow — from a single collaboration into an ongoing partnership.', includes: ['Creator strategy and profile definition','Creator research and vetting','Outreach and negotiation','Long-term partnership and retention management','Ambassador programs','Product gifting programs'], audience: 'Brands looking to build a bench of creators they can return to campaign after campaign, rather than starting from zero each time.', cta: 'Discuss Your Creator Strategy', metaTitle: 'Creator Partnerships Agency | TCMA', metaDescription: 'TCMA builds long-term creator partnerships for consumer brands — from vetting and outreach to ambassador programs.', faqs: [
    {q:'How do you choose which creators to approach?',a:'We look at audience fit, engagement quality, content style, and brand alignment — not just follower count.'},
    {q:'Do you work with creators of all audience sizes?',a:'Yes. The right fit matters more than reach. We work across nano, micro, and larger creators depending on your goals.'},
    {q:'Can this lead to an ongoing partnership?',a:"That’s the intent. We build relationships designed to extend past a single collaboration where there’s a genuine fit."},
    {q:'How long does it take to build a creator partnership program?',a:'It depends on your goals and market, but most brands see initial creator relationships in place within a few weeks of kicking off strategy.'},
  ]},
  { slug: 'influencer-marketing', number: '02', name: 'Influencer Marketing', short: 'We plan and run creator campaigns built around specific business objectives.', heading: 'Campaigns built around your objectives, not follower counts.', body: 'We treat influencer marketing as a strategic exercise, not a media buy. Every campaign starts with a clear objective, a defined creator profile, and a plan for what success looks like — then we manage sourcing, contracts, content, and reporting end to end.', includes: ['Campaign strategy and creative briefs','Creator sourcing and selection','Negotiation and contracting','Content coordination and publishing','Campaign performance reporting'], audience: 'Brands running a specific campaign — a launch, a seasonal push, an awareness moment — that needs creators sourced and managed properly.', cta: 'Talk to TCMA', metaTitle: 'Influencer Marketing Agency | TCMA', metaDescription: 'TCMA plans and runs influencer marketing campaigns for beauty, fashion, and lifestyle brands — strategy through reporting.', faqs: [
    {q:'How do you measure campaign success?',a:'We define KPIs at the strategy stage — reach, engagement, content quality, or downstream sales — and report against those, not vanity metrics alone.'},
    {q:'Do you handle contracts and negotiation?',a:"Yes, we manage outreach, negotiation, and contracting as part of the campaign so you’re not doing it creator by creator."},
    {q:'Can you run campaigns across multiple markets at once?',a:'Yes — sourcing and management can run across markets in parallel, coordinated as one campaign.'},
    {q:"What’s the typical campaign timeline?",a:'Most campaigns run 4–8 weeks from strategy to final reporting, depending on scope and number of creators involved.'},
  ]},
  { slug: 'ugc-marketing', number: '03', name: 'UGC Marketing', short: 'We help brands produce creator-led content that performs on organic and paid channels.', heading: 'Content that looks native, because it is.', body: "Modern marketing runs on content that doesn’t look like advertising. We manage the sourcing, briefing, and production of creator content designed to work across organic social, paid media, and product pages — with the rights to use it where you need it.", includes: ['UGC strategy and creative direction','Creator sourcing and briefing','Content production and revisions','Usage rights management','Delivery formatted for paid and organic use'], audience: 'Brands that need a steady supply of authentic content for ads, product pages, or organic social — without building an in-house content team.', cta: 'Discuss Your Content Needs', metaTitle: 'UGC Marketing Agency | TCMA', metaDescription: 'TCMA produces creator-led UGC for e-commerce and consumer brands — content built for organic and paid performance.', faqs: [
    {q:"Do we own the content once it’s produced?",a:'Usage rights are agreed upfront as part of the brief, so you know exactly where and how long you can use each piece.'},
    {q:'Can UGC be used in paid ads, not just organic posts?',a:'Yes — we brief and format content specifically for paid media use where that’s part of the plan.'},
    {q:'How much creative direction do we need to provide?',a:"As much or as little as you’d like. We can work from a detailed brand brief or help shape the creative direction with you."},
    {q:'How quickly can content be delivered?',a:'Timelines depend on volume and revisions, but most UGC batches are delivered within 2–3 weeks of briefing.'},
  ]},
  { slug: 'affiliate-marketing', number: '04', name: 'Affiliate Marketing', short: 'We turn creator relationships into a measurable revenue channel.', heading: 'Creators, activated as a revenue channel.', body: 'Affiliate marketing works when it’s actively managed, not just set up and left alone. We help brands recruit the right creator affiliates, onboard them properly, and keep the program active through tracking, reporting, and ongoing optimization.', includes: ['Affiliate program strategy and setup','Affiliate recruitment','Onboarding and activation','Tracking and performance monitoring','Ongoing program optimization'], audience: 'Brands that want creators driving measurable sales, not just awareness — and need a program that’s actually run, not just launched.', cta: 'Start a Conversation', metaTitle: 'Affiliate Marketing Agency | TCMA', metaDescription: 'TCMA builds and manages creator affiliate programs — recruitment, onboarding, tracking, and optimization.', faqs: [
    {q:'What platforms do you use for tracking?',a:"We work with your existing affiliate/tracking stack where you have one, or help recommend a suitable platform if you don’t."},
    {q:'How do you recruit affiliates?',a:'Through our creator network and targeted outreach to creators who fit your audience and product category.'},
    {q:'Is this different from a standard affiliate program?',a:'The difference is active management — recruitment, onboarding, and optimization are ongoing, not a one-time setup.'},
    {q:'Can this run alongside our existing influencer campaigns?',a:"Yes — affiliate is often a natural next step for creators who’ve already worked with your brand."},
  ]},
];

export const processSteps = [
  ['Strategy','We define your objectives, audience, ideal creator profile, and KPIs.'],
  ['Source','We identify creators based on audience fit, engagement, content quality, and brand alignment.'],
  ['Activate','We handle outreach, negotiation, onboarding, and campaign setup.'],
  ['Manage','We manage communication, deadlines, approvals, and publishing.'],
  ['Measure','We track performance and attribution against the objectives we set at the start.'],
  ['Optimize','We use what we learn to improve the next partnership or campaign.'],
];
