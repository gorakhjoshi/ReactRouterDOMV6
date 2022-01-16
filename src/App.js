import React from 'react';
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
import ProductIndex from './Products/ProductIndex';
import Product from './Products/Product';
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
  return (
    <div className={AppStyle}>
      <Router>
        <div className='Container'>
          <Nav />
          <Routes>
            <Route path='/' element={<Products />}>
              <Route path='/' element={<ProductIndex />} />
              <Route path=':id' element={<Product />} />
            </Route>
            <Route
              path='admin'
              element={
                <ProtectedRoute authenticated={false}>
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
