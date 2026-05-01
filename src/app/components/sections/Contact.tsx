import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { siteConfig, contactInfo } from '../../data/site-content';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', requirements: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    const url = 'https://docs.google.com/forms/d/e/1FAIpQLSeinCqGHQGKz9QVhwIlFLiGZKsdIRm6qSQHZHQ_SXBUFTkCag/formResponse';
    const data = new URLSearchParams();
    data.append('entry.1482358372', formData.name);
    data.append('entry.248037110', formData.phone);
    data.append('entry.1232326808', formData.requirements);

    try {
      await fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: data.toString()
      });
      setStatus('success');
      setFormData({ name: '', phone: '', requirements: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-white relative scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="inline-block mb-4 px-5 py-2 bg-blue-50 rounded-full text-[#1E3A8A] text-xs font-bold tracking-widest uppercase">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#1E3A8A] mb-8 tracking-tighter">
            Let&apos;s Build Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6]">Next Project Together</span>
          </h2>
          <p className="text-xl text-[#6B7280] max-w-2xl mx-auto font-medium leading-relaxed">
            Expert consultation and bulk supply solutions for contractors and builders.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 sm:gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 sm:space-y-12"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1F2937] mb-10 tracking-tight">Contact Information</h3>
              <div className="space-y-10">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-6 group">
                    <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#1E3A8A] group-hover:scale-110 transition-all duration-300">
                      <item.icon className="w-8 h-8 text-[#3B82F6] group-hover:text-white transition-colors" strokeWidth={2.5} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] sm:text-xs font-bold text-[#94A3B8] uppercase tracking-[0.2em] mb-2">{item.title}</div>
                      <div className="text-lg sm:text-xl font-bold text-[#1F2937] whitespace-pre-line leading-relaxed break-words">
                        {item.content}
                      </div>
                      {item.isMap && (
                        <a
                          href={siteConfig.contact.googleMapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-6 inline-flex items-center gap-3 px-6 sm:px-8 py-3 bg-[#1E3A8A] text-white text-xs sm:text-sm font-bold rounded-2xl hover:bg-[#3B82F6] transition-all hover:shadow-xl active:scale-95 uppercase tracking-widest shadow-lg w-full sm:w-auto justify-center"
                        >
                          <MapPin className="w-4 h-4" />
                          Open Map
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-slate-50 p-6 sm:p-12 rounded-3xl sm:rounded-[3rem] border border-slate-100 shadow-xl relative overflow-hidden"
          >
            {/* Decorative Card Element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 -mr-16 -mt-16 rounded-full" />

            <h3 className="text-2xl sm:text-3xl font-bold text-[#1F2937] mb-10 tracking-tight">Direct Inquiry</h3>
            <form className="space-y-6 sm:space-y-8" onSubmit={handleSubmit}>
              <div className="space-y-3 sm:space-y-4">
                <label className="text-xs sm:text-sm font-bold text-[#4B5563] uppercase tracking-widest ml-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. John Doe"
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 rounded-2xl bg-white border-2 border-transparent focus:border-[#3B82F6] focus:ring-0 outline-none transition-all shadow-sm text-base sm:text-lg font-medium"
                />
              </div>

              <div className="space-y-3 sm:space-y-4">
                <label className="text-xs sm:text-sm font-bold text-[#4B5563] uppercase tracking-widest ml-1">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 9876543210"
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 rounded-2xl bg-white border-2 border-transparent focus:border-[#3B82F6] focus:ring-0 outline-none transition-all shadow-sm text-base sm:text-lg font-medium"
                />
              </div>

              <div className="space-y-3 sm:space-y-4">
                <label className="text-xs sm:text-sm font-bold text-[#4B5563] uppercase tracking-widest ml-1">Your Requirements</label>
                <textarea
                  rows={4}
                  required
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  placeholder="How can we assist your project?"
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 rounded-2xl bg-white border-2 border-transparent focus:border-[#3B82F6] focus:ring-0 outline-none transition-all shadow-sm text-base sm:text-lg font-medium resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-5 sm:py-6 bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] text-white font-bold rounded-2xl hover:shadow-[0_20px_40px_rgba(30,58,138,0.25)] transition-all active:scale-95 uppercase tracking-[0.2em] text-xs sm:text-sm shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Submitting...' : status === 'success' ? 'Sent Successfully!' : status === 'error' ? 'Error. Try Again' : 'Submit Inquiry'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
