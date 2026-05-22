/* global React */
const Analytics = () => {
  const cards = [
    {
      no: '01',
      title: 'Search Visibility Monitoring',
      body: 'Track impressions, clicks, CTR trends, and search queries through Google Search Console to understand how the site begins appearing in search.',
      foot: 'Google Search Console',
    },
    {
      no: '02',
      title: 'Website Behavior Review',
      body: 'Use GA4 to observe traffic sources, visited pages, engagement patterns, and how users interact with portfolio content.',
      foot: 'GA4 · Engagement Reports',
    },
    {
      no: '03',
      title: 'Content Improvement Logic',
      body: 'Translate early performance signals into ideas for updating page structure, refining content, expanding topics, and improving recruiter-facing clarity.',
      foot: 'Iterative Optimization',
    },
    {
      no: '04',
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
              <span className="analytics__card-no">({c.no})</span>
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
