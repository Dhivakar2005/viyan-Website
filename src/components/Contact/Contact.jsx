import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm as useHookForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useHookForm();
  const [submitStatus, setSubmitStatus] = useState(null);

  const onSubmit = async (data) => {
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log(data);
      setSubmitStatus('success');
      reset();
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      setSubmitStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Information */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold tracking-wider text-violet-primary uppercase mb-3">
                Get In Touch
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                Let's Build Something <span className="text-gradient">Amazing Together</span>
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-12">
                Ready to transform your digital presence? Reach out to us for a free consultation and let's discuss how we can help your business grow.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center text-violet-primary flex-shrink-0 mr-6">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Email Us</h4>
                    <p className="text-slate-600 dark:text-slate-400">hello@viyan.tech</p>
                    <p className="text-slate-600 dark:text-slate-400">support@viyan.tech</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center text-violet-primary flex-shrink-0 mr-6">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Call Us</h4>
                    <p className="text-slate-600 dark:text-slate-400">+91 98765 43210</p>
                    <p className="text-slate-600 dark:text-slate-400">Mon-Fri, 9am-6pm IST</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center text-violet-primary flex-shrink-0 mr-6">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Visit Us</h4>
                    <p className="text-slate-600 dark:text-slate-400">Tech Park, Phase 1</p>
                    <p className="text-slate-600 dark:text-slate-400">Bangalore, India 560001</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-8 border border-slate-200 dark:border-slate-800"
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Name</label>
                    <input
                      id="name"
                      type="text"
                      {...register("name", { required: "Name is required" })}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-primary dark:text-white transition-shadow"
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
                    <input
                      id="email"
                      type="email"
                      {...register("email", { 
                        required: "Email is required",
                        pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
                      })}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-primary dark:text-white transition-shadow"
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Phone (Optional)</label>
                    <input
                      id="phone"
                      type="tel"
                      {...register("phone")}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-primary dark:text-white transition-shadow"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Company</label>
                    <input
                      id="company"
                      type="text"
                      {...register("company")}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-primary dark:text-white transition-shadow"
                      placeholder="Your Company Ltd."
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Service Required</label>
                    <select
                      id="service"
                      {...register("service", { required: "Please select a service" })}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-primary dark:text-white transition-shadow appearance-none"
                    >
                      <option value="">Select a service...</option>
                      <option value="website">Website Development</option>
                      <option value="ai">AI Integration</option>
                      <option value="seo">SEO Services</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.service && <p className="mt-1 text-sm text-red-500">{errors.service.message}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Estimated Budget</label>
                    <select
                      id="budget"
                      {...register("budget")}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-primary dark:text-white transition-shadow appearance-none"
                    >
                      <option value="">Select budget range...</option>
                      <option value="small">₹15,000 - ₹50,000</option>
                      <option value="medium">₹50,000 - ₹2,000,000</option>
                      <option value="large">₹2,000,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows="4"
                    {...register("message", { required: "Message is required" })}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-primary dark:text-white transition-shadow resize-none"
                    placeholder="Tell us about your project goals..."
                  ></textarea>
                  {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 bg-violet-primary hover:bg-violet-secondary text-white rounded-xl font-medium transition-all shadow-lg shadow-violet-primary/30 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 ml-2" />
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-xl text-sm text-center">
                    Thank you! Your message has been sent successfully. We'll be in touch soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 rounded-xl text-sm text-center">
                    Oops! Something went wrong. Please try again later.
                  </div>
                )}

              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
