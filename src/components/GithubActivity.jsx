import { motion, useReducedMotion } from 'framer-motion'

export function GithubActivity() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.section
      id="github-activity"
      className="section"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
      whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">GitHub / Development Activity</p>
          <h2>Code profile and build activity section.</h2>
        </div>

        <div className="placeholder-box">
          <p>
            This section is ready for future GitHub activity and project contributions. It is intentionally kept flexible so GitHub API integration can be added later without breaking the portfolio layout.
          </p>
        </div>
      </div>
    </motion.section>
  )
}
