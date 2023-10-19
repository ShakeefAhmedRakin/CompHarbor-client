import { useLoaderData } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";

const Products = () => {
  const products = useLoaderData();

  console.log(products);

  return (
    <>
      <h1>PRODUCTS</h1>
      <div className="container px-2 mx-auto my-8 p-8">
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((product) => (
              <ProductCard key={product._id} product={product}></ProductCard>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
