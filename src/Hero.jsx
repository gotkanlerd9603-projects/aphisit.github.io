/* global React, Icon */
const Hero = () => {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero__greeting">Hello, I'm Aphisit Hathaway</div>

        <h1 className="hero__display">
          <span className="hero__display-row">APHISIT HATHAWAY</span>
          <span className="hero__display-row" style={{ opacity: "1", width: "1048px" }}>DIGITAL MARKETER</span>
        </h1>

        <div className="hero__bottom">
          <div className="hero__copy-col">
            <p className="hero__copy">
              I build practical digital marketing work that combines strategy, search
              visibility, content planning, and measurement thinking — helping brands
              communicate clearly, reach the right audience, and improve decisions through
              structured, data-informed marketing.
            </p>
            <a className="btn btn--pill hero__cta" href="#contact">
              Book Meeting
              <span className="btn__icon"><Icon name="arrow-up-right" size={14} /></span>
            </a>
          </div>

          <div className="hero__portrait" role="img" aria-label="Portrait placeholder">
            <div className="hero__portrait-inner">
              <div className="hero__portrait-tag">Portrait</div>
              <div className="hero__portrait-name">Aphisit Hathaway</div>
              <div className="hero__portrait-sub">Digital Marketing · 2026</div>
              <div className="hero__portrait-hint">Drop a photo into this slot</div>
            </div>
            <svg className="hero__portrait-doodle" viewBox="0 0 200 200" aria-hidden="true">
              <circle cx="40" cy="50" r="3" />
              <circle cx="60" cy="35" r="2" />
              <circle cx="160" cy="60" r="3" />
              <path d="M30 90 Q50 70 80 85" stroke="currentColor" strokeWidth="1" fill="none" />
              <path d="M150 120 Q170 100 180 130" stroke="currentColor" strokeWidth="1" fill="none" />
            </svg>
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