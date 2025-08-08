const About = () => {
  return (
    <section className="py-24">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold leading-tight">
              About 
              <span className="text-gradient block">Apartment 11:11</span>
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Born from the belief that our environment shapes our creativity, Apartment 11:11 
                is more than a space—it's a philosophy made tangible.
              </p>
              <p>
                We curate experiences that bridge the gap between inspiration and action, 
                creating a sanctuary where ideas flourish and communities thrive.
              </p>
              <p>
                Every detail, from our carefully selected furnishings to our thoughtfully 
                designed events, reflects our commitment to intentional living and creative excellence.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="bg-brand-warm/50 rounded-2xl p-6 hover-lift transition-smooth">
                <h3 className="font-serif text-2xl font-bold mb-2">150+</h3>
                <p className="text-muted-foreground">Creative Sessions</p>
              </div>
              <div className="bg-accent rounded-2xl p-6 hover-lift transition-smooth">
                <h3 className="font-serif text-2xl font-bold mb-2">50+</h3>
                <p className="text-muted-foreground">Community Members</p>
              </div>
            </div>
            <div className="space-y-6 mt-8">
              <div className="bg-secondary rounded-2xl p-6 hover-lift transition-smooth">
                <h3 className="font-serif text-2xl font-bold mb-2">25+</h3>
                <p className="text-muted-foreground">Partner Brands</p>
              </div>
              <div className="bg-brand-light rounded-2xl p-6 hover-lift transition-smooth">
                <h3 className="font-serif text-2xl font-bold mb-2">100%</h3>
                <p className="text-muted-foreground">Curated Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;