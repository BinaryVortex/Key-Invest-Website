import { Building2, LineChart, PiggyBank, Users } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: LineChart,
      title: "Portfolio Management",
      description: "Customized portfolio strategies designed to optimize returns while managing risk according to your investment objectives.",
      features: ["Asset Allocation", "Rebalancing", "Performance Monitoring", "Tax Optimization"]
    },
    {
      icon: Building2,
      title: "Real Estate Investment",
      description: "Access premium real estate opportunities with our curated selection of commercial and residential properties.",
      features: ["Property Analysis", "Market Research", "ROI Projection", "Portfolio Diversification"]
    },
    {
      icon: PiggyBank,
      title: "Retirement Planning",
      description: "Comprehensive retirement strategies that ensure financial security and peace of mind for your golden years.",
      features: ["401(k) Management", "IRA Optimization", "Income Planning", "Estate Planning"]
    },
    {
      icon: Users,
      title: "Wealth Management",
      description: "Holistic wealth management solutions for high-net-worth individuals and families seeking to preserve and grow their legacy.",
      features: ["Investment Strategy", "Trust Services", "Philanthropic Planning", "Family Office Services"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="h-1 w-20 bg-[#D4AF37] mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl text-black mb-4">Our Investment Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive investment solutions tailored to help you build, protect, and grow your wealth
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-white p-8 hover:shadow-xl transition-shadow group">
                <div className="w-16 h-16 bg-black flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] transition-colors">
                  <Icon className="text-[#D4AF37] group-hover:text-black transition-colors" size={32} />
                </div>
                <h3 className="text-2xl text-black mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
