import { motion } from 'framer-motion';
import { brands } from '../../data/site-content';
import { ImageWithFallback } from '../ImageWithFallback';

export function Brands() {
  return (
    <section id="brands" className="py-24 bg-white scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-4 px-5 py-2 bg-slate-100 rounded-full text-[#1E3A8A] text-xs font-black tracking-widest uppercase">
            Industry Leaders
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#1E3A8A] mb-6 tracking-tighter">
            Our Trusted Partners
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto font-medium">
            We partner with the world&apos;s most reliable manufacturers to deliver quality you can trust.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-8">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-28 sm:h-36 rounded-2xl sm:rounded-3xl bg-white border-2 border-[#F1F5F9] hover:border-[#3B82F6]/30 flex items-center justify-center p-4 sm:p-8 transition-all duration-300 hover:shadow-xl">
                <ImageWithFallback
                  src={brand.logoUrl}
                  alt={`${brand.name} logo`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
