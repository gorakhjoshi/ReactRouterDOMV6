import { useState } from 'react';
import { css } from '@emotion/css';

import { BrowserRouter as Router, Navigate, useRoutes } from 'react-router-dom';
import Admin from './Admin/Admin';
import Products from './Products/Products';
import Nav from './Common/Nav';

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

const MyRoutes = () => {
  const [authenticated] = useState(true);
  const routes = useRoutes([
    { path: '/*', element: <Products /> },
    {
      path: '/admin/*',
      element: authenticated ? <Admin /> : <Navigate to='/' />,
    },
    { path: '*', element: <Navigate to='/' /> },
  ]);
  return routes;
};

function App() {
  return (
    <div className={AppStyle}>
      <Router>
        <div className='Container'>
          <Nav />
          <MyRoutes />
        </div>
      </Router>
    </div>
  );
}

export default App;
