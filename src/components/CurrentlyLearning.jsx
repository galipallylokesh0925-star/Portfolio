import { motion, useReducedMotion } from 'framer-motion'

export function CurrentlyLearning({ learning }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.section
      id="learning"
      className="section"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
      whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Currently Building My Next Level</p>
          <h2>Focused skill development for the next stage of my career.</h2>
        </div>

        <div className="learning-grid">
          {learning.map((item) => (
            <div key={item.title} className="learning-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
