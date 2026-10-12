import Link from 'next/link';

export default function Home() {
  return (
    <section className="home-intro" aria-labelledby="home-title">
      <div className="home-intro-content">
        <span className="eyebrow">Los Angeles</span>
        <h1 id="home-title">Shane Delaney</h1>
        <p className="home-focus">Project management. Global operations.</p>
        <p className="home-direction">
          Leading campaign workstreams at TikTok. Building toward broader leadership in tech and product.
        </p>
        <div className="actions">
          <Link className="button primary" href="/work">Explore my work <span aria-hidden="true">↗</span></Link>
          <a className="button" href="mailto:shanedelaney11@gmail.com">Get in touch</a>
        </div>
      </div>
    </section>
  );
}
