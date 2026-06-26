import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Cpu, TrendingUp, Smartphone, PenTool, Database } from 'lucide-react';

const serviceCategories = [
  {
    title: 'Website Development',
    description: 'We build fast, scalable, and beautiful websites tailored to your brand.',
    icon: <Monitor size={18} />,
    color: 'from-blue-500 to-cyan-500',
    features: ['Business Websites', 'Landing Pages', 'E-Commerce Stores', 'Web Applications']
  },
  {
    title: 'AI Integration',
    description: 'Automate tasks and engage customers with custom AI solutions.',
    icon: <Cpu size={18} />,
    color: 'from-violet-500 to-fuchsia-500',
    features: ['AI Chatbots', 'Workflow Automation', 'AI Assistants', 'AI Business Solutions']
  },
  {
    title: 'ERP System',
    description: 'Streamline operations with powerful, customized ERP solutions.',
    icon: <Database size={18} />,
    color: 'from-indigo-500 to-blue-500',
    features: ['Inventory Management', 'HR Modules', 'Financial Tracking', 'Custom Dashboards']
  },
  {
    title: 'SEO Services',
    description: 'Dominate search results and drive organic traffic to your business.',
    icon: <TrendingUp size={18} />,
    color: 'from-emerald-500 to-teal-500',
    features: ['Technical SEO', 'Local SEO', 'Keyword Strategy', 'Performance Optimization']
  },
  {
    title: 'App Development',
    description: 'Custom mobile and desktop applications for iOS, Android, and Web.',
    icon: <Smartphone size={18} />,
    color: 'from-pink-500 to-rose-500',
    features: ['iOS Apps', 'Android Apps', 'Cross-Platform', 'Desktop Apps']
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive, and user-centric designs that convert.',
    icon: <PenTool size={18} />,
    color: 'from-amber-500 to-orange-500',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design']
  }
];

const Services = () => {
  return (
    <section id="services" className="py-8 lg:py-10 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-wider text-violet-primary uppercase mb-3"
          >
            Our Services
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-2"
          >
            Comprehensive Digital <br />
            <span className="text-gradient">Transformation</span>
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm text-slate-600 dark:text-slate-300"
          >
            From stunning websites to intelligent AI systems, we provide end-to-end solutions to elevate your business in the digital era.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          {serviceCategories.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group glass rounded-3xl p-4 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden flex flex-col h-full"
            >
              <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${service.color} opacity-10 rounded-bl-full transition-transform group-hover:scale-110`} />
              
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${service.color} text-white flex items-center justify-center mb-2 shadow-lg`}>
                {service.icon}
              </div>
              
              <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                {service.title}
              </h4>
              <p className="text-[11px] text-slate-600 dark:text-slate-300 mb-3 line-clamp-2">
                {service.description}
              </p>
              
              <ul className="space-y-1 flex-grow">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-[11px] text-slate-700 dark:text-slate-200">
                    <div className="w-1 h-1 rounded-full bg-violet-primary mr-1.5" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="mt-2 pt-2 border-t border-slate-200 dark:border-slate-700/50">
                <a href="#contact" className="inline-flex items-center text-[11px] text-violet-primary dark:text-violet-accent font-medium hover:underline">
                  Learn more
                  <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
