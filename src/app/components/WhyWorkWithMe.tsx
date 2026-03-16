import { Zap, DollarSign, Lightbulb, MapPin, Users, MessageCircle } from 'lucide-react';

export function WhyWorkWithMe() {
  const reasons = [
    {
      icon: Zap,
      title: "Fast Communication",
      description: "Quick responses and efficient workflow to keep your project moving"
    },
    {
      icon: DollarSign,
      title: "Flexible Pricing",
      description: "Customizable packages that fit your budget and needs"
    },
    {
      icon: Lightbulb,
      title: "Creative + Business Mindset",
      description: "Combining artistic vision with strategic business thinking"
    },
    {
      icon: MapPin,
      title: "Dubai + Kinshasa Market Understanding",
      description: "Deep knowledge of both markets and cultural nuances"
    },
    {
      icon: Users,
      title: "Multidisciplinary Support",
      description: "One point of contact for all your creative and digital needs"
    },
    {
      icon: MessageCircle,
      title: "Direct WhatsApp Availability",
      description: "Easy access and direct communication for smooth collaboration"
    }
  ];

  return (
    <section id="why" className="py-20 px-4 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Why Work With Me
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            What sets me apart and makes collaboration smooth and effective
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-6"></div>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10"
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full p-4 mb-4">
                  <reason.icon className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{reason.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Send me a message on WhatsApp and let's discuss your project. Fast communication, clear pricing, quality results.
          </p>
          <a
            href="https://wa.me/971523711530?text=Hello%20Kabangu%20Mathieu%2C%20I%20saw%20your%20website%20and%20I%20would%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-xl shadow-green-500/20"
          >
            <MessageCircle className="w-5 h-5" />
            Message Me on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}