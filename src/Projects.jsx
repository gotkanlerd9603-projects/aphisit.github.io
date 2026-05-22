/* global React, Icon */
const Projects = () => {
  const projects = [
    {
      idx: '01 / 04',
      title: 'SEO Portfolio Website',
      summary:
        'This portfolio site is built as a live SEO case study. I structured the information architecture for search indexability, connected Google Search Console to track impressions and keyword queries, and configured GA4 to measure traffic sources and user engagement. Performance data is actively accumulating.',
      focus: [
        'Website information architecture',
        'SEO-friendly page structure',
        'Search Console connection',
        'GA4 tracking setup',
        'Portfolio positioning for remote job applications',
      ],
      skills: ['SEO', 'Website Strategy', 'Analytics Setup', 'Content Planning'],
      status: 'Active Portfolio Project',
      feature: true,
      panel: {
        title: 'Tracking Foundation',
        rows: [
          ['Search Console', 'Connected'],
          ['GA4 Property', 'Active'],
          ['Sitemap', 'Submitted'],
          ['Indexability', 'Reviewed'],
          ['Performance Data', 'Collecting'],
        ],
      },
    },
    {
      idx: '02 / 04',
      title: 'Google Search Console & GA4 Measurement Setup',
      summary:
        'I built a measurement framework using Google Search Console to monitor search impressions, click-through rates, and top queries, and GA4 to track acquisition channels, landing page behaviour, and user engagement. This project documents the setup rationale, reporting structure, and planned analysis cycle.',
      focus: [
        'Search impressions and clicks monitoring',
        'Query and landing page review',
        'Traffic source observation',
        'Engagement signal tracking',
        'Reporting structure for future insights',
      ],
      skills: ['Search Console', 'GA4', 'Marketing Reporting', 'Data Interpretation'],
      status: 'Tracking Framework in Progress',
    },
    {
      idx: '03 / 04',
      title: '30-Day Content Strategy',
      summary:
        'I designed a 30-day content strategy that translates a brand\'s core positioning into weekly themes, content pillars, and platform-ready post concepts. Deliverables include caption direction, audience relevance mapping, and a publishing structure built to maintain brand consistency across social channels.',
      focus: [
        'Content pillars',
        'Monthly publishing structure',
        'Audience relevance',
        'Caption direction',
        'Brand consistency across posts',
      ],
      skills: ['Content Strategy', 'Social Media Planning', 'Copywriting', 'Brand Communication'],
      status: 'Portfolio Strategy Project',
    },
    {
      idx: '04 / 04',
      title: 'Digital Ads Campaign Concept',
      summary:
        'I developed a paid advertising campaign concept that maps a business objective to audience targeting, funnel stages, and ad creative direction for Meta, Google, or TikTok Ads. The project demonstrates how I structure a campaign brief — from audience thinking and ad copy direction to CTA planning — without requiring live ad spend.',
      focus: [
        'Campaign objective',
        'Target audience definition',
        'Funnel structure',
        'Ad copy direction',
        'Creative angle and CTA planning',
      ],
      skills: ['Campaign Planning', 'Performance Fundamentals', 'Audience Thinking', 'Ad Copy'],
      status: 'Campaign Concept Project',
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="eyebrow">Selected Projects</div>
        <div className="section-opener">
          <h2>Portfolio projects showing how I approach SEO, content strategy, analytics, and paid campaign planning.</h2>
          <p className="section-opener__aside">
            These projects are designed to demonstrate process, tools, and decision-making
            across SEO, analytics, content strategy, and campaign planning. Where long-term
            performance data is still developing, the focus is on the quality of setup,
            structure, and marketing logic behind the work.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map(p => (
            <article
              key={p.idx}
              className={`project-card ${p.feature ? 'project-card--feature' : ''}`}
            >
              <span className="project-card__cta" aria-hidden="true">
                <Icon name="arrow-up-right" size={14} />
              </span>

              {p.feature ? (
                <div className="project-card__feature-grid">
                  <div>
                    <div className="project-card__head">
                      <span className="project-card__index">PROJECT · {p.idx}</span>
                      <span className="project-card__status">{p.status}</span>
                    </div>
                    <h3 className="project-card__title">{p.title}</h3>
                    <p className="project-card__summary">{p.summary}</p>
                    <p className="project-card__sub">Key Focus</p>
                    <ul className="project-card__focus">
                      {p.focus.map(f => <li key={f}><span>{f}</span></li>)}
                    </ul>
                    <div className="project-card__skills">
                      {p.skills.map(s => (
                        <span key={s} className="project-card__skill">{s}</span>
                      ))}
                    </div>
                  </div>

                  <aside className="project-card__panel">
                    <div className="project-card__panel-title">{p.panel.title}</div>
                    {p.panel.rows.map(([lbl, val]) => (
                      <div className="project-card__panel-row" key={lbl}>
                        <span className="lbl">{lbl}</span>
                        <span className="val">{val}</span>
                      </div>
                    ))}
                    <div style={{
                      marginTop: 18,
                      paddingTop: 14,
                      borderTop: '1px solid var(--cream-08)',
                      fontSize: 11,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: 'var(--cream-60)',
                    }}>
                      Performance data accumulating — case study to follow.
                    </div>
                  </aside>
                </div>
              ) : (
                <>
                  <div className="project-card__head">
                    <span className="project-card__index">PROJECT · {p.idx}</span>
                    <span className="project-card__status">{p.status}</span>
                  </div>
                  <h3 className="project-card__title">{p.title}</h3>
                  <p className="project-card__summary">{p.summary}</p>
                  <p className="project-card__sub">Key Focus</p>
                  <ul className="project-card__focus">
                    {p.focus.map(f => <li key={f}><span>{f}</span></li>)}
                  </ul>
                  <div className="project-card__skills">
                    {p.skills.map(s => (
                      <span key={s} className="project-card__skill">{s}</span>
                    ))}
                  </div>
                </>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
window.Projects = Projects;
