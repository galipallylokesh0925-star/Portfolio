import { motion, useReducedMotion } from 'framer-motion'

export function Education({ education }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.section
      id="education"
      className="section"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
      whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Education</p>
          <h2>Academic foundation.</h2>
        </div>

        <div className="education-grid">
          {education.map((item) => (
            <article className="edu-card" key={`${item.degree}-${item.college}`}>
              <p className="edu-degree">{item.degree}</p>
              <h3>{item.college}</h3>
              <div className="education-meta">
                <span>{item.period}</span>
                {item.result && <span>{item.result}</span>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
