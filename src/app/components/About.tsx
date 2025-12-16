import { Award, Shield, TrendingUp } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="h-1 w-20 bg-[#D4AF37] mb-6" />
            <h2 className="text-4xl md:text-5xl text-black mb-6">
              Your Trusted Investment Partner Since 1998
            </h2>
            <p className="text-gray-600 mb-6">
              At Key Invest, we believe that successful investing is built on a foundation of trust, expertise, 
              and personalized service. For over two decades, we've helped individuals and institutions navigate 
              complex financial markets to achieve their investment objectives.
            </p>
            <p className="text-gray-600 mb-8">
              Our team of seasoned professionals combines deep market knowledge with cutting-edge analytical 
              tools to deliver investment strategies tailored to your unique goals and risk tolerance.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl text-[#D4AF37] mb-2">25+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl text-[#D4AF37] mb-2">$5B+</div>
                <div className="text-sm text-gray-600">Assets Managed</div>
              </div>
              <div>
                <div className="text-3xl text-[#D4AF37] mb-2">2,500+</div>
                <div className="text-sm text-gray-600">Satisfied Clients</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1761587941453-bd1790225d52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnZlc3RtZW50JTIwZ3Jvd3RoJTIwY2hhcnR8ZW58MXx8fHwxNzY1ODQ1OTIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Investment Growth"
              className="w-full h-[500px] object-cover"
            />
            
            {/* Overlay Cards */}
            <div className="absolute -bottom-8 -left-8 bg-black text-white p-6 max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-[#D4AF37] flex items-center justify-center">
                  <Award size={20} />
                </div>
                <span>Award-Winning Service</span>
              </div>
              <p className="text-sm text-gray-300">
                Recognized for excellence in investment management
              </p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-black flex items-center justify-center mx-auto mb-4">
              <Shield className="text-[#D4AF37]" size={32} />
            </div>
            <h3 className="text-xl text-black mb-3">Secure & Transparent</h3>
            <p className="text-gray-600">
              Your investments are protected with bank-level security and full transparency in all transactions.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-black flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="text-[#D4AF37]" size={32} />
            </div>
            <h3 className="text-xl text-black mb-3">Proven Track Record</h3>
            <p className="text-gray-600">
              Consistent performance with above-market returns across diverse market conditions.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-black flex items-center justify-center mx-auto mb-4">
              <Award className="text-[#D4AF37]" size={32} />
            </div>
            <h3 className="text-xl text-black mb-3">Expert Team</h3>
            <p className="text-gray-600">
              Certified financial advisors with extensive experience in global markets and asset management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
