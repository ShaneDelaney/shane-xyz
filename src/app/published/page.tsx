import Link from 'next/link';
import groups from '@/data/published.json';

export const metadata = { title: 'Published work | Shane Delaney' };
const labels: Record<string, string> = {
  platform: 'Developer stories', guides: 'Marketing guides',
  narrative: 'Scripted series', editorial: 'Culture & campaigns',
};

export default function Published() {
  return (
    <div className="collection panel">
      <header className="collection-header">
        <span className="eyebrow">Read &amp; watch</span>
        <h1>Published work</h1>
        <nav className="category-nav" aria-label="Categories">
          {groups.map(group => <a key={group.id} href={`#${group.id}`}>{labels[group.id]}</a>)}
        </nav>
      </header>
      <div className="scroll-panel publication-scroll" tabIndex={0} aria-label="Published work collection">
        {groups.map(group => (
          <section key={group.id} id={group.id} className="publication-group">
            <h2>{labels[group.id]}</h2>
            <div className="publication-list">
              {group.articles.map(article => {
                const contribution = article.publication.includes('StockX') ? 'Production support'
                  : article.publication.includes('Collider') ? 'Editorial writing'
                  : group.id === 'narrative' ? 'Scriptwriting & production' : 'Writing & editorial production';
                const content = <>
                  <div className="publication-info">
                    <span className="eyebrow">{article.publication} · {article.year}</span>
                    <h3>{article.title}</h3>
                    <p>{contribution}{!article.url && ' · Series overview'}</p>
                  </div>
                  <span className="publication-arrow" aria-hidden="true">↗</span>
                </>;
                return (
                  <article id={article.slug} key={article.slug} className="publication publication-entry">
                    {article.url
                      ? <a className="publication-link" href={article.url} target="_blank" rel="noopener noreferrer">{content}<span className="sr-only"> (opens in a new tab)</span></a>
                      : <Link className="publication-link" href="/work/phony">{content}</Link>}
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
