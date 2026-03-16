import { MessageCircle, Briefcase, Eye } from 'lucide-react';

export function Hero() {
  const whatsappUrl = "https://wa.me/971523711530?text=Hello%20Kabangu%20Mathieu%2C%20I%20saw%20your%20website%20and%20I%20would%20like%20to%20discuss%20a%20project.";

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950"></div>
      
      {/* Animated Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
          Kabangu Mathieu
        </h1>

        {/* Artist Name */}
        <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-6">
          KBG BOA
        </div>

        {/* Professional Title */}
        <p className="text-lg md:text-xl text-gray-300 mb-4 max-w-3xl mx-auto">
          Multidisciplinary Creative • Music Producer • Drill Artist • Visual Content Creator • Real Estate Support
        </p>

        {/* Tagline */}
        <div className="inline-block mb-4">
          <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-500 to-purple-500 bg-clip-text text-transparent">
            Built Between Kinshasa & Dubai
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-gray-400 mb-4 max-w-2xl mx-auto leading-relaxed">
          Working with artists, entrepreneurs and property professionals who need strong visual content and digital presence.
        </p>
        
        <p className="text-base md:text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          I help artists, small businesses, and property professionals create powerful visuals, 
          digital content, and strong brand presence.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-xl shadow-green-500/20"
          >
            <MessageCircle className="w-5 h-5" />
            Start a Project on WhatsApp
          </a>

          <a
            href="#services"
            className="group flex items-center gap-3 bg-slate-800/50 hover:bg-slate-700/50 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 border border-slate-700"
          >
            <Briefcase className="w-5 h-5" />
            View Services
          </a>

          <a
            href="#portfolio"
            className="group flex items-center gap-3 bg-slate-800/50 hover:bg-slate-700/50 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 border border-slate-700"
          >
            <Eye className="w-5 h-5" />
            See My Work
          </a>
        </div>

        {/* Trust Line */}
        <p className="text-gray-500 text-sm mt-12 max-w-2xl mx-auto">
          Trusted by artists, entrepreneurs and small businesses between Kinshasa and Dubai.
        </p>
      </div>
    </section>
  );
}