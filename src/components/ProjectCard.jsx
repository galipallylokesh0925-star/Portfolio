import { getLinkProps } from '../utils/links'

export function ProjectCard({ project }) {
  const githubLink = getLinkProps(project.github, { external: true })
  const liveDemoLink = getLinkProps(project.liveDemo, { external: true })

  return (
    <article className="project-card">
      <div className="project-card__header">
        <span className="project-category">{project.category}</span>
        <h3>{project.name}</h3>
      </div>

      <p>{project.description || project.overview}</p>

      <div className="tag-list">
        {project.technologies.map((tag) => (
          <span key={`${project.id}-${tag}`} className="tag">
            {tag}
          </span>
        ))}
      </div>

      <ul className="feature-list">
        {(project.features || []).slice(0, 4).map((feature) => (
          <li key={`${project.id}-${feature}`}>{feature}</li>
        ))}
      </ul>

      <div className="project-links">
        {project.liveDemo && <a className="btn btn-secondary" {...liveDemoLink}>Live Demo</a>}
        {project.github && <a className="btn btn-ghost" {...githubLink}>GitHub</a>}
      </div>
    </article>
  )
}
