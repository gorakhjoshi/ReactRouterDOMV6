import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/home' element={<div>Hello React Router DOM</div>} />
      </Routes>
    </Router>
  );
}

export default App;
