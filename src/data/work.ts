export type WorkStory = {
  id: string; company: string; role: string; period: string; chapter: string;
  title: string; summary: string; context: string; contribution: string[];
  delivered: string; throughline: string; collaborators: string;
  examples: { title: string; description: string; href?: string; label?: string }[];
};

export const work: WorkStory[] = [
  {
    id: 'tiktok', company: 'TikTok', role: 'Global Sports Operations', period: 'June 2026 to present', chapter: 'Bring it live',
    title: 'Turning sports moments into live experiences.',
    summary: 'Campaign workstream ownership, global launch coordination, and hands on content delivery for sports activations on TikTok.',
    context: 'A sports campaign has a fixed moment to meet. Partner content, search experiences, design, notifications, and approvals all need to arrive together, across teams and time zones.',
    contribution: [
      'Define campaign scope, owners, milestones, and dependencies from kickoff through launch.',
      'Coordinate assets and approvals across partnerships, search, design, and content teams, including stakeholders in China and Europe.',
      'Select and track publisher and athlete videos for amplification during live sports moments.',
      'Execute targeted notifications and troubleshoot delivery when campaign plans meet real world constraints.',
      'Help deliver new sports formats and test AI assisted workflows for content selection.',
    ],
    delivered: 'Sports activations spanning search, content hubs, promoted publisher and athlete videos, and targeted notifications. My responsibility is the operational work that gets these experiences ready and live.',
    throughline: 'Editorial judgment becomes launch judgment: deciding what needs to happen, who needs to be involved, and how to carry an idea all the way to its audience.',
    collaborators: 'Sports partnerships, search, design, content, and regional operations teams.',
    examples: [
      { title: 'Global campaign workstreams', description: 'Set up the people, assets, deadlines, and approvals behind sports activations. NASCAR campaign coordination is one example within a broader portfolio.' },
      { title: 'Live content and notifications', description: 'Publisher and athlete amplification, including World Cup content workflows, alongside audience notification delivery and troubleshooting.' },
      { title: 'Sports meets scripted storytelling', description: 'Helped deliver a Chicago Cubs drama miniseries through search and a content hub, bringing a new storytelling format into a sports campaign.' },
      { title: 'Better content selection', description: 'Collaborate with teammates to test and refine AI assisted filtering of sports videos suitable for amplification.' },
    ],
  },
  {
    id: 'apple', company: 'Apple', role: 'Marketing Assistant II · App Store', period: 'April to May 2026', chapter: 'Make delivery precise',
    title: 'Getting editorial work onto the App Store.',
    summary: 'The assets, approvals, and publishing schedules behind App Store editorial features and in app events.',
    context: 'Editorial features depend on many small details being right at the same time: partner assets, copy, device requirements, regional schedules, and review.',
    contribution: ['Coordinated assets, approvals, and publishing schedules across design, product, marketing, and legal.', 'Owned Fast Track and in app event workflows, validating partner assets and preparing content for publishing across devices and regions.', 'Led production syncs and maintained editorial calendars and procedures so concurrent launches had clear deadlines and next steps.'],
    delivered: 'App Store editorial features and event placements supported by validated assets, coordinated reviews, and clear publishing schedules.',
    throughline: 'The quality of an audience experience depends on the care taken before it goes live. Creative work needs reliable production.',
    collaborators: 'Editorial, design, product, marketing, legal, and app partners.',
    examples: [{ title: 'Fast Track editorial', description: 'Managed the workflow for timely editorial stories, from partner materials through review and publishing preparation.' }, { title: 'In app events', description: 'Coordinated event assets and editorial delivery around app launches, updates, and live experiences.' }],
  },
  {
    id: 'meta', company: 'Meta', role: 'Content Marketing Coordinator II', period: 'October 2025 to April 2026', chapter: 'Build the process',
    title: 'Helping developers tell the story behind what they built.',
    summary: 'Developer stories, practical guides, and the production process behind published work for Meta Horizon.',
    context: 'A good developer story needs more than a strong angle. Interviews, product details, performance claims, and stakeholder feedback have to become one clear, publishable narrative.',
    contribution: ['Managed developer stories from sourcing and interviews through drafts, approvals, and publication.', 'Coordinated review across marketing, developer relations, design, legal, data science, and agency partners.', 'Validated performance claims with data science before they appeared in public stories.', 'Coordinated vendor handoffs and production schedules across simultaneous projects.', 'Built internal planning tools and a Creator Studio prototype alongside editorial work.'],
    delivered: 'Published developer profiles and marketing guides that translate the work of VR creators into stories and practical resources for the wider developer community.',
    throughline: 'Writing grew into owning the process around the writing: connecting specialists, resolving feedback, and making strong work repeatable.',
    collaborators: 'Product marketing, developer relations, product, design, legal, data science, and agencies.',
    examples: [{ title: 'The story behind VAIL VR', description: 'A two part developer story exploring AEXLAB, community funding, and the operation of a multiplayer VR game.', href: '/published#vail-vr-part-one', label: 'Read the work' }, { title: 'A practical path to market', description: 'A guide series covering marketing plans, influencers, community, assets, PR, and app demos for VR developers.', href: '/published#gtm-marketing-plan', label: 'Explore the guides' }, { title: 'Tools for the team', description: 'Built the Growth Systems Toolkit and a Horizon Creator Studio prototype to explore how software could support planning and creator workflows.' }],
  },
  {
    id: 'snap', company: 'Snap Inc.', role: 'Trend Producer', period: 'March to October 2025', chapter: 'Understand attention',
    title: 'Deciding what deserves to be seen.',
    summary: 'Daily content programming and creator discovery for Snapchat Spotlight, informed by culture and audience signals.',
    context: 'A discovery surface is shaped by countless editorial decisions. The work is to recognize promising content, understand why it resonates, and decide what to put in front of an audience.',
    contribution: ['Reviewed more than 1,000 videos daily, using audience trends and performance data to choose content and creators for amplification.', 'Managed content workflows from intake through distribution.', 'Worked with product and data teams on discovery, creator identification, and retention experiments.', 'Curated content for new user experiences and sourced creator videos for brand campaigns, including Say It in a Snap.'],
    delivered: 'Daily Spotlight programming, creator selections, and campaign content, including selections for Times Square placements. My contribution combined editorial decisions with the content workflows behind distribution.',
    throughline: 'Storytelling became a way to understand attention: what people respond to, what feels culturally relevant, and which creators deserve a larger audience.',
    collaborators: 'Editorial, product, data science, growth, and marketing teams.',
    examples: [{ title: 'Spotlight programming', description: 'A daily practice of reviewing content, reading performance signals, and choosing videos for amplification.' }, { title: 'Creator discovery', description: 'Partnered with data teams to review emerging creators and add editorial judgment to discovery workflows.' }, { title: 'Say It in a Snap', description: 'Sourced creator content for a brand campaign that brought Snapchat stories into public placements.' }],
  },
  {
    id: 'phony', company: 'Phony Content', role: 'Content Manager', period: 'May 2024 to March 2025', chapter: 'Find the story',
    title: 'Writing stories for the way people actually watch.',
    summary: 'Scripted mobile storytelling and editorial production for Tiny Texts, a Snapchat series told through text conversations.',
    context: 'On a phone, a story has to earn the next moment of attention. Character, pacing, and the reveal all work inside a small, familiar format.',
    contribution: ['Wrote and edited more than 50 digital story scripts.', 'Developed character voices, narrative arcs, and pacing for mobile viewing.', 'Managed editorial calendars, production schedules, and handoffs from draft through publication.', 'Built editorial templates and guides to support consistent production.'],
    delivered: 'A catalog of published Tiny Texts episodes, supported by a repeatable process for writing, editing, and production.',
    throughline: 'This is where the creative and operational parts of my work started coming together: make a story worth following, then build a way to keep making it.',
    collaborators: 'Writers, editors, production teammates, and company leadership.',
    examples: [{ title: 'Tiny Texts: Cheer Squad', description: 'A scripted story built for the rhythm of a text conversation.', href: 'https://snapchat.com/t/J2MP13US', label: 'Watch on Snapchat' }, { title: 'Tiny Texts: Inhaler', description: 'Character, tension, and a mobile storytelling format.', href: 'https://snapchat.com/t/wPotqUYw', label: 'Watch on Snapchat' }],
  },
  {
    id: 'stockx', company: 'StockX', role: 'Brand Creative Production · Freelance', period: '2021 and 2024', chapter: 'Pay attention to culture',
    title: 'Connecting cultural research with creative production.',
    summary: 'Research into Gen Z culture and production support for campaigns featuring athletes and creators.',
    context: 'Brand work starts with understanding the people and communities it hopes to speak to. Research and production are two ways of getting closer to that audience.',
    contribution: ['Authored the 2024 Core Insights Report on Gen Z trends, subcultures, and digital behavior.', 'Translated research into a report used to inform campaign strategy.', 'Provided production support for three campaigns featuring Sydeon, Briana King, and Brittney Elena.', 'Supported shoot logistics, talent coordination, and production handoffs.'],
    delivered: 'A cultural insights report and production contributions to published creator and athlete campaigns.',
    throughline: 'A foundation in observing culture, making an argument from what I saw, and working with a team to bring it to life.',
    collaborators: 'Brand creative, production, talent, and campaign teams.',
    examples: [{ title: 'Behind the Streams with Sydeon', description: 'Production support for a creator campaign at the intersection of gaming and style.', href: 'https://www.youtube.com/watch?v=0uBuJh7sEjU', label: 'Watch the campaign' }, { title: 'Briana King Joins StockX', description: 'Production support for a campaign centered on skate culture.', href: 'https://www.youtube.com/watch?v=V8sx2CJ9x4s', label: 'Watch the campaign' }],
  },
  {
    id: 'collider', company: 'Collider', role: 'Editorial Contributor · Freelance', period: 'August to October 2022', chapter: 'Find the angle',
    title: 'Turning a personal interest into published work.',
    summary: 'Film and television features built around a clear editorial angle and an understanding of what readers are looking for.',
    context: 'Writing about familiar films and shows means finding an angle that gives readers a reason to care, then delivering on it.',
    contribution: ['Researched and wrote film and television features.', 'Developed editorial angles around audience interests, seasonal themes, and cultural moments.', 'Shaped copy and structure for readability and search discovery.'],
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
