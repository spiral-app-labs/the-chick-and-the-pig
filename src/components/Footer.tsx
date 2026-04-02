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
              Savory fried chicken & BBQ in Algonquin, IL. 
              Chef Mat&apos;s homemade sauces, smoked meats, 
              and good vibes. Takeout, delivery & catering.
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
                href="https://order.toasttab.com/online/thechickandthepig"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-cream/60 hover:text-amber-gold transition-colors text-sm"
              >
                Order Online
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-amber-gold mb-4 tracking-wide uppercase text-sm">
              Contact
            </h4>
            <div className="space-y-2 text-cream/60 text-sm">
              <p>📍 1000 N Main Street</p>
              <p className="pl-6">Algonquin, IL</p>
              <a href="tel:+18472612222" className="block hover:text-amber-gold transition-colors">
                📞 (847) 261-2222
              </a>
              <a
                href="https://www.facebook.com/p/The-Chick-and-the-Pig-61563163378962/"
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
            © {new Date().getFullYear()} The Chick and The Pig. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
