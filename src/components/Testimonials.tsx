import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "Apartment 11:11 transformed how I think about creative spaces. It's more than a place—it's an experience.",
    author: "Sarah Chen",
    role: "Creative Director"
  },
  {
    quote: "The attention to detail and thoughtful curation here is unmatched. Every visit inspires new possibilities.",
    author: "Marcus Williams",
    role: "Entrepreneur"
  },
  {
    quote: "A perfect blend of aesthetics and functionality. This space truly understands the modern creative mindset.",
    author: "Elena Rodriguez",
    role: "Brand Strategist"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4">What Our Community Says</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover why creators and innovators choose Apartment 11:11 as their creative sanctuary.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-soft hover:shadow-elegant transition-smooth hover-lift">
              <CardContent className="p-8">
                <blockquote className="text-lg italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="space-y-1">
                  <p className="font-semibold text-brand-dark">{testimonial.author}</p>
                  <p className="text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;