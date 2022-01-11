import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

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
      <div>
        {products?.map((product) => {
          return <ProductCard key={product.id} product={product}></ProductCard>;
        })}
      </div>
    </div>
  );
}

export default ProductIndex;
