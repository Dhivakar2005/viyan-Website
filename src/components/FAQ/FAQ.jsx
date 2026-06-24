import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "How long does it take to build a custom website?",
    answer: "The timeline depends on the complexity of the project. A standard business website typically takes 2-4 weeks, while complex web applications or e-commerce platforms can take 8-12 weeks."
  },
  {
    question: "What kind of AI solutions do you provide?",
    answer: "We specialize in integrating AI chatbots for customer support, workflow automation tools, personalized recommendation engines, and custom AI assistants tailored to your specific business needs."
  },
  {
    question: "How do your SEO services improve my ranking?",
    answer: "Our SEO strategy includes technical optimization (site speed, mobile-friendliness, clean code), on-page SEO (keyword strategy, content structure), and ongoing performance monitoring to ensure sustainable growth in search engine rankings."
  },
  {
    question: "Do you offer ongoing support after the project is completed?",
    answer: "Yes! We provide dedicated maintenance and support packages to ensure your digital assets remain secure, up-to-date, and optimized for performance long after the initial launch."
  },
  {
    question: "Can you redesign my existing website without losing SEO traffic?",
    answer: "Absolutely. We follow strict SEO migration protocols, including proper 301 redirects, URL structure mapping, and technical audits to ensure your existing search rankings are preserved and improved."
  },
  {
    question: "What technologies do you use for web development?",
    answer: "We use modern, scalable technologies including React, Next.js, Vue.js, Node.js, and Tailwind CSS. We select the best tech stack based on your project's specific requirements."
  },
  {
    question: "Are your pricing plans flexible?",
    answer: "Yes, our pricing is tailored to the scope of your project. We offer modular solutions so you can start with the essentials and scale up as your business grows."
  },
  {
    question: "How do we get started?",
    answer: "Simply book a free consultation through our contact form. We'll discuss your goals, analyze your current digital presence, and propose a tailored strategy."
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: "Yes. All our websites are built with a mobile-first approach, ensuring they look and perform flawlessly across all devices and screen sizes."
  },
  {
    question: "Do I own the code and design after the project is done?",
    answer: "Yes, upon final payment, you retain 100% ownership of the custom code, designs, and digital assets we create for your business."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-wider text-violet-primary uppercase mb-3"
          >
            Got Questions?
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white"
          >
            Frequently Asked <span className="text-gradient">Questions</span>
          </motion.h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`glass rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'border-violet-primary/50 shadow-md' : 'border-slate-200 dark:border-slate-800 hover:border-violet-primary/30'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`font-semibold text-lg transition-colors ${
                  openIndex === index ? 'text-violet-primary dark:text-violet-accent' : 'text-slate-900 dark:text-white'
                }`}>
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180 text-violet-primary dark:text-violet-accent' : 'text-slate-500'
                  }`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
