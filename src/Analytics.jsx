/* global React */

// Neutral SVG glyphs for each analytics card — no metrics implied.
const AnalyticsGlyph = ({ kind }) => {
  const common = {
    width: 28, height: 28, viewBox: '0 0 24 24', fill: 'none',
    stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round',
    'aria-hidden': true,
  };
  if (kind === 'visibility') return (
    <svg {...common}><circle cx="11" cy="11" r="6"/><path d="m20 20-3.5-3.5"/><path d="M11 8v3l2 2"/></svg>
  );
  if (kind === 'behavior') return (
    <svg {...common}><rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/></svg>
  );
  if (kind === 'content') return (
    <svg {...common}><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6"/><path d="M9 13h6M9 17h4"/></svg>
  );
  if (kind === 'reporting') return (
    <svg {...common}><path d="M4 20V10"/><path d="M10 20V4"/><path d="M16 20v-8"/><path d="M22 20H2"/></svg>
  );
  return null;
};

const Analytics = () => {
  const cards = [
    {
      no: '01',
      kind: 'visibility',
      title: 'Search Visibility Monitoring',
      body: 'Track impressions, clicks, CTR trends, and search queries through Google Search Console to understand how the site begins appearing in search.',
      foot: 'Google Search Console',
    },
    {
      no: '02',
      kind: 'behavior',
      title: 'Website Behavior Review',
      body: 'Use GA4 to observe traffic sources, visited pages, engagement patterns, and how users interact with portfolio content.',
      foot: 'GA4 · Engagement Reports',
    },
    {
      no: '03',
      kind: 'content',
      title: 'Content Improvement Logic',
      body: 'Translate early performance signals into ideas for updating page structure, refining content, expanding topics, and improving recruiter-facing clarity.',
      foot: 'Iterative Optimization',
    },
    {
      no: '04',
      kind: 'reporting',
      title: 'Reporting Mindset',
      body: 'Summarize findings into simple, structured insights that support better marketing decisions over time.',
      foot: 'Insight Writing',
    },
  ];
  return (
    <section className="analytics" id="analytics">
      <div className="container">
        <div className="eyebrow">Analytics &amp; Measurement</div>
        <div className="section-opener">
          <h2>Building the foundation for measurable digital marketing work.</h2>
          <p className="section-opener__aside">
            My analytics work focuses on setting up the right measurement foundation before
            making strong claims about performance. I use Google Search Console and GA4 to
            observe how content is discovered, how users arrive on the site, and which
            signals can guide future improvements.
          </p>
        </div>

        <div className="analytics__grid">
          {cards.map(c => (
            <article className="analytics__card" key={c.no}>
              <div className="analytics__card-head">
                <span className="analytics__card-glyph"><AnalyticsGlyph kind={c.kind} /></span>
                <span className="analytics__card-no">({c.no})</span>
              </div>
              <h3 className="analytics__card-title">{c.title}</h3>
              <p className="analytics__card-body">{c.body}</p>
              <div className="analytics__card-foot">{c.foot}</div>
            </article>
          ))}
        </div>

        <div className="analytics__note">
          <span className="analytics__note-tag">Note</span>
          <span>
            Verified performance case studies will be added as the portfolio gathers stable
            search and analytics data. The current focus is methodology and measurement
            readiness — knowing what to track, why it matters, and how the data will inform
            future decisions.
          </span>
        </div>
      </div>
    </section>
  );
};
window.Analytics = Analytics;
