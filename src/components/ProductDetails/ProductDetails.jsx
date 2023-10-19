import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const details = useLoaderData();

  console.log(details);
  return (
    <>
      <h1>DETAILS</h1>
    </>
  );
};

export default ProductDetails;
