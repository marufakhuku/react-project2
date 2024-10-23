import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import Products from "./products";
import Slider from "./Slider";
import Testimonial from "./testimonial";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Slider />
        <Products />
        <Testimonial />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
