import React from 'react';
import { css } from '@emotion/css';
import { Outlet } from 'react-router-dom';

const ProductsStyle = css`
  display: flex;
  flex-direction: column;
  .logo {
    width: 128px;
    margin: 0 auto 25px;
  }
`;

function Products() {
  return (
    <div className={ProductsStyle}>
      <img src='/assets/img/logo.svg' alt='Burger' className='logo' />
      Products
      <Outlet />
    </div>
  );
}

export default Products;
