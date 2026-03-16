import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { Instagram, Facebook } from 'lucide-react';
import { useState } from 'react';
import { Turnstile } from '@marsidev/react-turnstile';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const whatsappDubai = "+971523711530";
  const whatsappRDC = "+243812119488";
  const whatsappUrlDubai = `https://wa.me/${whatsappDubai.replace(/[^0-9]/g, '')}?text=${encodeURIComponent("Hello Kabangu Mathieu, I saw your website and I would like to discuss a project.")}`;
  const whatsappUrlRDC = `https://wa.me/${whatsappRDC.replace(/[^0-9]/g, '')}?text=${encodeURIComponent("Hello Kabangu Mathieu, I saw your website and I would like to discuss a project.")}`;

  // Protected email - decoded on click
  const getEmailAddress = () => {
    const parts = ['kbgmathieu', 'gmail', 'com'];
    return `${parts[0]}@${parts[1]}.${parts[2]}`;
  };

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${getEmailAddress()}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!turnstileToken) {
      alert('Please complete the security verification');
      return;
    }

    setIsSubmitting(true);

    // Basic honeypot check (hidden field that bots fill)
    const honeypot = (document.getElementById('website') as HTMLInputElement)?.value;
    if (honeypot) {
      // Bot detected - silently reject
      setIsSubmitting(false);
      return;
    }

    const mailtoLink = `mailto:${getEmailAddress()}?subject=Project Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
    
    // Reset form
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setTurnstileToken(null);
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Send me a message on WhatsApp and let's discuss your project
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

            {/* WhatsApp Dubai */}
            <a
              href={whatsappUrlDubai}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 hover:border-green-500/50 rounded-xl p-6 transition-all hover:scale-105"
            >
              <div className="flex items-center gap-4">
                <div className="bg-green-500/20 rounded-lg p-3">
                  <MessageCircle className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <div className="text-green-400 font-semibold text-sm mb-1">WhatsApp Dubai</div>
                  <div className="text-white font-bold text-lg">{whatsappDubai}</div>
                </div>
              </div>
            </a>

            {/* WhatsApp RDC */}
            <a
              href={whatsappUrlRDC}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 hover:border-green-500/50 rounded-xl p-6 transition-all hover:scale-105"
            >
              <div className="flex items-center gap-4">
                <div className="bg-green-500/20 rounded-lg p-3">
                  <MessageCircle className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <div className="text-green-400 font-semibold text-sm mb-1">WhatsApp RDC</div>
                  <div className="text-white font-bold text-lg">{whatsappRDC}</div>
                </div>
              </div>
            </a>

            {/* Email - Protected */}
            <button
              onClick={handleEmailClick}
              className="block w-full text-left bg-slate-800/30 border border-slate-700/50 hover:border-purple-500/50 rounded-xl p-6 transition-all hover:scale-105 cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="bg-purple-500/20 rounded-lg p-3">
                  <Mail className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <div className="text-purple-400 font-semibold text-sm mb-1">Email</div>
                  <div className="text-white font-bold text-lg">Click to Email Me</div>
                </div>
              </div>
            </button>

            {/* Location */}
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
              <div className="flex items-center gap-4">
                <div className="bg-blue-500/20 rounded-lg p-3">
                  <MapPin className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <div className="text-blue-400 font-semibold text-sm mb-1">Location</div>
                  <div className="text-white font-bold text-lg">Dubai, UAE & Kinshasa, RDC</div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl p-6">
              <h4 className="text-white font-bold text-lg mb-4">Follow Me</h4>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://www.tiktok.com/@mathieukbg1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg p-3 transition-all"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-xs">
                    TT
                  </div>
                  <span className="text-white text-sm font-semibold">TikTok</span>
                </a>

                <a
                  href="https://www.facebook.com/share/1BsMxh3vsP/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg p-3 transition-all"
                >
                  <Facebook className="w-8 h-8 text-blue-500" />
                  <span className="text-white text-sm font-semibold">Facebook</span>
                </a>

                <a
                  href="https://www.instagram.com/kbg_boa?igsh=MWdlMHgxN2x4aG8wZw%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg p-3 transition-all"
                >
                  <Instagram className="w-8 h-8 text-pink-500" />
                  <span className="text-white text-sm font-semibold">Instagram</span>
                </a>

                <a
                  href="https://snapchat.com/t/naNcyhmo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg p-3 transition-all"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center text-white font-bold text-xs">
                    SC
                  </div>
                  <span className="text-white text-sm font-semibold">Snapchat</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2 text-sm font-semibold">Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  minLength={2}
                  maxLength={100}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="Your name"
                  autoComplete="name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 text-sm font-semibold">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  maxLength={100}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="your.email@example.com"
                  autoComplete="email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 text-sm font-semibold">Message</label>
                <textarea
                  id="message"
                  required
                  minLength={10}
                  maxLength={1000}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              {/* Honeypot field - hidden from users, visible to bots */}
              <div style={{ position: 'absolute', left: '-9999px' }}>
                <input
                  type="text"
                  id="website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {/* Cloudflare Turnstile */}
              <div className="flex justify-center">
                <Turnstile
                  siteKey="1x00000000000000000000AA"
                  onSuccess={(token) => setTurnstileToken(token)}
                  onError={() => setTurnstileToken(null)}
                  onExpire={() => setTurnstileToken(null)}
                  options={{
                    theme: 'dark',
                    size: 'normal',
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={!turnstileToken || isSubmitting}
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-xl shadow-purple-500/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            <p className="text-gray-400 text-center mt-6 text-sm">
              Or message me directly on{' '}
              <a href={whatsappUrlDubai} className="text-green-400 hover:text-green-300 font-semibold" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
              {' '}for faster response
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
