import { ArrowRight } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1626244105791-562784044969?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmaW5hbmNlJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzY1ODY5NzkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Financial Growth"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <div className="h-1 w-20 bg-[#D4AF37] mb-6" />
          <h1 className="text-5xl md:text-6xl lg:text-7xl text-white mb-6">
            Building Wealth Through Strategic Investment
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Partner with Key Invest for tailored investment solutions that help you achieve your financial goals. 
            Our expert team delivers proven strategies backed by decades of experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={scrollToContact}
              className="bg-[#D4AF37] text-black px-8 py-4 hover:bg-[#B8941F] transition-colors flex items-center justify-center gap-2 group"
            >
              Get Started
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button 
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              className="border-2 border-white text-white px-8 py-4 hover:bg-white hover:text-black transition-colors"
            >
              Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
