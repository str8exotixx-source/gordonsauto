import { Phone, MapPin, Instagram, Clock, Mail } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer id="contact" className="bg-card border-t border-border">
      {/* Contact Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl uppercase tracking-wider mb-4">
            <span className="text-chrome">Get in</span>{" "}
            <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-xl mx-auto">
            Ready to find your dream classic? Contact us today
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Phone */}
          <motion.a
            href="tel:+27613832618"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center p-6 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
          >
            <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <span className="font-display text-sm uppercase tracking-widest text-muted-foreground mb-2">
              Call Us
            </span>
            <span className="font-body text-lg text-foreground">061 383 2618</span>
          </motion.a>

          {/* Location */}
          <motion.a
            href="https://maps.google.com/?q=6+Wendtlandt+Street,+Parow+East,+Cape+Town,+South+Africa"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center p-6 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
          >
            <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <span className="font-display text-sm uppercase tracking-widest text-muted-foreground mb-2">
              Visit Us
            </span>
            <span className="font-body text-lg text-foreground text-center">
              6 Wendtlandt Street<br />
              Parow East, Cape Town
            </span>
          </motion.a>

          {/* Instagram */}
          <motion.a
            href="https://www.instagram.com/gordonsautotraders"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center p-6 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
          >
            <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
              <Instagram className="w-6 h-6 text-primary" />
            </div>
            <span className="font-display text-sm uppercase tracking-widest text-muted-foreground mb-2">
              Follow Us
            </span>
            <span className="font-body text-lg text-foreground">@gordonsautotraders</span>
          </motion.a>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center p-6 bg-muted rounded-lg"
          >
            <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <span className="font-display text-sm uppercase tracking-widest text-muted-foreground mb-2">
              Hours
            </span>
            <span className="font-body text-lg text-foreground text-center">
              Mon - Fri: 9am - 5pm<br />
              Sat: By Appointment
            </span>
          </motion.div>
        </div>

        {/* WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <a
            href="https://wa.me/27613832618"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white font-display uppercase tracking-widest py-4 px-8 rounded-md transition-all shadow-lg hover:shadow-xl"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span>WhatsApp Us</span>
          </a>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <img
              src={logo}
              alt="Gordons AutoTraders"
              className="h-10 w-auto object-contain"
            />
            <p className="text-muted-foreground font-body text-sm text-center">
              © {new Date().getFullYear()} Gordons AutoTraders. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/gordonsautotraders"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
