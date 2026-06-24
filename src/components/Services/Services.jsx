import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Cpu, TrendingUp, ShoppingCart, MessageSquare, Code2, LineChart, Server } from 'lucide-react';

const serviceCategories = [
  {
    title: 'Website Development',
    description: 'We build fast, scalable, and beautiful websites tailored to your brand.',
    icon: <Monitor size={32} />,
    color: 'from-blue-500 to-cyan-500',
    features: ['Business Websites', 'Landing Pages', 'E-Commerce Stores', 'Web Applications']
  },
  {
    title: 'AI Integration',
    description: 'Automate tasks and engage customers with custom AI solutions.',
    icon: <Cpu size={32} />,
    color: 'from-violet-500 to-fuchsia-500',
    features: ['AI Chatbots', 'Workflow Automation', 'AI Assistants', 'AI Business Solutions']
  },
  {
    title: 'SEO Services',
    description: 'Dominate search results and drive organic traffic to your business.',
    icon: <TrendingUp size={32} />,
    color: 'from-emerald-500 to-teal-500',
    features: ['Technical SEO', 'Local SEO', 'Keyword Strategy', 'Performance Optimization']
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
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
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6"
          >
            Comprehensive Digital <br />
            <span className="text-gradient">Transformation</span>
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 dark:text-slate-300"
          >
            From stunning websites to intelligent AI systems, we provide end-to-end solutions to elevate your business in the digital era.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group glass rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-10 rounded-bl-full transition-transform group-hover:scale-110`} />
              
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} text-white flex items-center justify-center mb-6 shadow-lg`}>
                {service.icon}
              </div>
              
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                {service.title}
              </h4>
              <p className="text-slate-600 dark:text-slate-300 mb-8 line-clamp-2">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-slate-700 dark:text-slate-200">
                    <div className="w-1.5 h-1.5 rounded-full bg-violet-primary mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700/50">
                <a href="#contact" className="inline-flex items-center text-violet-primary dark:text-violet-accent font-medium hover:underline">
                  Learn more
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
