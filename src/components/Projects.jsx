import { motion, useReducedMotion } from 'framer-motion'
import { ProjectCard } from './ProjectCard'
import { getLinkProps } from '../utils/links'

export function Projects({ projects }) {
  const shouldReduceMotion = useReducedMotion()
  const featuredProject = projects[0]
  const otherProjects = projects.slice(1)
  const githubLink = getLinkProps(featuredProject.github, { external: true })
  const liveDemoLink = getLinkProps(featuredProject.liveDemo, { external: true })

  return (
    <motion.section
      id="projects"
      className="section"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
      whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Selected Projects</p>
          <h2>Projects that demonstrate my practical development experience.</h2>
        </div>

        <article className="featured-project">
          <div className="featured-project__content">
            <span className="project-category">{featuredProject.category}</span>
            <h3>{featuredProject.name}</h3>
            <p className="featured-summary">{featuredProject.overview}</p>

            <div className="feature-two-column">
              <div>
                <h4>Problem</h4>
                <p>{featuredProject.problem}</p>
              </div>
              <div>
                <h4>Solution</h4>
                <p>{featuredProject.solution}</p>
              </div>
            </div>

            <div className="tag-list">
              {featuredProject.technologies.map((tag) => (
                <span key={`${featuredProject.id}-${tag}`} className="tag">
                  {tag}
                </span>
              ))}
            </div>

            <div className="project-links featured-links">
              {featuredProject.github && <a className="btn btn-primary" {...githubLink}>GitHub</a>}
              {featuredProject.liveDemo && <a className="btn btn-secondary" {...liveDemoLink}>Live Demo</a>}
              <a className="btn btn-ghost" href="#case-study">
                View Case Study
              </a>
            </div>
          </div>

          <div className="featured-project__panel">
            <div className="panel-highlight">
              <span className="mini-label">Project focus</span>
              <strong>{featuredProject.highlight}</strong>
            </div>
            <ul className="feature-list">
              {featuredProject.features.map((feature) => (
                <li key={`${featuredProject.id}-feature-${feature}`}>{feature}</li>
              ))}
            </ul>
          </div>
        </article>

        <div className="project-grid">
          {otherProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </motion.section>
  )
}
