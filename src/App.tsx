import React from 'react';
import './App.scss';

import Playgraound from './components/playground';

const App: React.FC = () => {
  return (
    <>
      <header>{'this is a new sheet'}</header>
      <aside className={'left-side'}>{''}</aside>
      <main>
        <Playgraound />
      </main>
      <aside className={'right-side'}>{''}</aside>
      <footer></footer>
    </>
  );
}

export default App;
