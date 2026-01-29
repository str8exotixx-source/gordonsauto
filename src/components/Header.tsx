import { useState } from "react";
import { Menu, X, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#vehicles", label: "Vehicles" },
  { href: "/finance", label: "Finance" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    
    // Handle hash navigation
    if (href.startsWith("/#")) {
      const hash = href.substring(1);
      if (location.pathname === "/") {
        // Already on home, just scroll
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // Navigate to home then scroll
        window.location.href = href;
      }
    }
  };

  const renderNavLink = (link: typeof navLinks[0], isMobile: boolean = false) => {
    const baseClassName = isMobile
      ? "font-display text-2xl uppercase tracking-widest text-foreground hover:text-primary transition-colors duration-300"
      : "font-display text-sm uppercase tracking-widest text-foreground hover:text-primary transition-colors duration-300";

    if (link.href.startsWith("/#")) {
      return (
        <a
          key={link.href}
          href={link.href}
          onClick={(e) => {
            e.preventDefault();
            handleNavClick(link.href);
          }}
          className={baseClassName}
        >
          {link.label}
        </a>
      );
    }

    return (
      <Link
        key={link.href}
        to={link.href}
        onClick={() => setIsMenuOpen(false)}
        className={baseClassName}
      >
        {link.label}
      </Link>
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20 lg:h-24">
          {/* Instagram Icon - Left */}
          <a
            href="https://www.instagram.com/gordonsautotraders"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 text-foreground hover:text-primary transition-colors duration-300"
            aria-label="Follow us on Instagram"
          >
            <Instagram className="w-5 h-5 md:w-6 md:h-6" />
          </a>

          {/* Centered Logo - Stretched Wide */}
          <Link to="/" className="flex-1 flex justify-center px-2 md:px-4">
            <img
              src={logo}
              alt="Gordons AutoTraders - Buy Sell Trade"
              className="h-10 md:h-14 lg:h-18 w-auto max-w-[220px] md:max-w-[350px] lg:max-w-[450px] object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => renderNavLink(link))}
          </nav>

          {/* Mobile Menu Button - Right */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 text-foreground hover:text-primary transition-colors duration-300"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Sidebar */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-16 bg-background/80 backdrop-blur-sm lg:hidden z-40"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed right-0 top-16 bottom-0 w-72 bg-card border-l border-border lg:hidden z-50 shadow-2xl"
            >
              <nav className="flex flex-col p-6 gap-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {renderNavLink(link, true)}
                  </motion.div>
                ))}
                
                {/* Instagram in mobile menu */}
                <motion.a
                  href="https://www.instagram.com/gordonsautotraders"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors duration-300 pt-6 border-t border-border"
                >
                  <Instagram className="w-5 h-5" />
                  <span className="font-body text-base">@gordonsautotraders</span>
                </motion.a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
