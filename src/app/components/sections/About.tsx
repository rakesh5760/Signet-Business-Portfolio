import { motion } from 'framer-motion';
import { Award, Users, MapPin } from 'lucide-react';
import { ImageWithFallback } from '../ImageWithFallback';

const aboutStats = [
  { label: 'Years Exp', value: '18+' },
  { label: 'Projects', value: '500+' },
  { label: 'Brands', value: '50+' }
];

const valueCards = [
  {
    icon: Award,
    title: 'Quality First',
    description: 'Only genuine branded products from trusted manufacturers',
    color: 'from-[#1E3A8A] to-[#3B82F6]'
  },
  {
    icon: Users,
    title: 'Project Support',
    description: 'Bulk supply and dedicated service for commercial projects',
    color: 'from-[#3B82F6] to-[#60A5FA]'
  },
  {
    icon: MapPin,
    title: 'Local Reach',
    description: 'Fast availability across Guntur and Vijayawada',
    color: 'from-[#2563EB] to-[#3B82F6]'
  }
];

export function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-white overflow-hidden scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6 px-5 py-2 bg-blue-50 border border-blue-100 rounded-full text-[#1E3A8A] text-xs font-bold tracking-[0.2em] uppercase">
              Our Legacy
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#1E3A8A] mb-8 sm:mb-10 leading-tight tracking-tighter">
              A Legacy of <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6]">Reliable Engineering</span>
            </h2>
            
            <div className="space-y-8 text-xl text-[#4B5563] leading-relaxed font-medium">
              <p>
                Signet Electricals is a trusted and reliable supplier of complete electrical and plumbing solutions, proudly based in <span className="text-[#1E3A8A] font-extrabold border-b-4 border-blue-200">Guntur and Vijayawada, Andhra Pradesh</span>.
              </p>
              <p>
                With a strong focus on quality and customer satisfaction, we cater to residential, commercial, and industrial projects, ensuring the timely availability of materials and dependable service.
              </p>
            </div>

            {/* Mission Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 sm:mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#1E3A8A] to-[#1E40AF] text-white shadow-2xl relative overflow-hidden group border border-white/10"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 -mr-24 -mt-24 rounded-full group-hover:scale-125 transition-transform duration-700 blur-2xl" />
              <h3 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-3">
                <Award className="w-8 h-8 text-blue-300" strokeWidth={2.5} /> 
                The Signet Mission
              </h3>
              <p className="text-xl text-blue-50 leading-relaxed italic font-light">
                "To deliver high-quality materials at competitive prices while maintaining strong relationships... aiming to be a one-stop solution for all electrical and plumbing requirements."
              </p>
            </motion.div>
          </motion.div>

          {/* Right Visual Pane */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Artistic Abstract Background */}
            <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[100px] -z-10" />
            
            <div className="relative p-4 bg-white rounded-[3rem] shadow-[-20px_40px_80px_rgba(30,58,138,0.15)] border border-blue-50">
              <div className="rounded-[2.5rem] overflow-hidden group">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=800"
                  alt="Quality Infrastructure"
                  className="w-full h-full object-cover aspect-[4/5] transition-transform duration-1000 group-hover:scale-110"
                />
              </div>

              {/* Stats Grid - Relative on mobile, Absolute on Desktop */}
              <div className="mt-8 lg:absolute lg:bottom-10 lg:left-10 lg:right-10 p-6 sm:p-8 bg-white/90 lg:backdrop-blur-2xl rounded-3xl shadow-xl lg:shadow-2xl border border-blue-50 lg:border-white/50 ring-1 ring-black/5">
                <div className="grid grid-cols-3 gap-2 sm:gap-4">
                  {aboutStats.map((stat, i) => (
                    <div key={i} className="text-center group">
                      <div className="text-2xl sm:text-4xl font-bold text-[#1E3A8A] group-hover:scale-110 transition-transform">{stat.value}</div>
                      <div className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 sm:gap-10 mt-16 sm:mt-24 lg:mt-32">
          {valueCards.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -15 }}
              className="relative group"
            >
              <div className="h-full p-6 sm:p-10 rounded-3xl border border-blue-50 bg-white hover:shadow-[0_20px_50px_rgba(30,58,138,0.1)] transition-all duration-500">
                <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 sm:mb-8 shadow-lg group-hover:rotate-6 transition-all duration-500`}>
                  <item.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1F2937] mb-4 group-hover:text-[#1E3A8A] transition-colors">{item.title}</h3>
                <p className="text-[#64748B] text-base sm:text-lg leading-relaxed font-medium">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
