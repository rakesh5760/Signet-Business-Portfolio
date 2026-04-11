import { Zap, Phone, Mail, MapPin } from 'lucide-react';
import { siteConfig, navLinks } from '../../data/site-content';

interface FooterProps {
  scrollToSection: (id: string) => void;
}

export function Footer({ scrollToSection }: FooterProps) {
  return (
    <footer className="bg-[#0F172A] text-white py-16 lg:py-24 relative overflow-hidden">
      {/* Decorative Gradient Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-500/5 blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                <Zap className="w-7 h-7 text-blue-400" strokeWidth={3} />
              </div>
              <div>
                <div className="text-2xl font-black tracking-tighter">{siteConfig.name}</div>
                <div className="text-xs font-black text-blue-400 uppercase tracking-widest">{siteConfig.tagline}</div>
              </div>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed max-w-md font-medium">
              Your trusted partner for premium electrical and plumbing supplies in Guntur and Vijayawada. Serving professionals and major infrastructure projects since {siteConfig.since}.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-black text-slate-500 uppercase tracking-[0.3em] mb-8">Quick Navigation</h4>
            <div className="space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-slate-300 font-bold hover:text-white hover:translate-x-2 transition-all duration-300"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-black text-slate-500 uppercase tracking-[0.3em] mb-8">Business Connect</h4>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-slate-300 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <Phone className="w-4 h-4 text-blue-400" />
                </div>
                <span className="text-sm font-bold tracking-wide">{siteConfig.contact.phones[0]}</span>
              </div>
              <div className="flex items-center gap-4 text-slate-300 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <Mail className="w-4 h-4 text-blue-400" />
                </div>
                <span className="text-sm font-bold tracking-wide">{siteConfig.contact.emails[0]}</span>
              </div>
              <div className="flex items-center gap-4 text-slate-300 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <MapPin className="w-4 h-4 text-blue-400" />
                </div>
                <span className="text-sm font-bold tracking-wide">Guntur, Andhra Pradesh</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:row items-center justify-between gap-6">
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">
            &copy; {new Date().getFullYear()} {siteConfig.name}.
          </p>
          <div className="flex gap-8 text-slate-500 text-[10px] font-black uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
