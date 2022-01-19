import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { css } from '@emotion/css';
import ProductIndex from '../Products/ProductIndex';
import ProductEdit from '../Products/ProductEdit';

function Admin() {
  const AdminStyle = css`
    .Admin-Header {
      display: flex;
      align-items: center;

      .Admin-New {
        text-decoration: none;
        border: 2px solid #fff;
        color: #fff;
        padding: 4px 10px;
        border-radius: 6px;
        font-weight: 600;
        text-transform: uppercase;
        margin-left: auto;
      }
    }
  `;

  return (
    <div className={AdminStyle}>
      <div className='Admin-Header'>
        <h1>Admin</h1>
        <Link to='new' className='Admin-New'>
          New
        </Link>
      </div>

      <Routes>
        <Route path='/' element={<ProductIndex />} />
        <Route path='/new' element={<ProductEdit />} />
      </Routes>
    </div>
  );
}

export default Admin;
