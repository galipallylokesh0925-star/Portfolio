import { motion, useReducedMotion } from 'framer-motion'

export function About({ about }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.section
      id="about"
      className="section"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
      whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">About</p>
          <h2>Building practical solutions with a strong software-development mindset.</h2>
        </div>

        <div className="about-box">
          <p>{about}</p>
        </div>
      </div>
    </motion.section>
  )
}
