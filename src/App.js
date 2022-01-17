import { useState } from 'react';
import { css } from '@emotion/css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Admin from './Admin/Admin';
import Products from './Products/Products';
import Nav from './Common/Nav';
import ProtectedRoute from './Common/ProtectedRoute';

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
  const [authenticated] = useState(true);
  return (
    <div className={AppStyle}>
      <Router>
        <div className='Container'>
          <Nav />
          <Routes>
            <Route path='/*' element={<Products />} />
            <Route
              path='admin'
              element={
                <ProtectedRoute authenticated={authenticated}>
                  <Admin />
                </ProtectedRoute>
              }
            />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
