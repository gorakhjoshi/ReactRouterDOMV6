import { useState, useEffect } from 'react';

import { listProducts } from './ProductsServices';

function ProductIndex() {
  const [products, setProducts] = useState(null);

  useEffect(() => {});

  console.log('Outside useeffect');
  return <div>hello</div>;
}

export default ProductIndex;
