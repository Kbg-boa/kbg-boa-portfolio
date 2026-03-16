import { Music, Video, Image, Globe, Camera, Megaphone, Palette, Home } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Music,
      title: "Music Production",
      description: "Beat production, mixing, and artist development",
      category: "Music"
    },
    {
      icon: Palette,
      title: "Cover Art & Promo Design",
      description: "Album covers, single artwork, and promotional visuals",
      category: "Design"
    },
    {
      icon: Video,
      title: "Video Editing",
      description: "Music videos, reels, promotional content editing",
      category: "Video"
    },
    {
      icon: Megaphone,
      title: "Social Media Content Creation",
      description: "Reels, posts, stories, and engagement content",
      category: "Digital"
    },
    {
      icon: Camera,
      title: "Photography / Visual Shooting",
      description: "Product photography, portraits, and event coverage",
      category: "Visual"
    },
    {
      icon: Palette,
      title: "Branding for Small Businesses",
      description: "Logo design, brand identity, and visual guidelines",
      category: "Branding"
    },
    {
      icon: Globe,
      title: "Mini Website / Landing Page Creation",
      description: "Professional web presence for your business",
      category: "Web"
    },
    {
      icon: Home,
      title: "Real Estate Content Support",
      description: "Property listings, virtual tours, and promotional content",
      category: "Real Estate"
    },
    {
      icon: Megaphone,
      title: "WhatsApp / Digital Promotion Support",
      description: "Digital marketing campaigns and promotion strategy",
      category: "Marketing"
    }
  ];

  const packs = [
    { name: "Flyer Design", price: "from 100 AED", color: "purple" },
    { name: "Reel Editing", price: "from 150 AED", color: "blue" },
    { name: "Cover Art", price: "from 150 AED", color: "purple" },
    { name: "Artist Promo Pack", price: "from 300 AED", color: "pink" },
    { name: "Property Content Pack", price: "from 400 AED", color: "green" },
    { name: "Mini Business Website", price: "from 700 AED", color: "amber" }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Services
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-3">
            Professional creative services tailored for artists, businesses, and property professionals
          </p>
          <p className="text-purple-400 text-base max-w-2xl mx-auto font-medium">
            Need something specific? I also create custom packages depending on your project.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-6"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10"
            >
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg p-3">
                  <service.icon className="w-6 h-6 text-purple-400" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-purple-400 font-semibold mb-1">{service.category}</div>
                  <h3 className="text-white font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Packs */}
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Starting Prices
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {packs.map((pack, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
              >
                <h4 className="text-white font-semibold text-lg mb-2">{pack.name}</h4>
                <div className={`text-2xl font-bold bg-gradient-to-r from-${pack.color}-400 to-${pack.color}-600 bg-clip-text text-transparent`}>
                  {pack.price}
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-center mt-8 text-sm">
            All packages are customizable. Contact me to discuss your specific needs.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://wa.me/971523711530?text=Hello%20Kabangu%20Mathieu%2C%20I%20saw%20your%20website%20and%20I%20would%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-xl shadow-green-500/20"
          >
            Get a Custom Quote on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}