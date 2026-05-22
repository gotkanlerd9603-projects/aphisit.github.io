/* global React, Icon */
const Contact = () => {
  const navLinks = ['About', 'Skills', 'Projects', 'Analytics', 'Experience', 'Contact'];
  const previews = [
  { idx: '01', ttl: 'SEO Portfolio Website', tag: 'Active' },
  { idx: '02', ttl: 'GSC + GA4 Measurement Setup', tag: 'In Progress' },
  { idx: '03', ttl: '30-Day Content Strategy', tag: 'Strategy' },
  { idx: '04', ttl: 'Digital Ads Campaign Concept', tag: 'Concept' }];


  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="eyebrow">Let's Connect</div>
        <div className="contact__hero">
          <div>
            <h2 className="contact__heading">
              Looking for a digital marketer who can think creatively and work with structure?
            </h2>
            <p className="contact__sub">
              I am open to remote, hybrid, freelance, and project-based digital marketing
              opportunities. For collaborations, portfolio discussions, or job opportunities,
              feel free to reach out.
            </p>
          </div>
          <div className="contact__cta-row">
            <a className="btn btn--pill" href="mailto:hello@aphisit.work">
              Contact Me
              <span className="btn__icon"><Icon name="arrow-up-right" size={14} /></span>
            </a>
            <a className="btn btn--pill-ghost"
            href="https://www.linkedin.com/in/aphisit-hathaway-b6a214368"
            target="_blank" rel="noreferrer">
              View LinkedIn
              <span className="btn__icon"><Icon name="arrow-up-right" size={14} /></span>
            </a>
          </div>
        </div>

        <div className="contact__cols">
          <div className="contact__col">
            <h4>Navigate</h4>
            <div className="contact__nav">
              {navLinks.map((l) =>
              <a key={l} href={`#${l.toLowerCase()}`}>{l}</a>
              )}
            </div>
          </div>

          <div className="contact__col contact__col--center">
            <h4>Profile</h4>
            <div className="contact__center-name">Aphisit<br />Hathaway.</div>
            <p className="contact__center-pos">
              AI-Driven Digital Marketer focused on SEO, Content Strategy, Ads, Analytics,
              and Data-Driven Campaigns.
            </p>
            <dl className="contact__center-meta">
              <div className="contact__meta-row">
                <span className="lbl">Location</span>
                <span className="val">Thailand</span>
              </div>
              <div className="contact__meta-row">
                <span className="lbl">Availability</span>
                <span className="val">Remote · Hybrid · Freelance</span>
              </div>
              <div className="contact__meta-row">
                <span className="lbl">Email</span>
                <span className="val">Aphisithathaway@gmail.com
</span>
              </div>
              <div className="contact__meta-row">
                <span className="lbl">Response</span>
                <span className="val">Within 24h</span>
              </div>
            </dl>
          </div>

          <div className="contact__col">
            <h4>Connect</h4>
            <div className="contact__connect">
              <a href="mailto:hello@aphisit.work">
                <span className="contact__connect-label"><Icon name="mail" size={16} />Email</span>
                <span className="arrow"><Icon name="arrow-up-right" size={14} /></span>
              </a>
              <a href="https://www.linkedin.com/in/aphisit-hathaway-b6a214368" target="_blank" rel="noreferrer">
                <span className="contact__connect-label"><Icon name="linkedin" size={16} />LinkedIn</span>
                <span className="arrow"><Icon name="arrow-up-right" size={14} /></span>
              </a>
              <a href="#projects">
                <span className="contact__connect-label"><Icon name="arrow-up-right" size={16} />Portfolio</span>
                <span className="arrow"><Icon name="arrow-up-right" size={14} /></span>
              </a>
              <a href="#contact">
                <span className="contact__connect-label"><Icon name="calendar" size={16} />Book a Call</span>
                <span className="arrow"><Icon name="arrow-up-right" size={14} /></span>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__previews">
          {previews.map((p) =>
          <a className="contact__preview" key={p.idx} href="#projects">
              <span className="idx">PROJECT · {p.idx}</span>
              <span className="ttl">{p.ttl}</span>
              <span className="tag">{p.tag}</span>
            </a>
          )}
        </div>

        <div className="contact__base">
          <span className="contact__base-brand">Aphisit Hathaway</span>
          <span className="contact__base-copy">© 2026 Aphisit Hathaway. Digital Marketing Portfolio.</span>
          <a className="contact__base-back" href="#top">
            Back to top
            <span className="ic"><Icon name="arrow-up" size={14} /></span>
          </a>
        </div>
      </div>
    </section>);

};
window.Contact = Contact;