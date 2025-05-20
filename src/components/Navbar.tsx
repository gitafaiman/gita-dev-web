import { cn } from "@/lib/utils";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll event to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 lg:px-24",
        isScrolled ? "bg-white/90 backdrop-blur-md py-4 shadow-md" : "bg-transparent py-6"
      )}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold font-poppins">
          <span className="gradient-text">Gita.dev</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className={cn(
              "font-medium transition-colors",
              isActive("/") ? "text-pink" : "text-foreground hover:text-pink"
            )}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={cn(
              "font-medium transition-colors",
              isActive("/about") ? "text-pink" : "text-foreground hover:text-pink"
            )}
          >
            About
          </Link>
          <Link
            to="/portfolio"
            className={cn(
              "font-medium transition-colors",
              isActive("/portfolio") ? "text-pink" : "text-foreground hover:text-pink"
            )}
          >
            Portfolio
          </Link>
          <Link to="/contact" className="relative group flex items-center px-4 py-2 overflow-hidden bg-pink rounded-lg">
            <span className="absolute inset-0 bg-gradient-to-br from-pink to-purple transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 z-0" />
            <span className="relative z-10 flex items-center text-white">
              Let's Talk <ArrowRight size={18} className="ml-2" />
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-lg py-4 px-6 flex flex-col space-y-4 animate-fade-in">
          <Link
            to="/"
            className={cn(
              "py-2 font-medium transition-colors",
              isActive("/") ? "text-pink" : "text-foreground hover:text-pink"
            )}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={cn(
              "py-2 font-medium transition-colors",
              isActive("/about") ? "text-pink" : "text-foreground hover:text-pink"
            )}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/portfolio"
            className={cn(
              "py-2 font-medium transition-colors",
              isActive("/portfolio") ? "text-pink" : "text-foreground hover:text-pink"
            )}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Portfolio
          </Link>
          <Link to="/contact" className="relative group flex items-center px-4 py-2 overflow-hidden bg-pink rounded-lg">
            <span className="absolute inset-0 bg-gradient-to-br from-pink to-purple transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 z-0" />
            <span className="relative z-10 flex items-center text-white">
              Let's Talk <ArrowRight size={18} className="ml-2" />
            </span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
