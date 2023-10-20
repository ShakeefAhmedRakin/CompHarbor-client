import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import Faq from "../FAQ/FAQ";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <div>
        <Banner></Banner>
        <Brands></Brands>
        <Testimonial></Testimonial>
        <Faq></Faq>
      </div>
    </>
  );
};

export default Home;
