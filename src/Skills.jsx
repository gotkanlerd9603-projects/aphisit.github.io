/* global React */
const Skills = () => {
  const groups = [
    {
      no: '01',
      title: 'SEO & Search',
      items: [
        'Keyword Research',
        'Search Intent Analysis',
        'On-Page SEO',
        'SEO Content Writing',
        'Google Search Console',
        'Search Performance Reporting',
      ],
    },
    {
      no: '02',
      title: 'Analytics & Measurement',
      items: [
        'GA4 Fundamentals',
        'Website Traffic Review',
        'User Behavior Monitoring',
        'Search Performance Tracking',
        'KPI Summary Development',
        'Insight Writing',
      ],
    },
    {
      no: '03',
      title: 'Paid Media & Campaign Planning',
      items: [
        'Meta Ads Basics',
        'Google Ads Basics',
        'TikTok Ads Basics',
        'Audience & Persona Thinking',
        'Funnel-Based Planning',
        'Ad Copy Ideation',
      ],
    },
    {
      no: '04',
      title: 'Content & Creative Tools',
      items: [
        'Social Media Planning',
        '30-Day Content Calendar',
        'Caption Writing',
        'Canva Design',
        'CapCut Video Editing',
        'Creative Brief Development',
      ],
    },
  ];
  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="eyebrow">Core Skills</div>
        <div className="section-opener">
          <h2>A practical digital marketing skill set built around visibility, communication, and measurement.</h2>
          <p className="section-opener__aside">
            Grouped by working area so recruiters can quickly map capability to role
            requirements. Each item reflects practical understanding applied within
            portfolio projects, not certifications alone.
          </p>
        </div>
        <div className="skills__grid">
          {groups.map(g => (
            <article className="skill-card" key={g.no}>
              <div className="skill-card__head">
                <h3 className="skill-card__title">{g.title}</h3>
                <span className="skill-card__no">({g.no})</span>
              </div>
              <ul className="skill-card__list">
                {g.items.map(it => <li key={it}>{it}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
window.Skills = Skills;
