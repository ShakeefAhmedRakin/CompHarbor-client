import { MdOutlineQuestionAnswer } from "react-icons/md";

const Faq = () => {
  return (
    <>
      <div className="px-2">
        <div className="container mx-auto my-8 border-[1px] border-black">
          <div className="bg-primaryLight dark:bg-primaryDark py-5 text-white">
            <h1 className="text-center font-bold text-2xl md:text-4xl">
              Frequently Asked Questions
            </h1>
          </div>
          <div className="flex justify-center py-10 px-5 lg:px-10 bg-white dark:bg-gray-900">
            <div className="flex flex-col-reverse lg:flex-row gap-12">
              <div className="flex flex-col w-full gap-4 text-black dark:text-white flex-1">
                <div className="flex flex-col gap-y-4">
                  <hr />
                  <h1 className="text-2xl font-bold text-left flex items-center gap-x-3">
                    <MdOutlineQuestionAnswer></MdOutlineQuestionAnswer>What
                    payment methods do you accept?
                  </h1>
                  <p className="text-lg text-left max-w-4xl">
                    We accept a wide range of payment methods, including major
                    credit cards (Visa, MasterCard, American Express), PayPal,
                    and more. You can choose your preferred payment option
                    during the checkout process.
                  </p>
                  <hr />
                </div>
                <div className="flex flex-col gap-y-4">
                  <hr />
                  <h1 className="text-2xl font-bold text-left flex items-center gap-x-3">
                    <MdOutlineQuestionAnswer></MdOutlineQuestionAnswer>What is
                    your return policy?
                  </h1>
                  <p className="text-lg text-left max-w-4xl">
                    {`We offer a hassle-free return policy. If you're not
                    satisfied with your purchase, you can return it within 30
                    days for a full refund or exchange. Please check our
                    "Returns & Refunds" page for detailed information on our
                    return process.`}
                  </p>
                  <hr />
                </div>
                <div className="flex flex-col gap-y-4">
                  <hr />
                  <h1 className="text-2xl font-bold text-left flex items-center gap-x-3">
                    <MdOutlineQuestionAnswer></MdOutlineQuestionAnswer>How can I
                    track my order?
                  </h1>
                  <p className="text-lg text-left max-w-4xl">
                    {`Tracking your order is easy. Once your order is processed and shipped, you will receive a confirmation email with a tracking number. You can use this number to track your shipment on our website or through the carrier's website.`}
                  </p>
                  <hr />
                </div>
                <div className="flex flex-col gap-y-4">
                  <hr />
                  <h1 className="text-2xl font-bold text-left flex items-center gap-x-3">
                    <MdOutlineQuestionAnswer></MdOutlineQuestionAnswer>How can I
                    contact your customer support team?
                  </h1>
                  <p className="text-lg text-left max-w-4xl">
                    {`Our customer support team is here to assist you. You can contact us via phone at 00-11-22-33 during our operating hours, or you can use the contact form on our website to send us an email. We typically respond within 24 hours.`}
                  </p>
                  <hr />
                </div>
              </div>
              <div className="border-[1px] border-black flex-1">
                <img
                  src="https://i.ibb.co/8bqYCHr/pexels-luis-quintero-2148216.jpg"
                  className="object-cover object-center aspect-video lg:aspect-square h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
