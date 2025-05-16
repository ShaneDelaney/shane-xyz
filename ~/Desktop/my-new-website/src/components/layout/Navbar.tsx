import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/95 backdrop-blur dark:border-white/5 dark:bg-black/95">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold">
          MySite
        </Link>
        
        <ul className="flex items-center gap-8">
          <li>
            <Link href="/" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400">
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
} 