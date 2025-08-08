import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Header = () => {
  const location = useLocation();

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-serif text-foreground hover:text-primary transition-colors">
            Apartment 11:11
          </Link>
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/" className={cn(navigationMenuTriggerStyle())}>
                  Home
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <button 
                  onClick={() => scrollToSection('testimonials')}
                  className={cn(navigationMenuTriggerStyle())}
                >
                  Testimonials
                </button>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <button 
                  onClick={() => scrollToSection('about')}
                  className={cn(navigationMenuTriggerStyle())}
                >
                  About
                </button>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/blogs" className={cn(navigationMenuTriggerStyle())}>
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