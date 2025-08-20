
import { useQuery,useMutation } from "@tanstack/react-query";

// function Product() {
// const[productList,setProductlist] =useState([]);
// useEffect(()=>{
//  ProductItems();
// },[])


//     async function ProductItems (){
//         const url ="https://dummyjson.com/products"
//         let response = await fetch (url)
//         response = await response.json()  
//         setProductlist(response.products)
//     }

//Through the react tanstack Query
async function ProductItems() {
  const url = "https://dummyjson.com/products"
  let response = await fetch(url)
  response = await response.json()
  return response.products         //yeh data ke equal hoqa
}
function Product() {
  const { data, isLoading, isError,error } = useQuery({
    queryKey: ["products"],   // caching key
    queryFn: ProductItems, 
    staleTime:10000   // fetch function
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;
  return (
     <div>
      <h1>Product List</h1>
      {data.map((product) => (
        <div key={product.id}>
          <ul>
            <li>ID: {product.id}</li>
            <li>Title: {product.title}</li>
            <li>Description: {product.description}</li>
            <li>Category: {product.category}</li>
            <li>Price: ${product.price}</li>
            <li>Discount: {product.discountPercentage}%</li>
            <li>Rating: {product.rating}</li>
            <li>Stock: {product.stock}</li>
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Product
