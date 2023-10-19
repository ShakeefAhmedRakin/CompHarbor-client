import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { Toaster, toast } from "sonner";

const Register = () => {
  const { createUser, addUsernamePhoto, signInUser, logOut } =
    useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();

    const form = e.target;

    const username = form.username.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      toast.error("Password should be at least 6 characters or longer");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Password must have an upper case letter");
      return;
    } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
      toast.error("Password must have a special character");
      return;
    }

    createUser(email, password)
      .then((result) => {
        addUsernamePhoto(username, photoURL)
          .then(() => {
            console.log("User has been registered successfully");
            console.log("-------------------------------------");
            console.log(result.user);
            logOut().then(() => {
              console.log("User has been logged out successfully");
              console.log("-------------------------------------");
              signInUser(email, password)
                .then((result) => {
                  console.log("User has been logged in successfully");
                  console.log("-------------------------------------");
                  console.log(result.user);
                  toast.success("Successfully registered");
                })
                .catch((error) => {
                  console.log("Error from logging in user" + error);
                });
            });
          })
          .catch((error) => {
            console.log("Error from setting username and picture: " + error);
          });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <>
      <Toaster position="bottom-right" richColors />
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-lg mx-auto">
          <div className="border-[1px] border-black p-8 bg-white dark:bg-gray-800">
            <form
              onSubmit={handleSignUp}
              className="text-black dark:text-white"
            >
              <h1 className="text-center font-bold text-4xl">Sign Up</h1>
              <hr className="my-5" />
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-black dark:text-white">
                  Your Username
                </label>
                <input
                  type="text"
                  name="username"
                  className="bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-900 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:text-white"
                  placeholder="Your Username"
                  required
                ></input>
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-black dark:text-white">
                  Your Profile Photo
                </label>
                <input
                  type="text"
                  name="photoURL"
                  className="bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-900 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:text-white "
                  placeholder="Your Profile Photo"
                  required
                ></input>
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-black dark:text-white">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  className="bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-900 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:text-white "
                  placeholder="Your email"
                  required
                ></input>
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-black dark:text-white">
                  Your password
                </label>
                <input
                  type="password"
                  name="password"
                  className="bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-900 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:text-white"
                  required
                  placeholder="Your password"
                ></input>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="btn bg-primaryLight hover:bg-primaryLight font-medium text-white"
                >
                  Sign Up
                </button>
              </div>
            </form>
            <hr className="my-5" />
            <p className="text-center mt-5 text-black dark:text-white">
              {`Already have an account? `}
              <Link className="link" to="/login">
                Login Here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
