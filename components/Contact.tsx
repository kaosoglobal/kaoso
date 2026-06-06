'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MessageSquare, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    requirement: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        phone: '',
        email: '',
        requirement: '',
        message: '',
      })
    }, 3000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-white dark:bg-dark-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
            Have questions? Our team is here to help. Reach out to us today.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <motion.div variants={itemVariants} className="flex gap-4">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-primary-600 dark:text-primary-400" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Phone</h3>
                  <p className="text-dark-600 dark:text-dark-400">+91 XXXXXXXXXX</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex gap-4">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-primary-600 dark:text-primary-400" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <p className="text-dark-600 dark:text-dark-400">contact@kaoso.in</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex gap-4">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="text-primary-600 dark:text-primary-400" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">WhatsApp</h3>
                  <p className="text-dark-600 dark:text-dark-400">+91 XXXXXXXXXX</p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="mt-12 p-8 bg-gradient-light dark:bg-dark-800 rounded-2xl"
              >
                <h3 className="font-bold text-lg mb-4">Working Hours</h3>
                <p className="text-dark-600 dark:text-dark-400 mb-2">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-dark-600 dark:text-dark-400">Saturday: 10:00 AM - 2:00 PM</p>
                <p className="text-dark-600 dark:text-dark-400 text-sm mt-2">*24/7 Support Available</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-semibold mb-2">Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-dark-200 dark:border-dark-700 rounded-lg bg-white dark:bg-dark-800 focus:outline-none focus:border-primary-500 dark:focus:border-primary-400 transition-colors"
                placeholder="Your Name"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-sm font-semibold mb-2">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-dark-200 dark:border-dark-700 rounded-lg bg-white dark:bg-dark-800 focus:outline-none focus:border-primary-500 dark:focus:border-primary-400 transition-colors"
                placeholder="+91 XXXXXXXXXX"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-sm font-semibold mb-2">Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-dark-200 dark:border-dark-700 rounded-lg bg-white dark:bg-dark-800 focus:outline-none focus:border-primary-500 dark:focus:border-primary-400 transition-colors"
                placeholder="your@email.com"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-sm font-semibold mb-2">Business Requirement *</label>
              <select
                name="requirement"
                value={formData.requirement}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-dark-200 dark:border-dark-700 rounded-lg bg-white dark:bg-dark-800 focus:outline-none focus:border-primary-500 dark:focus:border-primary-400 transition-colors"
              >
                <option value="">Select a service</option>
                <option value="business-registration">Business Registration</option>
                <option value="gst-services">GST Services</option>
                <option value="taxation">Taxation & Compliance</option>
                <option value="licensing">Licensing Services</option>
                <option value="business-advisory">Business Advisory</option>
                <option value="other">Other</option>
              </select>
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-dark-200 dark:border-dark-700 rounded-lg bg-white dark:bg-dark-800 focus:outline-none focus:border-primary-500 dark:focus:border-primary-400 transition-colors resize-none"
                placeholder="Tell us more about your requirement..."
              />
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4 pt-4">
              <button
                type="submit"
                className="btn-primary flex items-center gap-2 group flex-1"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  window.open('https://wa.me/91XXXXXXXXXX', '_blank')
                }}
                className="btn-secondary flex items-center gap-2 flex-1"
              >
                <MessageSquare size={20} />
                <span>WhatsApp</span>
              </button>
            </motion.div>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="p-4 bg-green-100 dark:bg-green-900/20 border border-green-300 dark:border-green-700 rounded-lg text-green-700 dark:text-green-300 text-center"
              >
                ✓ Thank you! We'll get back to you soon.
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
