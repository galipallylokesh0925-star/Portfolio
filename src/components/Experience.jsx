import { motion, useReducedMotion } from 'framer-motion'

export function Experience({ experience }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.section
      id="experience"
      className="section"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
      whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Experience</p>
          <h2>Practical learning through training and project work.</h2>
        </div>

        <div className="timeline">
          {experience.map((item) => (
            <div key={`${item.company}-${item.role}`} className="timeline-item">
              <div className="timeline-dot" aria-hidden="true" />
              <div className="timeline-content">
                <h3>{item.company}</h3>
                <p className="timeline-role">{item.role}</p>
                <span className="timeline-type">{item.type}</span>
                <ul>
                  {item.focus.map((point) => (
                    <li key={`${item.company}-${point}`}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
