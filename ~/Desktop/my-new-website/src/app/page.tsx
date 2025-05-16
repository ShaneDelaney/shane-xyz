import Link from "next/link";
// import ScrollToTop from "../components/ui/ScrollToTop";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Helping brands catch what's next — and create it.
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

      {/* Services Section */}
      <section id="services" className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">What I Offer</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <div className="p-8 border border-gray-200 dark:border-gray-800 rounded-lg hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold mb-4">Trend Pulse Reports</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Monthly or on-demand trend decks tracking rising culture, social media, and consumer behavior insights.
              </p>
              <p className="font-medium">Starting at $500/report</p>
            </div>
            
            {/* Service 2 */}
            <div className="p-8 border border-gray-200 dark:border-gray-800 rounded-lg hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold mb-4">Social Content Audits</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Deep analysis of your current digital presence with strategies to boost relevance, engagement, and shareability.
              </p>
              <p className="font-medium">Starting at $750/project</p>
            </div>
            
            {/* Service 3 */}
            <div className="p-8 border border-gray-200 dark:border-gray-800 rounded-lg hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold mb-4">Viral Concept Decks</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Custom creative idea decks based on timely trends, built to fuel campaigns and social content calendars.
              </p>
              <p className="font-medium">Starting at $1,200/project</p>
            </div>
            
            {/* Service 4 */}
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
            {/* Work Sample 1 */}
            <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400 font-medium">Coming Soon</p>
            </div>
            
            {/* Work Sample 2 */}
            <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400 font-medium">Coming Soon</p>
            </div>
            
            {/* Work Sample 3 */}
            <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400 font-medium">Coming Soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10">Let's Connect</h2>
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

      {/* Removing ScrollToTop temporarily */}
      {/* <ScrollToTop /> */}
    </div>
  );
} 