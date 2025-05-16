import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full border-t border-black/5 bg-white dark:border-white/5 dark:bg-black">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-bold">MySite</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              A professional website with a modern design.
            </p>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-bold">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-bold">Contact</h3>
            <address className="not-italic">
              <p className="text-sm text-gray-600 dark:text-gray-400">Email: info@mysite.com</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Phone: (123) 456-7890</p>
            </address>
          </div>
        </div>
        
        <div className="mt-8 border-t border-black/5 pt-8 text-center dark:border-white/5">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} MySite. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 