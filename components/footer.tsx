"use client"
import { motion } from "framer-motion"
import { Instagram, Twitter, Facebook, ArrowUpRight } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Shop: [
      { name: "New Arrivals", href: "/new-arrivals" },
      { name: "Chairs", href: "/chairs" },
      { name: "Tables", href: "/tables" },
      { name: "Storage", href: "/storage" },
      { name: "Lighting", href: "/lighting" },
    ],
    Company: [
      { name: "About", href: "/about" },
      { name: "Craftsmanship", href: "/craftsmanship" },
      { name: "Sustainability", href: "/sustainability" },
      { name: "Careers", href: "/careers" },
      { name: "Press", href: "/press" },
    ],
    Support: [
      { name: "Contact", href: "/contact" },
      { name: "Size Guide", href: "/size-guide" },
      { name: "Care Instructions", href: "/care-instructions" },
      { name: "Shipping", href: "/shipping" },
      { name: "Returns", href: "/returns" },
    ],
  }

  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Facebook", icon: Facebook, href: "#" },
  ]

  return (
    <footer className="bg-white/[0.02] border-t border-white/[0.02]">
      <div className="container-custom py-12 sm:py-14 md:py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 mb-10 lg:mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-4 mb-8 lg:mb-0 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">Gideon B. Shops</h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Architected in Belgium, built to last. We create timeless furniture pieces in solid oak, steel, and
                linen for spaces that breathe.
              </p>
              <div className="flex space-x-4 justify-center lg:justify-start mt-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-all duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={18} />
                    <span className="sr-only">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
              {Object.entries(footerLinks).map(([category, links], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-semibold text-neutral-900 mb-3 text-base sm:text-lg">{category}</h4>
                  <ul className="space-y-2 sm:space-y-3">
                    {links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-neutral-600 hover:text-neutral-900 transition-colors duration-200 group flex items-center text-sm sm:text-base py-1"
                          tabIndex={0}
                          aria-label={link.name}
                        >
                          {link.name}
                          <ArrowUpRight
                            size={14}
                            className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="pt-6 pb-3 border-t border-neutral-200 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-6 text-sm text-neutral-500 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="mb-2 sm:mb-0">&copy; {currentYear} Gideon B. Studio. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a href="/privacy-policy" className="hover:text-neutral-700 transition-colors" tabIndex={0} aria-label="Privacy Policy">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="hover:text-neutral-700 transition-colors" tabIndex={0} aria-label="Terms of Service">
              Terms of Service
            </a>
            <a href="/cookies" className="hover:text-neutral-700 transition-colors" tabIndex={0} aria-label="Cookies">
              Cookies
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
