import Image from 'next/image';

export default function About() {
  return (
    <article className="panel about-copy about-profile scroll-panel" tabIndex={0} aria-label="About Shane">
      <header className="about-profile-header">
        <figure className="profile-photo">
          <Image src="/about_shane.png" alt="Shane Delaney" fill sizes="112px" priority />
        </figure>
        <div><span className="eyebrow">Detroit to Los Angeles</span><h1>About me</h1></div>
      </header>
      <p className="lead">I manage complex initiatives across teams, from planning and priorities through launch.</p>
      <p>My experience spans global sports campaigns at TikTok, App Store editorial operations, Meta developer marketing, and Snapchat content programming.</p>
      <section id="next"><h2>What’s next</h2><p>I want to lead teams and initiatives in tech, with greater responsibility for product decisions informed by data and user experience.</p></section>
      <section><h2>Education</h2><p>Loyola Marymount University<br />B.A., English &amp; Screenwriting · 2023</p></section>
      <p>Outside work: film, music, and skateboarding.</p>
      <div className="actions">
        <a className="button primary" href="mailto:shanedelaney11@gmail.com">Get in touch ↗</a>
        <a className="button" href="https://www.linkedin.com/in/shane-delaney-546445179/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
      </div>
    </article>
  );
}
