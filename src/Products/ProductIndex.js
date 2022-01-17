import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

import { listProducts } from './ProductsServices';
import { useLocation } from 'react-router-dom';

function ProductIndex() {
  const { state } = useLocation();
  const [products, setProducts] = useState(null);

  useEffect(() => {
    (async () => {
      const product = await listProducts();
      setProducts(product);
    })();

    if (state) {
      console.warn(`Your reques not found for ${state.id}`);
    }
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
