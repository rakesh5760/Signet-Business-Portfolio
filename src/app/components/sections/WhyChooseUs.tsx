import { motion } from 'motion/react';
import { features } from '../../data/site-content';

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background Decorative Rings */}
      <div className="absolute -top-24 -left-24 w-96 h-96 border-[40px] border-blue-500/5 rounded-full" />
      <div className="absolute -bottom-24 -right-24 w-[30rem] h-[30rem] border-[60px] border-[#1E3A8A]/5 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-24"
        >
          <div className="inline-block mb-4 px-5 py-2 bg-white rounded-full text-[#1E3A8A] text-xs font-black tracking-widest uppercase shadow-sm">
            Our Advantage
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-[#1E3A8A] mb-8 tracking-tighter">
            Why Professionals <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6]">Choose Signet</span>
          </h2>
          <p className="text-xl text-[#64748B] max-w-2xl mx-auto font-medium leading-relaxed">
            Uncompromising quality, competitive scales, and a commitment to your project success.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col p-6 sm:p-10 rounded-3xl sm:rounded-[2.5rem] bg-white hover:shadow-[0_30px_60px_rgba(30,58,138,0.1)] transition-all duration-500 border border-transparent hover:border-blue-100 group"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#1E3A8A] flex items-center justify-center mb-6 sm:mb-8 shadow-lg group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500">
                <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-[#1F2937] mb-4 group-hover:text-[#1E3A8A] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-lg text-[#64748B] leading-relaxed font-medium">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
