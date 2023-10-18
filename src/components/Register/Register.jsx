import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-lg mx-auto">
          <div className="border-[1px] border-black p-8">
            <form>
              <h1 className="text-center font-bold text-4xl">Sign Up</h1>
              <hr className="my-5" />
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Your Username
                </label>
                <input
                  type="text"
                  name="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 "
                  placeholder="Your Username"
                  required
                ></input>
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Your Profile Photo
                </label>
                <input
                  type="text"
                  name="profile_photo"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 "
                  placeholder="Your Profile Photo"
                  required
                ></input>
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 "
                  placeholder="Your email"
                  required
                ></input>
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Your password
                </label>
                <input
                  type="password"
                  name="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                  required
                  placeholder="Your password"
                ></input>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="btn bg-secondary hover:bg-secondary font-medium"
                >
                  Sign Up
                </button>
              </div>
            </form>
            <hr className="my-5" />
            <p className="text-center mt-5">
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
