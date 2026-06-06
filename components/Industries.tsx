'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Testimonials } from 'lucide-react'

export default function Industries() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const industries = [
    { name: 'Manufacturers', icon: '🏭' },
    { name: 'Traders', icon: '🏪' },
    { name: 'Startups', icon: '🚀' },
    { name: 'E-commerce Sellers', icon: '🛒' },
    { name: 'Service Providers', icon: '⚙️' },
    { name: 'MSMEs', icon: '🏢' },
    { name: 'Exporters', icon: '✈️' },
    { name: 'Retail Businesses', icon: '🛍️' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-20 md:py-32 bg-gradient-light dark:bg-dark-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Industries We Serve</span>
          </h2>
          <p className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
            Serving diverse business sectors with tailored compliance and growth solutions.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white dark:bg-dark-900 p-8 rounded-2xl card-shadow group hover:shadow-2xl text-center"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {industry.icon}
              </div>
              <h3 className="text-xl font-bold text-dark-900 dark:text-white">
                {industry.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
