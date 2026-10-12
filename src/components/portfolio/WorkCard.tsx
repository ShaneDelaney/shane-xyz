import Link from 'next/link';
import type { WorkStory } from '@/data/work';
export default function WorkCard({ story, index }: { story: WorkStory; index: number }) {
  return <Link className="work-row" href={`/work/${story.id}`}>
    <div className="work-row-meta"><span className="index">{String(index + 1).padStart(2, '0')}</span><span>{story.company}</span><span className="work-period">{story.period}</span></div>
    <div><h3>{story.title}</h3><p>{story.summary}</p><span className="role-label">{story.role}</span></div>
    <span className="row-arrow" aria-hidden="true">↗</span>
  </Link>;
}
