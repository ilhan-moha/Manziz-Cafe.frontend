import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import FeaturedMenu from "../components/home/FeaturedMenu";
import Testimonials from "../components/home/Testimonials";

function Home() {
  return (
    <>
        <Navbar />
        <Hero />
        <FeaturedMenu />
        <Testimonials />
    </>
  );
}

export default Home;
    
