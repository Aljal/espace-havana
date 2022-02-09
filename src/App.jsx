import { useEffect, useState } from 'react';
import { SecondIdea } from '../pages';
import classNames from 'classnames';

import './App.scss'

function App() {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    setStartAnimation(true);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <span className={classNames({ animate: startAnimation })}>Espace Havana</span>
      </header>
      <main>
        <SecondIdea />
      </main>
    </div>
  )
}

export default App
