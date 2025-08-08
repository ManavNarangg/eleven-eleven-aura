import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-smooth border-b",
      isScrolled 
        ? "bg-background/95 backdrop-blur-lg border-border/30 shadow-elegant" 
        : "bg-background/60 backdrop-blur-md border-border/10"
    )}>
      <div className="container-max section-padding">
        <div className="flex items-center justify-between h-20">
          <Link 
            to="/" 
            className="group relative"
          >
            <span className="text-2xl lg:text-3xl font-serif font-bold text-foreground group-hover:text-primary transition-smooth story-link">
              Apartment 11:11
            </span>
          </Link>
          
          <NavigationMenu>
            <NavigationMenuList className="space-x-2">
              <NavigationMenuItem>
                <Link 
                  to="/" 
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "relative font-medium hover-scale transition-smooth",
                    "hover:bg-accent/80 hover:text-primary",
                    location.pathname === '/' && "bg-accent/50 text-primary"
                  )}
                >
                  Home
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <button 
                  onClick={() => scrollToSection('testimonials')}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "relative font-medium hover-scale transition-smooth hover:bg-accent/80 hover:text-primary"
                  )}
                >
                  Testimonials
                </button>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <button 
                  onClick={() => scrollToSection('about')}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "relative font-medium hover-scale transition-smooth hover:bg-accent/80 hover:text-primary"
                  )}
                >
                  About
                </button>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link 
                  to="/blogs" 
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "relative font-medium hover-scale transition-smooth",
                    "hover:bg-accent/80 hover:text-primary",
                    location.pathname === '/blogs' && "bg-accent/50 text-primary"
                  )}
                >
                  Blogs
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;