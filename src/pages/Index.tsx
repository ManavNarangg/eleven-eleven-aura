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
      <Hero />
      <Testimonials />
      <About />
      <Brands />
      <Media />
      <WhyUs />
      <Footer />
    </div>
  );
};

export default Index;
