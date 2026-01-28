import React from 'react';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Pipeline from './components/Pipeline';
import TechMarquee from './components/TechMarquee';
import Footer from './components/Footer';

function App() {
  const [mode, setMode] = React.useState('dashboard');

  return (
    <div className="app-container">
      <Hero mode={mode} setMode={setMode} />
      {mode === 'dashboard' && (
        <>
          <Manifesto />
          <Pipeline />
          <TechMarquee />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
