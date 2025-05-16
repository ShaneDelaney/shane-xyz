export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section id="hero" className="py-24 md:py-32 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Helping brands catch what&apos;s next — and create it.
            </h1>
            <p className="text-xl mb-10 text-gray-700 dark:text-gray-300">
              Trend reports, content audits, viral concept decks, and voice development for brands that move fast.
            </p>
            <a 
              href="#contact" 
              className="bg-black text-white dark:bg-white dark:text-black hover:bg-gray-900 dark:hover:bg-gray-100 px-8 py-4 rounded-lg font-medium text-center inline-block transition-colors"
            >
              Work With Me
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10">Who I Am</h2>
          <div className="max-w-3xl">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              With experience curating content at Snap Inc., scripting for viral platforms like Phony Texts, and building audiences across multiple channels, I specialize in surfacing trends early — and turning cultural momentum into strategic creative moves.
            </p>
          </div>
        </div>
      </section>
      
      {/* Snapchat Section */}
      <section id="snapchat" className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-3">Snapchat – Trend & Content Strategy</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
              Driving platform growth through editorial systems, voice alignment, and creative sourcing.
            </p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-8 md:p-10 rounded-xl mb-14">
            <span className="uppercase text-sm font-medium text-gray-500 dark:text-gray-400 tracking-wider block mb-3">My Role</span>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-4xl">
              As a Trend Curator at Snap, I identify and elevate culturally resonant UGC for the Spotlight platform <span className="bg-yellow-300 dark:bg-yellow-300 text-black px-2 py-0.5 rounded font-medium">~1K+ reviews/day</span>. I build internal tools and brand voice systems that ensure consistency across teams—translating complex data into clear documentation, pitch decks, and even a custom-built content app using Cursor IDE. My work supports editorial clarity, cross-functional alignment, and long-term platform growth.
            </p>
          </div>
          
          <h3 className="text-2xl font-bold mb-10">Key Wins</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-8 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-yellow-300 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2 20h.01M7 20v-4M12 20v-8M17 20V8M22 4v16" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-3">Executive-Facing Projects</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Developed Snap Star highlight decks and sourced creator clips for C-suite presentations, including work with Billie Eilish, Mike Tyson, and Lizzo, contributing to <span className="bg-yellow-300 dark:bg-yellow-300 text-black px-2 py-0.5 rounded font-medium">+175% YoY engagement</span>.
              </p>
            </div>
            
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-8 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-yellow-300 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="2" y1="12" x2="22" y2="12" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-3">Product x Content Collaboration</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Partnered with the Data Science team on a "Boosted Content" initiative; created a web app and doc/slides to distill technical insight into editorial guidance for <span className="bg-yellow-300 dark:bg-yellow-300 text-black px-2 py-0.5 rounded font-medium">1M+ monetized creators</span>.
              </p>
            </div>
            
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-8 hover:shadow-lg transition-all group col-span-1 md:col-span-2">
              <div className="w-12 h-12 bg-yellow-300 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-3">Say It in a Snap – Global Campaign Feature</h4>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">User-generated content meets cultural visibility.</p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                As part of Snap&apos;s 2025 NewFronts campaign, I sourced and curated standout user-generated Snaps that were featured in high-impact placements—including Times Square subway takeovers. This effort was part of the broader &apos;Say It in a Snap&apos; initiative, designed to celebrate authenticity and expression across Snapchat&apos;s global user base, reaching an estimated <span className="bg-yellow-300 dark:bg-yellow-300 text-black px-2 py-0.5 rounded font-medium">500K+ daily impressions</span>.
              </p>
              <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                <span className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Press Coverage:</span>
                <a href="https://newsroom.snap.com/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium mr-4 hover:text-blue-600 dark:hover:text-blue-400">Snap Newsroom Coverage</a>
                <a href="https://www.adweek.com/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400">Adweek Article</a>
              </div>
            </div>
            
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-8 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-yellow-300 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-3">Voice & Trust</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Maintained tone and content standards for <span className="bg-yellow-300 dark:bg-yellow-300 text-black px-2 py-0.5 rounded font-medium">99% brand-safe</span> Spotlight feed; worked cross-functionally with moderation, product, and marketing to establish consistent guidelines across teams.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Brand Guidelines Section */}
      <section id="brand-guidelines" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-3">Brand Voice & Guidelines</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
              Clarity, cohesion, and documentation that scales.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-8 md:p-10 rounded-xl mb-14">
            <span className="uppercase text-sm font-medium text-gray-500 dark:text-gray-400 tracking-wider block mb-3">My Approach</span>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-4xl">
              From internal tone guides to instructional decks, I create scalable voice systems that align teams and empower content creators. Whether it&apos;s guiding freelance writers or collaborating with product teams, my work translates brand values into usable tools and formats.
            </p>
          </div>
          
          <h3 className="text-2xl font-bold mb-10">Featured Projects</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-8 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="16" y1="13" x2="8" y2="13" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="16" y1="17" x2="8" y2="17" strokeLinecap="round" strokeLinejoin="round" />
                  <polyline points="10 9 9 9 8 9" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-3">Tone of Voice Frameworks</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Developed comprehensive brand voice documents with contextual examples, tone attributes, and copywriting principles that align with specific audience preferences.
              </p>
            </div>
            
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-8 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-3">Content Playbooks</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Created practical content guides for marketing teams, freelancers, and agency partners to ensure messaging consistency across touchpoints and channels.
              </p>
            </div>
            
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-8 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="3" y1="9" x2="21" y2="9" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="9" y1="21" x2="9" y2="9" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-3">Cross-Platform Consistency</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Engineered voice guidelines that maintain brand integrity while adapting to platform-specific constraints and opportunities, from TikTok to email.
              </p>
            </div>
            
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-8 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-3">Brand Evolution Tools</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Designed flexible documentation systems that allow brand voices to evolve while maintaining core identity elements through clearly defined principles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">What I Offer</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 border border-gray-200 dark:border-gray-800 rounded-lg hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold mb-4">Trend Pulse Reports</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Monthly or on-demand trend decks tracking rising culture, social media, and consumer behavior insights.
              </p>
              <p className="font-medium">Starting at $500/report</p>
            </div>
            
            <div className="p-8 border border-gray-200 dark:border-gray-800 rounded-lg hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold mb-4">Social Content Audits</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Deep analysis of your current digital presence with strategies to boost relevance, engagement, and shareability.
              </p>
              <p className="font-medium">Starting at $750/project</p>
            </div>
            
            <div className="p-8 border border-gray-200 dark:border-gray-800 rounded-lg hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold mb-4">Viral Concept Decks</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Custom creative idea decks based on timely trends, built to fuel campaigns and social content calendars.
              </p>
              <p className="font-medium">Starting at $1,200/project</p>
            </div>
            
            <div className="p-8 border border-gray-200 dark:border-gray-800 rounded-lg hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold mb-4">Creative Voice Development</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Brand voice guidelines and messaging frameworks to better connect with Gen Z and Millennial audiences.
              </p>
              <p className="font-medium">Custom pricing (inquire)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal Clients Section */}
      <section id="clients" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10">Who I Work With</h2>
          <div className="max-w-3xl">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Emerging brands, startups, media platforms, creators, and agencies who want to stay ahead — not play catch-up.
            </p>
          </div>
        </div>
      </section>

      {/* Sample Work Section */}
      <section id="work" className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Sample Work</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400 font-medium">Coming Soon</p>
            </div>
            
            <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400 font-medium">Coming Soon</p>
            </div>
            
            <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400 font-medium">Coming Soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10">Let&apos;s Connect</h2>
          <p className="text-lg mb-8">
            <a href="mailto:shanedelaney11@gmail.com" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              shanedelaney11@gmail.com
            </a>
          </p>
          <a 
            href="#" 
            className="bg-black text-white dark:bg-white dark:text-black hover:bg-gray-900 dark:hover:bg-gray-100 px-8 py-4 rounded-lg font-medium inline-block transition-colors"
          >
            Book a Free Discovery Call
          </a>
        </div>
      </section>
    </div>
  );
} 