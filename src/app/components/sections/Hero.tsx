import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { siteConfig } from '../../data/site-content';
import { ImageWithFallback } from '../ImageWithFallback';

interface HeroProps {
  scrollToSection: (id: string) => void;
}

export function Hero({ scrollToSection }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#3B82F6] overflow-hidden scroll-mt-28">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-6 px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-xs sm:text-sm font-bold tracking-widest uppercase shadow-2xl"
            >
              Trusted Since {siteConfig.since}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 sm:mb-8 leading-[1.1] tracking-tighter"
            >
              Building The <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">Future Of Guntur</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg sm:text-2xl text-white/90 mb-8 sm:mb-12 leading-relaxed max-w-xl font-medium"
            >
              Complete Electrical &amp; Plumbing Solutions for residential, commercial, and industrial projects.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto"
            >
              <button
                onClick={() => scrollToSection('products')}
                className="group px-8 sm:px-10 py-4 sm:py-5 bg-white text-[#1E3A8A] font-bold rounded-2xl hover:bg-blue-50 transition-all shadow-2xl hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] flex items-center justify-center gap-3 uppercase tracking-wider active:scale-95 text-sm sm:text-base w-full sm:w-auto"
              >
                Explore Products
                <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" strokeWidth={3} />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 sm:px-10 py-4 sm:py-5 bg-transparent border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white hover:text-[#1E3A8A] hover:border-white transition-all backdrop-blur-sm uppercase tracking-wider active:scale-95 text-sm sm:text-base w-full sm:w-auto"
              >
                Get A Quote
              </button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            {/* Glow effect */}
            <div className="absolute -inset-10 bg-blue-400/20 blur-[120px] rounded-full animate-pulse" />
            
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)] border-8 border-white/10 backdrop-blur-3xl group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1770838773181-e1b17ec22fee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwaW5zdGFsbGF0aW9uJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NzU4OTE0ODR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Electrical Installation Excellence"
                className="w-full h-[700px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/60 via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating Element */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 p-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl"
            >
              <div className="text-2xl sm:text-4xl font-bold text-white leading-tight">Guaranteed</div>
              <div className="text-[10px] sm:text-sm font-bold text-blue-200 uppercase tracking-widest mt-1">Quality Assurance</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer group"
        onClick={() => scrollToSection('about')}
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-8 h-14 border-2 border-white/30 rounded-full flex justify-center p-2 group-hover:border-white transition-colors"
        >
          <div className="w-1.5 h-1.5 bg-white rounded-full group-hover:scale-150 transition-transform" />
        </motion.div>
      </motion.div>
    </section>
  );
}
