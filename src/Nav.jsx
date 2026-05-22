/* global React, Icon */
/* eslint-disable no-unused-vars */
const Nav = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState('about');

  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const sections = ['about','skills','projects','analytics','experience','contact'];
      const y = window.scrollY + 140;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y && el.offsetTop + el.offsetHeight > y) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'analytics', label: 'Analytics' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a className="nav__brand" href="#top">
          APHISIT HATHAWAY
        </a>
        <div className="nav__links">
          {links.map(l => (
            <a key={l.id} href={`#${l.id}`}
               className={`nav__link ${active === l.id ? 'is-active' : ''}`}>
              {l.label}
            </a>
          ))}
        </div>
        <div className="nav__right">
          <a className="btn btn--pill-ghost nav__cv" href="#contact">
            Download My CV
            <span className="btn__icon"><Icon name="arrow-up-right" size={14} /></span>
          </a>
          <button className="nav__menu" onClick={() => setOpen(o => !o)} aria-label="Menu">
            <Icon name={open ? 'x' : 'menu'} size={20} />
          </button>
        </div>
      </div>
      {open && (
        <div className="nav__sheet">
          {links.map(l => (
            <a key={l.id} href={`#${l.id}`} className="nav__sheet-link"
               onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href="#contact" className="nav__sheet-link" onClick={() => setOpen(false)}>Contact Me →</a>
        </div>
      )}
    </nav>
  );
};
window.Nav = Nav;
