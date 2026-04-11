import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Zap } from 'lucide-react';
import { siteConfig, navLinks } from '../../data/site-content';
import logo from '../../../assets/logo.png';

interface NavbarProps {
  isScrolled: boolean;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  scrollToSection: (id: string) => void;
}

export function Navbar({ isScrolled, isMenuOpen, setIsMenuOpen, scrollToSection }: NavbarProps) {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2 sm:gap-4 hover:opacity-90 transition-all text-left group min-w-0"
            aria-label="Back to home"
          >
            <img
              src={logo}
              alt={`${siteConfig.name} Logo`}
              className={`w-auto object-contain transition-all duration-300 ${isScrolled ? 'h-10 sm:h-12' : 'h-12 sm:h-16'}`}
            />
            <div className="min-w-0">
              <div className="text-lg sm:text-2xl font-bold text-[#1E3A8A] leading-tight group-hover:text-[#3B82F6] transition-colors truncate">
                {siteConfig.name}
              </div>
              <div className="text-[10px] sm:text-sm text-[#6B7280] font-medium tracking-wide italic truncate">
                {siteConfig.tagline}
              </div>
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-semibold text-[#1F2937] hover:text-[#1E3A8A] transition-colors relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1E3A8A] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2.5 bg-[#3B82F6] text-white font-bold rounded-xl hover:bg-[#1E3A8A] transition-all hover:shadow-lg uppercase tracking-wider text-xs"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-[#1E3A8A] hover:bg-[#EFF6FF] rounded-lg transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-[#E5E7EB] shadow-xl overflow-hidden"
          >
            <div className="px-8 py-12">
              <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-10">Quick Navigation</h4>
              <div className="space-y-6">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    type="button"
                    onClick={() => scrollToSection(link.href)}
                    className="block w-full text-left text-2xl font-bold text-[#1F2937] hover:text-[#1E3A8A] hover:translate-x-2 transition-all duration-300"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
              <div className="pt-12">
                <button
                  type="button"
                  onClick={() => scrollToSection('contact')}
                  className="w-full px-6 py-5 bg-[#3B82F6] text-white font-bold rounded-2xl hover:bg-[#1E3A8A] shadow-[0_10px_20px_rgba(59,130,246,0.3)] transition-all text-center uppercase tracking-widest text-sm"
                >
                  Get A Free Quote
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
