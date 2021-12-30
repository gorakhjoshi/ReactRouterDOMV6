import React from 'react';
import { css } from '@emotion/css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admin from './Admin/Admin';
import Products from './Products/Products';

const AppStyle = css`
  margin: 50px auto;
  width: 400px;
  .Container {
    background: #1d1e26;
    border: 4px solid #9580ff;
    border-radius: 10px;
    padding: 25px;
  }
`;

function App() {
  return (
    <div className={AppStyle}>
      <Router>
        <div className='Container'>
          <Routes>
            <Route path='/' element={<Products />} />
            <Route path='/admin' element={<Admin />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
