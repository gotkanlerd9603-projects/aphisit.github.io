/* global React, ReactDOM, Nav, Hero, About, Skills, Projects, Analytics, Experience, Career, Contact */
const App = () => (
  <React.Fragment>
    <Nav />
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Analytics />
      <Experience />
      <Career />
      <Contact />
    </main>
  </React.Fragment>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
