export type WorkStory = {
  id: string; company: string; role: string; period: string; chapter: string;
  title: string; summary: string; context: string; contribution: string[];
  delivered: string; throughline: string; collaborators: string;
  examples: { title: string; description: string; href?: string; label?: string }[];
};

export const work: WorkStory[] = [
  {
    id: 'tiktok', company: 'TikTok', role: 'Content Delivery Associate · Global Sports Operations', period: 'June 2026 to present', chapter: 'Bring it live',
    title: 'Coordinating global sports campaigns from planning through launch.',
    summary: 'I coordinate the teams, content, and approvals behind sports campaigns on TikTok, helping fans discover relevant videos and experiences across the app.',
    context: 'Sports campaigns run against fixed event schedules. I coordinate content, design, search experiences, and approvals across time zones so each part is ready for launch.',
    contribution: [
      'Own campaign delivery workflows, translating scope into timelines, responsibilities, and launch requirements.',
      'Coordinate partnerships, search, design, and regional teams across China and Europe to move assets and approvals through delivery.',
      'Prioritize urgent launch issues and coordinate troubleshooting across the teams responsible.',
      'Select publisher and athlete videos for wider distribution and deliver targeted notifications that connect viewers with campaign content.',
    ],
    delivered: 'Coordinated delivery of sports content across search, dedicated content pages, video distribution, and audience notifications.',
    throughline: 'Connect teams and priorities to bring audience experiences from planning into the app.',
    collaborators: 'Sports partnerships, search, design, content, and regional operations teams.',
    examples: [
      { title: 'Campaign delivery', description: 'Coordinate deadlines, assets, and approvals for sports experiences across search and dedicated content pages.' },
      { title: 'Content distribution', description: 'Select relevant publisher and athlete videos, deliver audience notifications, and troubleshoot delivery issues.' },
      { title: 'New content formats', description: 'Help bring scripted sports content into search and dedicated content pages, extending how fans engage with a campaign.' },
      { title: 'Workflow improvement', description: 'Collaborate on testing AI assisted video filtering to support content selection for wider distribution.' },
    ],
  },
  {
    id: 'apple', company: 'Apple', role: 'Marketing Assistant II · App Store', period: 'April to May 2026', chapter: 'Make delivery precise',
    title: 'Getting editorial work onto the App Store.',
    summary: "Editorial production for App Store features and in app events.",
    context: 'Editorial features depend on many small details being right at the same time: partner assets, copy, device requirements, regional schedules, and review.',
    contribution: ["Coordinated partner assets, reviews, and publishing schedules.", "Managed Fast Track and in app event workflows across devices and regions.", "Led production syncs and maintained launch calendars."],
    delivered: 'App Store editorial features and event placements supported by validated assets, coordinated reviews, and clear publishing schedules.',
    throughline: 'The quality of an audience experience depends on the care taken before it goes live. Creative work needs reliable production.',
    collaborators: 'Editorial, design, product, marketing, legal, and app partners.',
    examples: [{ title: 'Fast Track editorial', description: 'Managed the workflow for timely editorial stories, from partner materials through review and publishing preparation.' }, { title: 'In app events', description: 'Coordinated event assets and editorial delivery around app launches, updates, and live experiences.' }],
  },
  {
    id: 'meta', company: 'Meta', role: 'Content Marketing Coordinator II', period: 'October 2025 to April 2026', chapter: 'Build the process',
    title: 'Helping developers tell the story behind what they built.',
    summary: "Developer stories and marketing guides for Meta Horizon.",
    context: 'A good developer story needs more than a strong angle. Interviews, product details, performance claims, and stakeholder feedback have to become one clear, publishable narrative.',
    contribution: ["Managed stories from developer interviews through drafts, review, and publication.", "Coordinated approvals and verified performance claims with data science.", "Managed agency handoffs and production schedules.", "Built internal planning tools and a Creator Studio prototype."],
    delivered: 'Published developer profiles and marketing guides that translate the work of VR creators into stories and practical resources for the wider developer community.',
    throughline: 'Writing grew into owning the process around the writing: connecting specialists, resolving feedback, and making strong work repeatable.',
    collaborators: 'Product marketing, developer relations, product, design, legal, data science, and agencies.',
    examples: [{ title: 'The story behind VAIL VR', description: 'A two part developer story exploring AEXLAB, community funding, and the operation of a multiplayer VR game.', href: '/published#vail-vr-part-one', label: 'Read the work' }, { title: 'A practical path to market', description: 'A guide series covering marketing plans, influencers, community, assets, PR, and app demos for VR developers.', href: '/published#gtm-marketing-plan', label: 'Explore the guides' }, { title: 'Tools for the team', description: 'Built the Growth Systems Toolkit and a Horizon Creator Studio prototype to explore how software could support planning and creator workflows.' }],
  },
  {
    id: 'snap', company: 'Snap Inc.', role: 'Trend Producer', period: 'March to October 2025', chapter: 'Understand attention',
    title: 'Deciding what deserves to be seen.',
    summary: "Content programming and creator discovery for Snapchat Spotlight.",
    context: 'A discovery surface is shaped by countless editorial decisions. The work is to recognize promising content, understand why it resonates, and decide what to put in front of an audience.',
    contribution: ["Reviewed more than 1,000 videos daily to select content and creators for amplification.", "Partnered with product and data teams on discovery and retention experiments.", "Curated new user experiences and sourced content for Say It in a Snap."],
    delivered: 'Daily Spotlight programming, creator selections, and campaign content, including selections for Times Square placements. My contribution combined editorial decisions with the content workflows behind distribution.',
    throughline: 'Storytelling became a way to understand attention: what people respond to, what feels culturally relevant, and which creators deserve a larger audience.',
    collaborators: 'Editorial, product, data science, growth, and marketing teams.',
    examples: [{ title: 'Spotlight programming', description: 'A daily practice of reviewing content, reading performance signals, and choosing videos for amplification.' }, { title: 'Creator discovery', description: 'Partnered with data teams to review emerging creators and add editorial judgment to discovery workflows.' }, { title: 'Say It in a Snap', description: 'Sourced creator content for a brand campaign that brought Snapchat stories into public placements.' }],
  },
  {
    id: 'phony', company: 'Phony Content', role: 'Content Manager', period: 'May 2024 to March 2025', chapter: 'Find the story',
    title: 'Writing stories for the way people actually watch.',
    summary: "Writing and production for Tiny Texts on Snapchat.",
    context: 'On a phone, a story has to earn the next moment of attention. Character, pacing, and the reveal all work inside a small, familiar format.',
    contribution: ["Wrote and edited more than 50 scripts for mobile viewing.", "Developed characters, story arcs, and pacing.", "Managed editorial calendars and production handoffs from draft to publication."],
    delivered: 'A catalog of published Tiny Texts episodes, supported by a repeatable process for writing, editing, and production.',
    throughline: 'This is where the creative and operational parts of my work started coming together: make a story worth following, then build a way to keep making it.',
    collaborators: 'Writers, editors, production teammates, and company leadership.',
    examples: [{ title: 'Tiny Texts: Cheer Squad', description: 'A scripted story built for the rhythm of a text conversation.' }, { title: 'Tiny Texts: Inhaler', description: 'Character, tension, and a mobile storytelling format.' }],
  },
  {
    id: 'stockx', company: 'StockX', role: 'Brand Creative Production · Freelance', period: '2021 and 2024', chapter: 'Pay attention to culture',
    title: 'Connecting cultural research with creative production.',
    summary: "Cultural research and production support for brand campaigns.",
    context: 'Brand work starts with understanding the people and communities it hopes to speak to. Research and production are two ways of getting closer to that audience.',
    contribution: ["Authored the 2024 Core Insights Report on Gen Z culture and digital behavior.", "Supported three campaigns featuring Sydeon, Briana King, and Brittney Elena.", "Coordinated shoot logistics, talent, and production handoffs."],
    delivered: 'A cultural insights report and production contributions to published creator and athlete campaigns.',
    throughline: 'A foundation in observing culture, making an argument from what I saw, and working with a team to bring it to life.',
    collaborators: 'Brand creative, production, talent, and campaign teams.',
    examples: [{ title: 'Behind the Streams with Sydeon', description: 'Production support for a creator campaign at the intersection of gaming and style.', href: 'https://www.youtube.com/watch?v=0uBuJh7sEjU', label: 'Watch the campaign' }, { title: 'Briana King Joins StockX', description: 'Production support for a campaign centered on skate culture.', href: 'https://www.youtube.com/watch?v=V8sx2CJ9x4s', label: 'Watch the campaign' }],
  },
  {
    id: 'collider', company: 'Collider', role: 'Editorial Contributor · Freelance', period: 'August to October 2022', chapter: 'Find the angle',
    title: 'Turning a personal interest into published work.',
    summary: "Film and television features for Collider.",
    context: 'Writing about familiar films and shows means finding an angle that gives readers a reason to care, then delivering on it.',
    contribution: ["Researched and wrote film and television features.", "Developed angles around audience interests and cultural moments.", "Edited copy for readability and search discovery."],
    delivered: 'Published features on Collider, including Actors and Their Favorite Movies and Hardest Working Characters in Succession.',
    throughline: 'The earliest version of the same instinct: notice something interesting, shape it into a story, and help it find an audience.',
    collaborators: 'Editors and the editorial publishing team.',
    examples: [{ title: 'Actors and Their Favorite Movies', description: 'An editorial feature connecting performers with the films they love.', href: 'https://collider.com/actors-and-their-favorite-movies/', label: 'Read on Collider' }, { title: 'Hardest Working Characters in Succession', description: 'A character driven angle on a cultural moment.', href: 'https://collider.com/hardest-workers-in-succession-ranked/', label: 'Read on Collider' }],
  },
];

export const chapters = [
  { number: '01', title: 'Find the story.', companies: 'Collider · Phony Content', body: 'Start with an angle, a character, or a reason to care. Writing taught me how to turn an idea into something an audience can follow.', href: '/work/phony' },
  { number: '02', title: 'Understand the audience.', companies: 'StockX · Snap', body: 'Pay attention to culture and to what people choose to watch. Use that judgment to decide which stories and creators deserve attention.', href: '/work/snap' },
  { number: '03', title: 'Make it happen.', companies: 'Meta · Apple · TikTok', body: 'Connect the idea to the people, production, and product experiences that carry it into the world. Own the details that make a launch possible.', href: '/work/tiktok' },
];
