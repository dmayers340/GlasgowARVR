import React from 'react';
import './App.css';
import { Navigation } from './Components/Navigation';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

function App() {
  return (
    <div className="App">
      <Navigation />
    </div>
  );
}

export default App;
