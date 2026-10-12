import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { work } from '@/data/work';
import WorkCard from '@/components/portfolio/WorkCard';
export const metadata: Metadata = { title: 'Work | Shane Delaney', description: 'The context, contribution, and delivery behind work at TikTok, Apple, Meta, Snap, and beyond.' };
export default async function Work({ searchParams }: { searchParams: Promise<{ company?: string }> }) {
  const { company } = await searchParams;
  if (company && work.some(w=>w.id===company)) redirect(`/work/${company}`);
  return <div className="shell page-content"><header className="page-intro"><span className="eyebrow">Experience / The work behind the work</span><h1>Good ideas need<br /><span className="serif">people who follow through.</span></h1><p>Across storytelling, content programming, and global campaigns, my role has grown around one question: what does it take to bring this to an audience?</p></header><div className="work-list">{work.map((story,index)=><WorkCard key={story.id} story={story} index={index}/>)}</div></div>;
}
