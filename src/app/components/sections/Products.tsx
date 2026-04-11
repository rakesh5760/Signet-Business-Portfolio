import { motion } from 'framer-motion';
import { products } from '../../data/site-content';

export function Products() {
  return (
    <section id="products" className="py-20 lg:py-32 bg-slate-50 relative overflow-hidden scroll-mt-28">
      {/* Decorative background shape */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 skew-x-12 translate-x-32 -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-24"
        >
          <div className="inline-block mb-4 px-5 py-2 bg-blue-100/50 rounded-full text-[#1E3A8A] text-xs font-bold tracking-widest uppercase">
            Our Portfolio
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#1E3A8A] mb-8 tracking-tighter">
            Premium Solutions For <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6]">Every Architecture</span>
          </h2>
          <p className="text-xl text-[#64748B] max-w-2xl mx-auto font-medium leading-relaxed">
            From industrial megaprojects to residential homes, we provide the highest quality electrical and plumbing hardware.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="h-full p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] bg-white border border-slate-100 hover:border-blue-200 hover:shadow-[0_40px_80px_rgba(30,58,138,0.12)] transition-all duration-500 overflow-hidden">
                {/* Product Card Glow */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-10 transition-opacity blur-3xl`} />
                
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-8 sm:mb-10 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <product.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" strokeWidth={2.5} />
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-[#1F2937] mb-4 group-hover:text-[#1E3A8A] transition-colors">
                  {product.title}
                </h3>
                <p className="text-[#64748B] text-lg leading-relaxed font-medium">
                  {product.description}
                </p>

                {/* Arrow detail */}
                <div className="mt-8 flex items-center gap-2 text-[#3B82F6] font-bold text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  Learn More <span className="text-xl">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
