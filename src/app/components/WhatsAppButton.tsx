import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

export function WhatsAppButton() {
  const [isExpanded, setIsExpanded] = useState(false);
  const whatsappNumber = "+971523711530";
  const message = "Hello Kabangu Mathieu, I saw your website and I would like to discuss a project.";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;

  return (
    <>
      {/* Desktop Floating Button */}
      <div className="hidden md:block">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
          className="fixed bottom-6 right-6 z-50 group"
        >
          <div className={`flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-full shadow-2xl shadow-green-500/50 transition-all duration-300 hover:scale-110 ${
            isExpanded ? 'px-6 py-4' : 'p-4'
          }`}>
            <MessageCircle className="w-6 h-6" />
            {isExpanded && (
              <span className="font-semibold whitespace-nowrap">
                Message Me
              </span>
            )}
          </div>
        </a>
      </div>

      {/* Mobile Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-green-500 to-emerald-500 shadow-2xl">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 text-white py-4 font-bold text-lg"
        >
          <MessageCircle className="w-6 h-6" />
          WhatsApp Me Now
        </a>
      </div>

      {/* Mobile spacing to prevent content overlap */}
      <div className="md:hidden h-16"></div>
    </>
  );
}