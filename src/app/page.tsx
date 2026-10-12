import Link from 'next/link';

const selected = [
  { company: 'Meta Horizon', title: 'VAIL VR', detail: 'Developer stories', href: '/published#vail-vr-part-one' },
  { company: 'Phony Content', title: 'Tiny Texts', detail: 'Scriptwriting & production', href: '/work/phony' },
  { company: 'Snap Inc.', title: 'Spotlight', detail: 'Content programming', href: '/work/snap' },
];

export default function Home() {
  return <div className="dashboard">
    <section className="panel intro-panel">
      <span className="eyebrow">Los Angeles</span>
      <h1>Shane Delaney</h1>
      <p className="lead">Campaigns, content & editorial.</p>
      <p className="career-note">TikTok · Apple · Meta · Snap</p>
      <div className="actions">
        <Link className="button primary" href="/work">Explore my work ↗</Link>
        <a className="button" href="mailto:shanedelaney11@gmail.com">Get in touch</a>
      </div>
    </section>
    <Link className="panel current-panel" href="/work/tiktok">
      <span className="eyebrow">Currently at</span>
      <div className="current-title"><h2>TikTok</h2><p className="role">Global Sports Operations</p></div>
      <p className="current-description">Campaign coordination, content delivery, and global launches.</p>
      <span className="current-link">View role <span aria-hidden="true">↗</span></span>
    </Link>
    <section className="panel selected-panel">
      <div className="panel-label"><h2>Selected work</h2><Link className="text-link" href="/published">View all ↗</Link></div>
      <div className="selected-grid">{selected.map(item => <Link className="mini-card" key={item.title} href={item.href}>
        <span className="eyebrow">{item.company}</span><h3>{item.title}</h3><p>{item.detail}</p><span className="card-arrow" aria-hidden="true">↗</span>
      </Link>)}</div>
    </section>
  </div>;
}
