import React from 'react';
import './App.css';
import { CommentModule } from './Presentational/CommentModule';
import { GetWellModule } from './Presentational/GetWellModule';
import CommentSection from './Containers/CommentSection';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CommentModule />
        <GetWellModule />
        <CommentSection />
      </header>
    </div>
  );
}

export default App;
