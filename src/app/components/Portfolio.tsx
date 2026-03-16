import { Music, Palette, Video, Camera, Globe, Briefcase, Home, Image } from 'lucide-react';

export function Portfolio() {
  const projects = [
    {
      icon: Music,
      title: "Drill Music & Beat Production",
      category: "Music Production",
      description: "Original drill beats and production work for artists"
    },
    {
      icon: Palette,
      title: "Artist Visual Identity",
      category: "Branding & Design",
      description: "Complete visual branding packages for music artists"
    },
    {
      icon: Video,
      title: "Social Media Promo Content",
      category: "Digital Content",
      description: "Engaging reels and promotional content for social platforms"
    },
    {
      icon: Video,
      title: "Music Video Direction",
      category: "Video Production",
      description: "Creative direction and editing for music videos"
    },
    {
      icon: Palette,
      title: "Cover Art Design",
      category: "Graphic Design",
      description: "Professional album and single cover artwork"
    },
    {
      icon: Briefcase,
      title: "Business Flyer Design",
      category: "Marketing Materials",
      description: "Eye-catching promotional materials for businesses"
    },
    {
      icon: Home,
      title: "Property Listing Content",
      category: "Real Estate",
      description: "Professional content for property listings and marketing"
    },
    {
      icon: Camera,
      title: "Photography Projects",
      category: "Photography",
      description: "Product, portrait, and event photography services"
    },
    {
      icon: Globe,
      title: "Mini Website Projects",
      category: "Web Development",
      description: "Clean, professional websites and landing pages"
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            My Portfolio
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my work across music, design, video, and digital content
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-6"></div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-pink-500/20 flex items-center justify-center">
                <project.icon className="w-16 h-16 text-purple-400/40" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-xs text-purple-400 font-semibold mb-2">{project.category}</div>
                <h3 className="text-white font-bold text-lg mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                
                <button className="text-purple-400 hover:text-purple-300 font-semibold text-sm transition-colors">
                  View Project →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-2 text-lg">
            Interested in working together on your project?
          </p>
          <p className="text-gray-300 mb-6">
            Send me a quick WhatsApp message and tell me what you need. I usually reply fast.
          </p>
          <a
            href="https://wa.me/971523711530?text=Hello%20Kabangu%20Mathieu%2C%20I%20saw%20your%20website%20and%20I%20would%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-xl shadow-green-500/20"
          >
            Let's Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
}