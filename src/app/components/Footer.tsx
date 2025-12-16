import { Facebook, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white flex items-center justify-center">
                <span className="text-[#D4AF37] text-xl">K</span>
              </div>
              <span className="text-xl">KEY INVEST</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Building wealth through strategic investment solutions since 1998.
            </p>
            <div className="flex gap-3">
              <button className="w-10 h-10 border border-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37] transition-colors group">
                <Facebook size={18} className="text-[#D4AF37] group-hover:text-black" />
              </button>
              <button className="w-10 h-10 border border-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37] transition-colors group">
                <Twitter size={18} className="text-[#D4AF37] group-hover:text-black" />
              </button>
              <button className="w-10 h-10 border border-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37] transition-colors group">
                <Linkedin size={18} className="text-[#D4AF37] group-hover:text-black" />
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#D4AF37] mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Portfolio Management</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Real Estate Investment</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Retirement Planning</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Wealth Management</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[#D4AF37] mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-gray-400 hover:text-[#D4AF37] transition-colors">About Us</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Our Team</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">News & Insights</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[#D4AF37] mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Disclosures</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© 2024 Key Invest. All rights reserved.</p>
            <p>Securities offered through registered broker-dealers. Member FINRA/SIPC.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
