import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Users, Zap, Search, Headset, Layers } from 'lucide-react';

const reasons = [
  {
    title: 'Expert Development Team',
    description: 'Our senior developers build robust, scalable, and secure applications using the latest tech stack.',
    icon: <Users size={24} />,
  },
  {
    title: 'AI-Powered Solutions',
    description: 'We integrate cutting-edge AI features to give your business a competitive advantage.',
    icon: <Zap size={24} />,
  },
  {
    title: 'SEO Growth Strategy',
    description: 'Built-in technical SEO ensures your website ranks higher and drives organic traffic.',
    icon: <Search size={24} />,
  },
  {
    title: 'Fast Delivery',
    description: 'Our agile methodology ensures rapid development cycles without compromising quality.',
    icon: <CheckCircle2 size={24} />,
  },
  {
    title: 'Dedicated Support',
    description: 'We provide ongoing maintenance and 24/7 technical support to keep your systems running smoothly.',
    icon: <Headset size={24} />,
  },
  {
    title: 'Scalable Architecture',
    description: 'Future-proof designs that grow seamlessly with your user base and business needs.',
    icon: <Layers size={24} />,
  }
];

const WhyChoose = () => {
  return (
    <section id="about" className="relative h-screen flex items-center justify-center overflow-hidden py-4 lg:py-0">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 w-full">
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          
          {/* Text Section */}
          <div className="w-full lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold tracking-wider text-violet-primary uppercase mb-2">
                Why Choose Viyan
              </h2>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
                Your Partner in <span className="text-gradient">Digital Excellence</span>
              </h3>
              <p className="text-base text-slate-600 dark:text-slate-300 mb-6">
                We don't just build websites; we engineer digital experiences designed to scale, convert, and dominate your industry.
              </p>
              

            </motion.div>
          </div>

          {/* Cards Grid */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-5 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors flex flex-col justify-center"
              >
                <div className="w-10 h-10 rounded-xl bg-violet-100 dark:bg-slate-800 flex items-center justify-center text-violet-primary mb-3">
                  {reason.icon}
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">
                  {reason.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
