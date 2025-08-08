const features = [
  {
    title: "Intentional Curation",
    description: "Every element is thoughtfully selected to inspire creativity and foster meaningful connections."
  },
  {
    title: "Community-Driven",
    description: "We believe in the power of collective creativity and building authentic relationships."
  },
  {
    title: "Timeless Aesthetic",
    description: "Our design philosophy transcends trends, focusing on enduring beauty and functionality."
  },
  {
    title: "Holistic Experience",
    description: "From the moment you enter, every detail contributes to a cohesive, transformative journey."
  }
];

const WhyUs = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-brand-warm/20 to-accent/30">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
            Why Apartment 11:11?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            In a world of endless distractions, we've created a sanctuary that honors 
            the sacred act of creation. Here's what makes our approach different.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                    {index + 1}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-serif font-bold">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-elegant">
            <blockquote className="text-2xl font-serif italic leading-relaxed mb-8">
              "At 11:11, we make a wish. At Apartment 11:11, we make it reality."
            </blockquote>
            <div className="space-y-6">
              <div className="flex justify-between items-center py-3 border-b border-border/50">
                <span className="text-muted-foreground">Established</span>
                <span className="font-semibold">2023</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border/50">
                <span className="text-muted-foreground">Philosophy</span>
                <span className="font-semibold">Intentional Living</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-muted-foreground">Mission</span>
                <span className="font-semibold">Creative Sanctuary</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;