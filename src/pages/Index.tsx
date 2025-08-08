import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Brands from "@/components/Brands";
import Media from "@/components/Media";
import WhyUs from "@/components/WhyUs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="about">
        <About />
      </div>
      <Brands />
      <Media />
      <WhyUs />
      <Footer />
    </div>
  );
};

export default Index;
