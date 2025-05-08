import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Parts from './Parts';

const App = () => {
  return (
    <Router>
      <Parts />
    </Router>
  );
};

export default App;