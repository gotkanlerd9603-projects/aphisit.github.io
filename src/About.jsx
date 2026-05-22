/* global React */
const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="eyebrow">About Me</div>
        <div className="about__grid">
          <div>
            <h2 className="about__heading">
              Marketing graduate with an entrepreneurial mindset and a growing focus on data-driven digital strategy.
            </h2>
            <div className="about__body">
              <p>
                I am a marketing graduate with hands-on experience in small business operations,
                content creation, event coordination, and customer-facing brand communication.
                These experiences helped me understand how marketing connects with real customer
                behavior, brand perception, and day-to-day business goals.
              </p>
              <p>
                I am currently building a focused digital marketing portfolio around SEO,
                content systems, Google Search Console, GA4 tracking, campaign planning, and
                performance-informed communication. Rather than presenting unverified outcomes,
                this portfolio documents the process, thinking, and foundation behind measurable
                marketing work.
              </p>
              <p>
                My long-term direction is to work in remote-ready digital marketing roles where
                I can contribute through research, structured execution, clear communication,
                and continuous improvement.
              </p>
            </div>
          </div>

          <div className="about__hl">
            {[
              {
                no: '01',
                title: 'Data-Informed Thinking',
                body: 'I use search behavior, audience intent, and performance signals to guide marketing decisions.',
              },
              {
                no: '02',
                title: 'Content with Purpose',
                body: 'I focus on content that communicates clearly, supports discoverability, and aligns with audience needs.',
              },
              {
                no: '03',
                title: 'Execution-Oriented',
                body: 'I enjoy turning ideas into structured outputs such as websites, content plans, campaign concepts, and reporting frameworks.',
              },
            ].map(h => (
              <div className="about__hl-row" key={h.no}>
                <div className="about__hl-num">{h.no}</div>
                <div>
                  <h3 className="about__hl-title">{h.title}</h3>
                  <p className="about__hl-body">{h.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
window.About = About;
