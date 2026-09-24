import { motion, useReducedMotion } from 'framer-motion'

export function Skills({ skills }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.section
      id="skills"
      className="section"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
      whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Skills</p>
          <h2>Core technologies and growth areas.</h2>
        </div>

        <div className="skills-grid">
          {skills.map((group) => (
            <div key={group.category} className="skill-card">
              <h3>{group.category}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
