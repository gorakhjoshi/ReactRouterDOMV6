import React from 'react';
import { css } from '@emotion/css';
import { Route, Routes } from 'react-router-dom';
import ProductIndex from './ProductIndex';
import Product from './Product';

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
      <Routes>
        <Route path='/' element={<ProductIndex />} />
        <Route path=':id' element={<Product />} />
      </Routes>
    </div>
  );
}

export default Products;
