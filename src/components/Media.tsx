import { Card } from "@/components/ui/card";
import media1 from "@/assets/media-1.jpg";
import media2 from "@/assets/media-2.jpg";

const mediaItems = [
  {
    image: media1,
    title: "Featured in Design Magazine",
    description: "Our approach to creative space curation",
    date: "March 2024"
  },
  {
    image: media2,
    title: "Community Spotlight",
    description: "Building connections through design",
    date: "February 2024"
  },
  {
    title: "Podcast Interview",
    description: "The Philosophy Behind Apartment 11:11",
    date: "January 2024",
    type: "audio"
  },
  {
    title: "Instagram Feature",
    description: "Behind the scenes of our creative process",
    date: "December 2023",
    type: "social"
  }
];

const Media = () => {
  return (
    <section className="py-24">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4">In the Media</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover how Apartment 11:11 is reshaping conversations about 
            creative spaces and intentional living.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mediaItems.map((item, index) => (
            <Card key={index} className="border-0 shadow-soft hover:shadow-elegant transition-smooth hover-lift cursor-pointer group">
              <div className="overflow-hidden rounded-t-lg">
                {item.image ? (
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-48 bg-gradient-to-br from-brand-warm to-accent flex items-center justify-center">
                    <span className="text-2xl font-serif font-bold text-brand-dark">
                      {item.type === 'audio' ? '🎙️' : '📱'}
                    </span>
                  </div>
                )}
              </div>
              <div className="p-6 space-y-3">
                <div className="text-sm text-muted-foreground">{item.date}</div>
                <h3 className="font-serif text-lg font-bold">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Media;