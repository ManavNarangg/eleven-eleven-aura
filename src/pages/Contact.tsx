import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen">
      <Header />
      {/* Header */}
      <section className="py-24 pt-32 bg-gradient-to-br from-brand-light to-brand-warm">
        <div className="container-max section-padding">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-serif font-bold mb-6">
              Let's Connect
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to be part of our creative community? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24">
        <div className="container-max section-padding">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-serif font-bold mb-4">Get in Touch</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Whether you're interested in visiting our space, exploring partnership 
                  opportunities, or simply want to learn more about our philosophy, 
                  we're here to connect.
                </p>
              </div>
              
              <div className="space-y-6">
                <Card className="border-0 shadow-soft">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-bold mb-2">Visit Us</h3>
                    <p className="text-muted-foreground">
                      Experience our space in person. Open Tuesday-Sunday, 10am-6pm.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-soft">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-bold mb-2">Collaborate</h3>
                    <p className="text-muted-foreground">
                      Interested in hosting an event or partnership? Let's explore possibilities.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-soft">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-bold mb-2">Community</h3>
                    <p className="text-muted-foreground">
                      Join our creative community and stay updated on events and initiatives.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <Card className="shadow-elegant border-0">
              <CardHeader>
                <CardTitle className="font-serif text-2xl">Send us a message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <Input
                      placeholder="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-0 bg-secondary/50 focus:bg-white transition-colors"
                    />
                    <Input
                      type="email"
                      placeholder="Your Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-0 bg-secondary/50 focus:bg-white transition-colors"
                    />
                    <Input
                      placeholder="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="border-0 bg-secondary/50 focus:bg-white transition-colors"
                    />
                    <Textarea
                      placeholder="Your Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="border-0 bg-secondary/50 focus:bg-white transition-colors resize-none"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full py-6 text-lg transition-smooth hover:shadow-elegant"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;