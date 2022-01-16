export const listProducts = async () => {
  const response = await fetch(`/api/products`);
  if (response.ok) {
    return await response.json();
  }

  throw new Error('Can not fetch data');
};

export const retrieveProduct = async (id) => {
  const response = await fetch(`/api/products/${id}`);
  if (response.ok) {
    return await response.json();
  }

  throw new Error('Can not fetch data');
};
