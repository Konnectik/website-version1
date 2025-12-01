import { Wifi, Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Wifi className="w-6 h-6 text-primary" />
              <span className="font-grotesk font-bold text-xl tracking-wider">KONNECTIK</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Delivering affordable, seamless, time-based internet access through smart hyperlocal 
              zones backed by satellite connectivity.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-smooth"
                aria-label="Facebook"
              >
                <span className="text-primary font-bold">f</span>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-smooth"
                aria-label="Twitter"
              >
                <span className="text-primary font-bold">𝕏</span>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-smooth"
                aria-label="LinkedIn"
              >
                <span className="text-primary font-bold">in</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  Coverage Map
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:hello@konnectik.com" className="hover:text-primary transition-smooth">
                  hello@konnectik.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+1234567890" className="hover:text-primary transition-smooth">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                <span>123 Connectivity Ave<br />Tech City, TC 12345</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Konnectik. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
