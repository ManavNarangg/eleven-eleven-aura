import { Card } from "@/components/ui/card";
import brandsImage from "@/assets/brands-grid.jpg";

const brands = [
  { name: "Studio Collective", category: "Design Agency" },
  { name: "Minimalist Co.", category: "Lifestyle Brand" },
  { name: "Creative Hub", category: "Community" },
  { name: "Artisan Works", category: "Craftsmanship" },
  { name: "Modern Living", category: "Home & Design" },
  { name: "Inspiration Space", category: "Experience Design" }
];

const Brands = () => {
  return (
    <section className="py-24 bg-brand-light/30">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4">Our Creative Partners</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We collaborate with like-minded brands and creators who share our vision 
            for intentional design and meaningful experiences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {brands.map((brand, index) => (
            <Card key={index} className="border-0 shadow-soft hover:shadow-elegant transition-smooth hover-lift cursor-pointer">
              <div className="p-8 text-center space-y-3">
                <h3 className="font-serif text-xl font-bold">{brand.name}</h3>
                <p className="text-muted-foreground">{brand.category}</p>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="relative rounded-3xl overflow-hidden shadow-elegant">
          <img 
            src={brandsImage} 
            alt="Partner brands showcase" 
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h3 className="font-serif text-2xl font-bold mb-2">Partnership Opportunities</h3>
              <p className="text-white/90">Join our network of creative collaborators</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;