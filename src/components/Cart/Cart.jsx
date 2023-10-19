import { useContext, useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Toaster, toast } from "sonner";
import CartCard from "../CartCard/CartCard";

const Cart = () => {
  const { user } = useContext(AuthContext);
  const userID = user?.uid;

  const [products, setProducts] = useState([]);

  console.log(products);

  useEffect(() => {
    fetch(`http://localhost:5000/carts/${userID}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [userID]);

  const handleDelete = (idToBeDeleted) => {
    console.log(idToBeDeleted);
    fetch(`http://localhost:5000/carts/${idToBeDeleted}`, {
      method: "DELETE",
    })
      .then((result) => result.json())
      .then((data) => {
        console.log(data.deletedCount);
        if (data.deletedCount > 0) {
          toast.success("Item removed from cart");
          // Update the UI by removing the deleted item from the local state
          setProducts((prevProducts) =>
            prevProducts.filter((product) => product.cart_id !== idToBeDeleted)
          );
        }
      });
  };

  return (
    <>
      <Toaster position="bottom-right" richColors />
      <h1>PRODUCTS</h1>
      <div className="container px-2 mx-auto my-8 p-8">
        <div className="flex justify-center">
          <div className="w-full lg:w-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((product) => (
              <CartCard
                key={product._id}
                product={product}
                handleDelete={handleDelete}
              ></CartCard>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
