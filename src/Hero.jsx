/* global React, Icon */
const Hero = () => {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero__greeting">Hello, I'm Aphisit Hathaway</div>

        <h1 className="hero__display">
          <span className="hero__display-row">APHISIT HATHAWAY</span>
          <span className="hero__display-row">DIGITAL MARKETER</span>
        </h1>

        <div className="hero__bottom">
          <div className="hero__copy-col">
            <p className="hero__copy">
              I build practical digital marketing work across SEO, content strategy, GA4,
              and AI-assisted workflows — helping brands improve search visibility, plan
              purposeful content, and make smarter decisions through structured,
              data-informed campaigns.
            </p>
            <a className="btn btn--pill hero__cta" href="#contact">
              Book Meeting
              <span className="btn__icon"><Icon name="arrow-up-right" size={14} /></span>
            </a>
          </div>

          {/* Visual placeholder: marketing toolkit dashboard mockup.
              When the user provides a real photo, swap this block for an <img>. */}
          <div className="hero__visual" role="img" aria-label="Marketing toolkit overview placeholder — neutral dashboard mockup illustrating SEO, GA4, Search Console, and Content Plan modules">
            <div className="hero__visual-head">
              <span className="hero__visual-dot" /><span className="hero__visual-dot" /><span className="hero__visual-dot" />
              <span className="hero__visual-label">Marketing Toolkit · Preview</span>
            </div>
            <div className="hero__visual-grid">
              <div className="hero__visual-tile">
                <div className="hero__visual-tile-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="6"/><path d="m20 20-3.5-3.5"/></svg>
                </div>
                <div className="hero__visual-tile-name">SEO</div>
                <div className="hero__visual-tile-sub">Keywords · Queries</div>
              </div>
              <div className="hero__visual-tile">
                <div className="hero__visual-tile-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20V10"/><path d="M10 20V4"/><path d="M16 20v-8"/><path d="M22 20H2"/></svg>
                </div>
                <div className="hero__visual-tile-name">GA4</div>
                <div className="hero__visual-tile-sub">Engagement</div>
              </div>
              <div className="hero__visual-tile">
                <div className="hero__visual-tile-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>
                </div>
                <div className="hero__visual-tile-name">Search Console</div>
                <div className="hero__visual-tile-sub">Visibility</div>
              </div>
              <div className="hero__visual-tile">
                <div className="hero__visual-tile-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>
                </div>
                <div className="hero__visual-tile-name">Content Plan</div>
                <div className="hero__visual-tile-sub">Calendar</div>
              </div>
            </div>
            <div className="hero__visual-foot">
              <span>Conceptual preview · Placeholder until real assets are added</span>
            </div>
          </div>

          <aside className="hero__quote">
            <div className="hero__quote-icon">
              <Icon name="quote" size={16} />
            </div>
            <div className="hero__quote-controls">
              <button className="icon-circle" aria-label="Previous">
                <Icon name="arrow-left" size={14} />
              </button>
              <button className="icon-circle" aria-label="Next">
                <Icon name="arrow-right" size={14} />
              </button>
            </div>
            <p className="hero__quote-body">
              This portfolio documents real projects, real tracking systems, and the
              marketing thinking behind them. Verified case studies will follow as
              measurement data stabilizes.
            </p>
            <div className="hero__quote-meta">
              <div className="hero__quote-name">Positioning</div>
              <div className="hero__quote-loc">Aphisit Hathaway · Thailand</div>
            </div>
          </aside>
        </div>
      </div>
    </section>);

};
window.Hero = Hero;
