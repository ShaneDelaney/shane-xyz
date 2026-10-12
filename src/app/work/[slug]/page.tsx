import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { work } from '@/data/work';
export function generateStaticParams() { return work.map(w=>({ slug:w.id })); }
export async function generateMetadata({ params }: { params: Promise<{ slug:string }> }): Promise<Metadata> { const {slug}=await params;const story=work.find(w=>w.id===slug);return {title:story ? `${story.company} | Shane Delaney` : 'Work not found',description:story?.summary}; }
export default async function WorkDetail({ params }: { params:Promise<{slug:string}> }) {
  const {slug}=await params;const story=work.find(w=>w.id===slug);if(!story)notFound();const index=work.findIndex(w=>w.id===slug);const next=work[(index+1)%work.length];
  return <article className="shell page-content case-page"><Link className="back-link" href="/work">← All work</Link><header className="case-header"><span className="eyebrow">{story.company} / {story.chapter}</span><h1>{story.title}</h1><p className="case-summary">{story.summary}</p><dl className="case-meta"><div><dt>Role</dt><dd>{story.role}</dd></div><div><dt>When</dt><dd>{story.period}</dd></div><div><dt>Worked with</dt><dd>{story.collaborators}</dd></div></dl></header>
  <section className="case-section"><h2>The context</h2><p>{story.context}</p></section>
  <section className="case-section"><h2>My contribution</h2><ol className="contribution-list">{story.contribution.map((c,i)=><li key={c}><span className="index">{String(i+1).padStart(2,'0')}</span><p>{c}</p></li>)}</ol></section>
  <section className="case-section"><h2>What we delivered</h2><p>{story.delivered}</p></section>
  <section className="case-examples"><div className="section-heading"><div><span className="eyebrow">A closer look</span><h2>The work in practice.</h2></div></div><div className="example-grid">{story.examples.map(e=><div className="example" key={e.title}><h3>{e.title}</h3><p>{e.description}</p>{e.href && (e.href.startsWith('/') ? <Link className="text-link" href={e.href}>{e.label} ↗</Link> : <a className="text-link" href={e.href} target="_blank" rel="noopener noreferrer">{e.label} ↗</a>)}</div>)}</div></section>
  <aside className="case-throughline"><span className="eyebrow">The throughline</span><p className="serif">{story.throughline}</p></aside>
  <Link className="next-work" href={`/work/${next.id}`}><span className="eyebrow">Keep following the work</span><h2>{next.company} <span aria-hidden="true">↗</span></h2><p>{next.title}</p></Link></article>;
}
