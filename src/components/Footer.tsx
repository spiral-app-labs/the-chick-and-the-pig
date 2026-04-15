import { BUSINESS, SITE_LINKS } from "@/lib/siteData";

export default function Footer() {
  return (
    <footer className="bg-smoky-brown border-t border-amber-gold/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-3xl text-amber-gold mb-3">
              THE CHICK & THE PIG
            </h3>
            <p className="text-cream/50 text-sm leading-relaxed">
              Savory fried chicken, smoked meats, daily specials, catering, and Chef Mat&apos;s sauces. Built around accurate info and the fastest order paths.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-amber-gold mb-4 tracking-wide uppercase text-sm">
              Quick Links
            </h4>
            <div className="space-y-2">
              <a href="#specials" className="block text-cream/60 hover:text-amber-gold transition-colors text-sm">Daily Specials</a>
              <a href="#menu" className="block text-cream/60 hover:text-amber-gold transition-colors text-sm">Menu</a>
              <a href="#sauces" className="block text-cream/60 hover:text-amber-gold transition-colors text-sm">Chef Mat&apos;s Sauces</a>
              <a href="#catering" className="block text-cream/60 hover:text-amber-gold transition-colors text-sm">Catering</a>
              <a
                href={SITE_LINKS.toast}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-cream/60 hover:text-amber-gold transition-colors text-sm"
              >
                Order Online
              </a>
              <a
                href={SITE_LINKS.giftCards}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-cream/60 hover:text-amber-gold transition-colors text-sm"
              >
                Gift Cards
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-amber-gold mb-4 tracking-wide uppercase text-sm">
              Contact
            </h4>
            <div className="space-y-2 text-cream/60 text-sm">
              <p>📍 {BUSINESS.addressLine1}</p>
              <p className="pl-6">{BUSINESS.addressLine2}</p>
              <a href={BUSINESS.phoneHref} className="block hover:text-amber-gold transition-colors">
                📞 {BUSINESS.phoneDisplay}
              </a>
              <a href={`mailto:${BUSINESS.email}`} className="block hover:text-amber-gold transition-colors">
                ✉️ {BUSINESS.email}
              </a>
              <a href={`mailto:${BUSINESS.cateringEmail}`} className="block hover:text-amber-gold transition-colors">
                Catering: {BUSINESS.cateringEmail}
              </a>
              <a
                href={SITE_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-amber-gold transition-colors"
              >
                📘 Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 mt-10 pt-6 text-center">
          <p className="text-cream/30 text-xs">
            © {new Date().getFullYear()} The Chick and The Pig. Order online, buy gift cards, or email catering directly.
          </p>
        </div>
      </div>
    </footer>
  );
}
