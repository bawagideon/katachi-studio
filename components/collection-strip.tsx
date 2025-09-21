"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { Reveal } from "./reveal"

const collections = [
  {
    id: "modern-seating",
    name: "MODERN SEATING",
    image: "/modern-armchair-pillows.png",
    count: "8 pieces",
  },
  {
    id: "modular-design",
    name: "MODULAR DESIGN",
    image: "/modular-cushion-bench.png",
    count: "6 pieces",
  },
  {
    id: "cloud-collection",
    name: "CLOUD COLLECTION",
    image: "/cloud-white-sofa.png",
    count: "4 pieces",
  },
  {
    id: "artistic-pieces",
    name: "ARTISTIC PIECES",
    image: "/distressed-artistic-chair.png",
    count: "5 pieces",
  },
  {
    id: "contemporary",
    name: "CONTEMPORARY",
    image: "/green-modular-loveseat.png",
    count: "7 pieces",
  },
  {
    id: "textural-craft",
    name: "TEXTURAL CRAFT",
    image: "/braided-rope-loveseat.png",
    count: "3 pieces",
  },
  {
    id: "maximalist-art",
    name: "MAXIMALIST ART",
    image: "/colorful-patchwork-sofa.png",
    count: "4 pieces",
  },
  {
    id: "scandinavian-comfort",
    name: "SCANDINAVIAN COMFORT",
    image: "/minimalist-boucle-loveseat.png",
    count: "6 pieces",
  },
  {
    id: "abstract-forms",
    name: "ABSTRACT FORMS",
    image: "/abstract-artistic-sofa.png",
    count: "5 pieces",
  },
  {
    id: "luxury-textures",
    name: "LUXURY TEXTURES",
    image: "/textured-cream-loveseat.png",
    count: "8 pieces",
  },
]

export function CollectionStrip() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const x = useTransform(scrollYProgress, [0, 1], [0, -100])

  const itemWidth = 320 // 320px (w-80) + 32px gap = 352px per item
  const totalWidth = collections.length * (itemWidth + 32) - 32 // subtract last gap
  const containerWidth = typeof window !== "undefined" ? window.innerWidth : 1200
  const maxDrag = Math.max(0, totalWidth - containerWidth + 48) // add padding

  return (
  <section ref={containerRef} className="py-10 sm:py-16 md:py-20 lg:py-32 overflow-hidden">
  <div className="mb-6 sm:mb-12">
        <Reveal>
          <div className="container-custom text-center px-4 sm:px-6 md:px-8">
            <h2 className="text-2xl sm:text-4xl text-neutral-900 mb-2 sm:mb-4 lg:text-6xl font-normal">Collections</h2>
            <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto">
              Explore our curated collections, each telling a unique story of craftsmanship and design philosophy.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="relative">
        <motion.div
          className="flex gap-4 sm:gap-8 px-2 sm:px-6 overflow-x-auto scrollbar-thin"
          style={{ x }}
          drag="x"
          dragConstraints={{ left: -maxDrag, right: 0 }}
          dragElastic={0.1}
        >
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              className="flex-shrink-0 w-56 sm:w-80 group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-2 sm:mb-4">
                <motion.div
                  className="relative w-full h-full"
                  whileHover={{ filter: "blur(1px)" }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={collection.image || "/placeholder.svg"}
                    alt={collection.name}
                    fill
                    className="object-cover"
                    sizes="224px"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300" />
                </motion.div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="text-center text-white"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-lg sm:text-3xl font-bold tracking-wider mb-1 sm:mb-2">{collection.name}</h3>
                    <p className="text-xs sm:text-sm opacity-90">{collection.count}</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="text-center mt-4 sm:mt-8">
        <p className="text-xs sm:text-sm text-neutral-500">← Drag to explore collections →</p>
      </div>
    </section>
  )
}
