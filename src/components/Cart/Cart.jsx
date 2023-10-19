import { useContext, useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Toaster, toast } from "sonner";
import CartCard from "../CartCard/CartCard";
import { BsFillCartXFill } from "react-icons/bs";

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
  console.log(products);
  return (
    <>
      <Toaster position="bottom-right" richColors />
      <div className="container mx-auto px-4 py-20 ">
        <div className="border-[1px] bg-white dark:bg-gray-900 border-black dark:border-white">
          <h1 className="text-center my-10 font-bold text-4xl text-gray-900 dark:text-white">
            Your Cart
          </h1>
          <hr className="my-5" />
          <div className="container px-2 mx-auto my-8">
            <div className="flex justify-center">
              {products.length > 0 ? (
                <div className="w-full lg:w-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {products.map((product) => (
                    <CartCard
                      key={product._id}
                      product={product}
                      handleDelete={handleDelete}
                    ></CartCard>
                  ))}
                </div>
              ) : (
                <div className="py-36 flex flex-col items-center">
                  <h1 className="text-center font-bold text-3xl text-gray-900 dark:text-white">
                    No items added yet!
                  </h1>
                  <BsFillCartXFill className="text-6xl mt-4 text-gray-900 dark:text-white"></BsFillCartXFill>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
