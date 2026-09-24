import { motion, useReducedMotion } from 'framer-motion'

export function AITouristCaseStudy({ project }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.section
      id="case-study"
      className="section"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
      whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">AI Tourist Case Study</p>
          <h2>System design and learning outcomes.</h2>
        </div>

        <div className="case-study-grid">
          <div className="case-box">
            <span className="step-number">01</span>
            <h3>Problem</h3>
            <p>{project.problem}</p>
          </div>

          <div className="case-box">
            <span className="step-number">02</span>
            <h3>Solution</h3>
            <p>{project.solution}</p>
          </div>

          <div className="case-box full-width">
            <span className="step-number">03</span>
            <h3>Architecture</h3>
            <div className="architecture-flow" aria-label="Project architecture flow">
              <span>Frontend</span>
              <span className="flow-arrow">↓</span>
              <span>API / Backend</span>
              <span className="flow-arrow">↓</span>
              <span>Express.js</span>
              <span className="flow-arrow">↓</span>
              <span>MongoDB</span>
            </div>
            <p>
              Authentication flows and AI service integration are included conceptually to support the overall system design without inventing unsupported third-party APIs.
            </p>
          </div>

          <div className="case-box">
            <span className="step-number">04</span>
            <h3>Features</h3>
            <div className="module-list">
              <div>
                <h4>Completed</h4>
                <ul>
                  {project.implementedModules.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>Planned</h4>
                <ul>
                  {project.plannedModules.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="case-box">
            <span className="step-number">05</span>
            <h3>Technologies</h3>
            <div className="tag-list">
              {project.technologies.map((tag) => (
                <span key={`case-${tag}`} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="case-box full-width">
            <span className="step-number">06</span>
            <h3>Learning</h3>
            <ul className="feature-list compact-list">
              <li>Full-stack development</li>
              <li>Authentication</li>
              <li>Database integration</li>
              <li>API/backend development</li>
              <li>AI integration</li>
              <li>Project architecture</li>
              <li>Deployment experience</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
