'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Company: ['Home', 'About', 'Services', 'Blog'],
    Services: ['Business Registration', 'GST Services', 'Taxation', 'Licensing'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
    Social: [
      { icon: Facebook, href: '#' },
      { icon: Twitter, href: '#' },
      { icon: Linkedin, href: '#' },
      { icon: Instagram, href: '#' },
    ],
  }

  return (
    <footer className="bg-dark-900 text-white pt-16 pb-8">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="gradient-premium w-10 h-10 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <span className="text-2xl font-bold">Kaoso</span>
            </div>
            <p className="text-dark-300 mb-6">
              Your Trusted Business Partner
            </p>
            <p className="text-sm text-dark-400">
              Kaoso Global Services Private Limited
            </p>
          </motion.div>

          {/* Quick Links */}
          {Object.entries(footerLinks).slice(0, 3).map((category, index) => (
            <motion.div
              key={category[0]}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="font-bold text-lg mb-4">{category[0]}</h3>
              <ul className="space-y-2">
                {(category[1] as string[]).map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-dark-300 hover:text-primary-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {footerLinks.Social.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                    aria-label="Social link"
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-dark-800 my-8"></div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-dark-400 text-sm">
            &copy; {currentYear} Kaoso Global Services Private Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-dark-400 text-sm">
            <span>Made with</span>
            <Heart size={16} className="fill-red-500 text-red-500" />
            <span>for Indian Businesses</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
