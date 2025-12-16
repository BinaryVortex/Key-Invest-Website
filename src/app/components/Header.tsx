import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-black flex items-center justify-center">
              <span className="text-[#D4AF37] text-xl font-bold">K</span>
            </div>
            <span className="text-xl text-black">KEY INVEST</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("about")} className="hover:text-[#D4AF37] transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("services")} className="hover:text-[#D4AF37] transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection("team")} className="hover:text-[#D4AF37] transition-colors">
              Team
            </button>
            <button 
              onClick={() => scrollToSection("contact")} 
              className="bg-[#D4AF37] text-black px-6 py-2 hover:bg-[#B8941F] transition-colors"
            >
              Contact Us
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4">
            <button onClick={() => scrollToSection("about")} className="block w-full text-left py-2 hover:text-[#D4AF37] transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("services")} className="block w-full text-left py-2 hover:text-[#D4AF37] transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection("team")} className="block w-full text-left py-2 hover:text-[#D4AF37] transition-colors">
              Team
            </button>
            <button 
              onClick={() => scrollToSection("contact")} 
              className="bg-[#D4AF37] text-black px-6 py-2 hover:bg-[#B8941F] transition-colors w-full text-left"
            >
              Contact Us
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
