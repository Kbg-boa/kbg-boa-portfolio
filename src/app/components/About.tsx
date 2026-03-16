import { Briefcase, MapPin, Sparkles } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
        </div>

        {/* Professional Description */}
        <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 mb-6">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I am the Director General of <span className="text-purple-400 font-semibold">Akili Groupe</span> in Kinshasa 
            and an artist and music producer performing under the name <span className="text-purple-400 font-semibold">KBG BOA</span>.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            I help artists, small businesses, and property professionals create strong visuals, digital content, and clear brand presence.
          </p>
        </div>

        {/* Human Touch */}
        <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl p-8 mb-8">
          <div className="flex items-start gap-3 mb-4">
            <Sparkles className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
            <div>
              <p className="text-white text-lg font-medium leading-relaxed mb-3">
                I don't just create visuals. I help people present themselves better, sell better, and communicate better.
              </p>
              <p className="text-gray-300 text-base leading-relaxed">
                I work with independent artists, entrepreneurs, and small businesses who want professional visuals without agency-level prices.
              </p>
            </div>
          </div>
        </div>

        {/* Key Points */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex items-start gap-4 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
            <Briefcase className="w-8 h-8 text-purple-400 flex-shrink-0" />
            <div>
              <h3 className="text-white font-semibold text-lg mb-2">Multidisciplinary</h3>
              <p className="text-gray-400">
                Music production, visual content, branding, digital services, and real estate support
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
            <MapPin className="w-8 h-8 text-purple-400 flex-shrink-0" />
            <div>
              <h3 className="text-white font-semibold text-lg mb-2">International Presence</h3>
              <p className="text-gray-400">
                Operating between Kinshasa and Dubai, understanding both markets deeply
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}