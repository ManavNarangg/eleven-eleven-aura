import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-brand-light to-brand-warm">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-serif font-bold leading-tight">
                Welcome to
                <span className="block text-gradient">Apartment 11:11</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                A curated space where creativity, community, and inspiration converge. 
                Discover what happens when intentional design meets purposeful living.
              </p>
            </div>
            <div className="flex gap-4">
              <Button size="lg" className="px-8 py-6 text-lg transition-smooth hover:shadow-elegant">
                Explore Our Space
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg transition-smooth">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative animate-slide-up">
            <div className="relative rounded-3xl overflow-hidden shadow-elegant hover-lift">
              <img 
                src={heroImage} 
                alt="Apartment 11:11 interior space" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;