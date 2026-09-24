import { motion, useReducedMotion } from 'framer-motion'

export function Achievements({ achievements }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.section
      id="achievements"
      className="section"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
      whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Achievements</p>
          <h2>Selected milestones and learning experiences.</h2>
        </div>

        <div className="achievement-grid">
          {achievements.map((item) => (
            <div key={`${item.title}-${item.organization}`} className="achievement-card">
              <h3>{item.title}</h3>
              <p>{item.organization}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
