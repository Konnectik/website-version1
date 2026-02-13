import { Wifi, Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-2">
              <Wifi className="w-6 h-6 text-primary" />
              <span className="font-grotesk font-bold text-xl tracking-wider">KONNECTIK</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Delivering affordable, seamless, time-based internet access through smart hyperlocal 
              zones powered by fibre, 5G, and satellite connectivity.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/company/konnectik-cm" 
                className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-smooth"
                aria-label="LinkedIn"
              >
                <span className="text-primary font-bold">in</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-2">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#learn-more" className="text-muted-foreground hover:text-primary transition-smooth">
                  About Us
                </a>
              </li>
              <li>
                <a href="#expansion-journey" className="text-muted-foreground hover:text-primary transition-smooth">
                  Expansion Plan
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-smooth">
                  How It Works
                </a>
              </li> 
              <li>
                <a href="#download" className="text-muted-foreground hover:text-primary transition-smooth">
                  Download
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-2">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:konnectik2024@gmail.com" className="hover:text-primary transition-smooth">
                  konnectik2024@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+237653093701" className="hover:text-primary transition-smooth">
                  (+237) 653-09-37-01
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                <span>Douala, Cameroon</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-t flex justify-center">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Konnectik. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
