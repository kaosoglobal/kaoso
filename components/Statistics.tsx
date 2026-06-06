'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { Users, Briefcase, TrendingUp, Clock } from 'lucide-react'

export default function Statistics() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    {
      label: 'Businesses Assisted',
      value: 500,
      suffix: '+',
      icon: Users,
    },
    {
      label: 'Registrations & Compliance',
      value: 1000,
      suffix: '+',
      icon: Briefcase,
    },
    {
      label: 'Client Retention',
      value: 95,
      suffix: '%',
      icon: TrendingUp,
    },
    {
      label: 'Support Assistance',
      value: 24,
      suffix: 'x7',
      icon: Clock,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-20 md:py-32 gradient-premium">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16 text-white"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Impact in Numbers
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Trusted by hundreds of businesses for reliable, professional services.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center text-white hover:bg-white/20 transition-colors"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon size={32} />
                </div>
                <div className="text-4xl font-bold mb-2">
                  {inView && (
                    <>
                      <CountUp
                        end={stat.value}
                        duration={2.5}
                        useEasing={true}
                      />
                      <span>{stat.suffix}</span>
                    </>
                  )}
                </div>
                <p className="text-lg opacity-90">{stat.label}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
