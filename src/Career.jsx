/* global React */
const Career = () => {
  const roles = [
    { label: 'Digital Marketing', tag: 'Core' },
    { label: 'SEO / Content Marketing', tag: 'Core' },
    { label: 'Marketing Communication', tag: 'Adjacent' },
    { label: 'Junior Performance Marketing', tag: 'Growth' },
    { label: 'Marketing Analyst / Entry Roles', tag: 'Analytics' },
  ];
  return (
    <section className="career" id="career">
      <div className="container">
        <div className="eyebrow">Career Direction</div>
        <div className="career__grid">
          <div>
            <h2 className="career__heading">
              Open to remote-ready digital marketing opportunities.
            </h2>
            <p className="career__body">
              I am interested in roles where I can continue developing across SEO, content
              marketing, performance-focused campaigns, and marketing analytics. I am
              especially motivated by work that combines creative communication with
              measurable business thinking.
            </p>
            <div className="career__callout">
              I am building this portfolio as a living proof of work — documenting not only
              final outputs, but also the strategy, setup, and thinking behind them.
            </div>
          </div>

          <div className="career__roles">
            <p className="career__roles-title">Target Opportunities</p>
            {roles.map(r => (
              <div className="career__role" key={r.label}>
                <span className="career__role-label">{r.label}</span>
                <span className="career__role-tag">{r.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
window.Career = Career;
