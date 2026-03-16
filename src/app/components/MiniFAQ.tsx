import { MessageCircle, Clock, Globe } from 'lucide-react';

export function MiniFAQ() {
  const faqs = [
    {
      icon: Clock,
      question: "How fast do you deliver projects?",
      answer: "Most small projects are delivered within 2–5 days."
    },
    {
      icon: Globe,
      question: "Do you work with international clients?",
      answer: "Yes. I work with clients in Dubai, Kinshasa and online."
    },
    {
      icon: MessageCircle,
      question: "How do we start a project?",
      answer: "Send me a message on WhatsApp and tell me what you need."
    }
  ];

  return (
    <section id="faq" className="py-16 px-4 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
        </div>

        {/* FAQ Grid */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="bg-purple-500/20 rounded-lg p-3 flex-shrink-0">
                  <faq.icon className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">{faq.question}</h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <p className="text-gray-400 mb-4">Have more questions?</p>
          <a
            href="https://wa.me/971523711530?text=Hello%20Kabangu%20Mathieu%2C%20I%20have%20some%20questions%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="w-4 h-4" />
            Ask Me on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
