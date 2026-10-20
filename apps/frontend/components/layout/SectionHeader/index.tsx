import { fadeUp } from '@lib/utils'
import { motion } from 'motion/react'

export function SectionHeader({ text }: { text: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={fadeUp}
      className="flex items-center gap-4 mb-4 md:mb-8"
    >
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">{text}</h2>
      <div className="flex-1 h-px bg-border ml-4" />
    </motion.div>
  )
}
