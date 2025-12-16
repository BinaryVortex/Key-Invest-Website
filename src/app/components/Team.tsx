import { Linkedin, Mail } from "lucide-react";

export function Team() {
  const team = [
    {
      name: "Michael Chen",
      role: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW18ZW58MXx8fHwxNzY1NzkyMDIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "25+ years of experience in investment banking and asset management"
    },
    {
      name: "Sarah Williams",
      role: "Chief Investment Officer",
      image: "https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW18ZW58MXx8fHwxNzY1NzkyMDIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Former portfolio manager at leading global investment firms"
    },
    {
      name: "David Thompson",
      role: "Head of Wealth Management",
      image: "https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW18ZW58MXx8fHwxNzY1NzkyMDIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Certified Financial Planner with expertise in high-net-worth clients"
    },
    {
      name: "Jennifer Martinez",
      role: "Director of Research",
      image: "https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW18ZW58MXx8fHwxNzY1NzkyMDIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Ph.D. in Economics with focus on quantitative investment strategies"
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="h-1 w-20 bg-[#D4AF37] mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl text-black mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry leaders committed to delivering exceptional investment results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden mb-4">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
                  <button className="w-10 h-10 bg-[#D4AF37] flex items-center justify-center hover:bg-[#B8941F] transition-colors">
                    <Linkedin size={20} className="text-black" />
                  </button>
                  <button className="w-10 h-10 bg-[#D4AF37] flex items-center justify-center hover:bg-[#B8941F] transition-colors">
                    <Mail size={20} className="text-black" />
                  </button>
                </div>
              </div>
              <h3 className="text-xl text-black mb-1">{member.name}</h3>
              <div className="text-[#D4AF37] mb-3">{member.role}</div>
              <p className="text-gray-600 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
