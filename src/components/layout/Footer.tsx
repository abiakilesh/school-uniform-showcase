import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
];

const supportLinks = [
  { name: "FAQ", href: "/faq" },
  { name: "Sizing Guide", href: "/sizing-guide" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Our Clients", href: "/clients" },
  { name: "Contact Us", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-page section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center">
                <span className="text-accent-foreground font-serif font-bold text-xl">SU</span>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold">School Uniforms</h3>
                <p className="text-sm text-primary-foreground/70">Excellence in Every Stitch</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Providing quality school uniforms to educational institutions across the nation since 1995. 
              We pride ourselves on delivering excellence in every stitch.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-gold mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Phone</p>
                  <a href="tel:123456789" className="text-primary-foreground/80 text-sm hover:text-gold transition-colors">
                    123456789
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-gold mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <a href="mailto:info@gmail.com" className="text-primary-foreground/80 text-sm hover:text-gold transition-colors">
                    info@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gold mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Address</p>
                  <p className="text-primary-foreground/80 text-sm">
                    123 Uniform Street, Education City
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-gold mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Business Hours</p>
                  <p className="text-primary-foreground/80 text-sm">
                    Mon - Sat: 9:00 AM - 6:00 PM
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container-page py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/70">
            © {new Date().getFullYear()} School Uniforms. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm text-primary-foreground/70 hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-primary-foreground/70 hover:text-gold transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
