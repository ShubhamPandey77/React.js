import { useQuery } from '@tanstack/react-query'
import React from 'react'

async function Carting() {
  const res = await fetch("https://dummyjson.com/carts");
  const data = await res.json();
  return data.carts;  // ✅ Important
}

function Cart() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["cart"],
    queryFn: Carting,
  });

  if (isLoading) return <p>Loading... Please wait</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Cart System</h1>
      {data.map((cart) => (
        <div key={cart.id}>
          <h2>Cart ID: {cart.id}</h2>
          <ul>
            {cart.products.map((product) => (
              <li key={product.id}>
                {product.title} - ${product.price} x {product.quantity} ={" "}
                {product.total}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Cart;