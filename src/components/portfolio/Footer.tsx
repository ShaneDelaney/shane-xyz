import Link from 'next/link';
export default function Footer() {
  return <footer className="site-footer shell">
    <div><Link href="/" className="footer-name">Shane Delaney<span className="accent">.</span></Link><p>Creative judgment. Careful execution.</p></div>
    <div className="footer-links"><a href="mailto:shanedelaney11@gmail.com">Email ↗</a><a href="https://www.linkedin.com/in/shane-delaney-546445179/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href="/ShaneDelaney_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume ↗</a></div>
    <span className="footer-location">Based in Los Angeles</span>
  </footer>;
}
