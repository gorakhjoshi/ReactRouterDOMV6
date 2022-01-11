import { useState, useEffect } from 'react';

import { listProducts } from './ProductsServices';

function ProductIndex() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    (async () => {
      const product = await listProducts();
      setProducts(product);
    })();
  }, []);

  return (
    <div>
      {products?.map((product) => {
        return <div key={product.id}>{product.name}</div>;
      })}
    </div>
  );
}

export default ProductIndex;
