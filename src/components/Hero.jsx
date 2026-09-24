import { motion, useReducedMotion } from 'framer-motion'
import { getLinkProps } from '../utils/links'
import profilePhoto from '../assets/profile-photo.jpg'

export function Hero({ candidate }) {
  const shouldReduceMotion = useReducedMotion()
  const resumeLink = getLinkProps(candidate.contact.resume, { external: false })
  const githubLink = getLinkProps(candidate.contact.github, { external: true })
  const linkedInLink = getLinkProps(candidate.contact.linkedin, { external: true })

  return (
    <section id="top" className="hero-section section">
      <div className="container hero-grid">
        <motion.div
          className="hero-copy"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="eyebrow">Open to software engineering opportunities</p>
          <h1>{candidate.hero.heading}</h1>
          <h2 className="hero-subheading">{candidate.hero.subheading}</h2>
          <div className="hero-resume-actions">
            <a className="btn btn-primary" href="#projects">View My Projects</a>
            <a className="btn btn-secondary" {...resumeLink}>Download Resume</a>
          </div>
          <p className="hero-text">{candidate.hero.supportingText}</p>

          <div className="social-row" aria-label="Social links">
            <a {...githubLink}>GitHub</a>
            <a {...linkedInLink}>LinkedIn</a>
            <a href={`mailto:${candidate.contact.email}`}>Email</a>
          </div>
        </motion.div>

        <motion.aside
          className="hero-visual"
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          <div className="profile-frame">
            <img src={profilePhoto} alt="Professional portrait of G.Lokesh" />
          </div>
        </motion.aside>
      </div>
    </section>
  )
}
