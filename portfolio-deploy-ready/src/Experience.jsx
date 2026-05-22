/* global React, Icon */
const Experience = () => {
  const rows = [
    {
      no: '01',
      role: 'Co-Founder',
      org: 'All About Blind Box',
      desc: 'Co-founded and operated a small consumer business, supporting product selection, customer communication, promotional activity, and daily business coordination. This experience strengthened my commercial mindset and helped me understand how marketing connects with actual customer behavior and sales context.',
      period: 'Apr 2024 – Mar 2025',
      tag: 'Founder',
    },
    {
      no: '02',
      role: 'Participant',
      org: 'Glico Palitte Marketing Plan Competition',
      desc: 'Developed marketing ideas and planning concepts in a structured competition environment, strengthening my ability to think about positioning, target audiences, and campaign direction.',
      period: 'Competition',
      tag: 'Strategy',
    },
    {
      no: '03',
      role: 'Entrepreneur',
      org: 'BUSEM Business Fair 2024',
      desc: 'Participated in a business fair environment that required product presentation, customer interaction, and practical on-site selling experience.',
      period: '2024',
      tag: 'Retail',
    },
    {
      no: '04',
      role: 'Event Assistant',
      org: 'POP CON @ The Street Ratchada',
      desc: 'Supported on-ground event operations, coordination, and audience-facing logistics in a large-scale public event environment.',
      period: '2022',
      tag: 'Events',
    },
    {
      no: '05',
      role: 'Event Assistant',
      org: 'Bangkok University Open House',
      desc: 'Assisted with event coordination and visitor support, gaining practical experience in communication, organization, and live event execution.',
      period: '2022',
      tag: 'Events',
    },
  ];

  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="eyebrow">Experience</div>
        <div className="section-opener">
          <h2>Marketing, coordination, and entrepreneurial experience that shaped how I work.</h2>
          <p className="section-opener__aside">
            Roles across small business operations, competitions, and live event coordination —
            each one sharpened a transferable skill: customer understanding, planning,
            communication, and execution under real conditions.
          </p>
        </div>

        <div className="experience__list">
          {rows.map(r => (
            <div className="xrow" key={r.no}>
              <div className="xrow__no">{r.no}</div>
              <div>
                <h3 className="xrow__role">{r.role}</h3>
                <div className="xrow__org">{r.org}</div>
              </div>
              <p className="xrow__desc">{r.desc}</p>
              <div className="xrow__period">
                <span className="xrow__period-tag">{r.tag}</span>
                <div style={{ marginTop: 8 }}>{r.period}</div>
              </div>
              <div className="xrow__cta"><Icon name="arrow-up-right" size={14} /></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
window.Experience = Experience;
