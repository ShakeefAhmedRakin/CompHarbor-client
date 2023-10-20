const Testimonial = () => {
  return (
    <>
      <div className="px-2">
        <div className="container mx-auto my-8 bg-primaryLight dark:bg-primaryDark border-black border-[1px] pt-12 pb-8">
          <div className="space-y-4 mb-4">
            <h1 className="text-4xl md:text-6xl text-white font-bold text-center">
              200K+ Customers
            </h1>
            <p className="text-white text-center text-lg">and counting...</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2 lg:px-12">
            <div className="bg-white dark:bg-gray-900 p-5 border-[1px] border-black text-black dark:text-white">
              <svg
                className="h-12 mx-auto mb-2 text-gray-400 dark:text-gray-600"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              <p className="text-center text-lg">
                {`"I recently upgraded my gaming setup with a high-end graphics
                card from your website. The performance boost is incredible! My
                games run smoother, and the visuals are stunning. Thanks for the
                quality product and speedy delivery."`}
              </p>
              <hr className="my-2" />
              <div className="flex justify-center items-center gap-x-2">
                <div className="avatar">
                  <div className="w-8 mask mask-squircle">
                    <img src="https://i.ibb.co/7jPqFQ1/sample-profile.png" />
                  </div>
                </div>
                <h1 className="text-xl font-semibold text-center">Sarah H.</h1>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-900 p-5 border-[1px] border-black text-black dark:text-white">
              <svg
                className="h-12 mx-auto mb-2 text-gray-400 dark:text-gray-600"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              <p className="text-center text-lg">
                {`"I had a few questions about a gaming laptop I was interested in, and your customer support team went above and beyond to provide detailed information and guidance. The laptop exceeded my expectations, and I'm a happy customer. You've earned my trust!"`}
              </p>
              <hr className="my-2" />
              <div className="flex justify-center items-center gap-x-2">
                <div className="avatar">
                  <div className="w-8 mask mask-squircle">
                    <img src="https://i.ibb.co/7jPqFQ1/sample-profile.png" />
                  </div>
                </div>
                <h1 className="text-xl font-semibold text-center">Jason M.</h1>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-900 p-5 border-[1px] border-black text-black dark:text-white">
              <svg
                className="h-12 mx-auto mb-2 text-gray-400 dark:text-gray-600"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              <p className="text-center text-lg">
                {`"I can't express how impressed I am with your service. My gaming mouse arrived two days after I placed the order. It's a fantastic product, and the smooth shopping experience on your user-friendly website was a bonus. I'll be back for more gear soon!"`}
              </p>
              <hr className="my-2" />
              <div className="flex justify-center items-center gap-x-2">
                <div className="avatar">
                  <div className="w-8 mask mask-squircle">
                    <img src="https://i.ibb.co/7jPqFQ1/sample-profile.png" />
                  </div>
                </div>
                <h1 className="text-xl font-semibold text-center">Lisa W.</h1>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-900 p-5 border-[1px] border-black text-black dark:text-white">
              <svg
                className="h-12 mx-auto mb-2 text-gray-400 dark:text-gray-600"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              <p className="text-center text-lg">
                {`"As a budget-conscious gamer, I was pleasantly surprised by your competitive pricing. I found an excellent deal on a gaming headset, and it performs as well as pricier options I've tried. I appreciate the affordability without sacrificing quality. Keep up the good work!"`}
              </p>
              <hr className="my-2" />
              <div className="flex justify-center items-center gap-x-2">
                <div className="avatar">
                  <div className="w-8 mask mask-squircle">
                    <img src="https://i.ibb.co/7jPqFQ1/sample-profile.png" />
                  </div>
                </div>
                <h1 className="text-xl font-semibold text-center">Mark R.</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
