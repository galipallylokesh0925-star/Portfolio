import { getLinkProps } from '../utils/links'

export function ResumeCTA({ resumeUrl }) {
  const resumeLink = getLinkProps(resumeUrl, { external: false })

  return (
    <section id="resume" className="section resume-section">
      <div className="container resume-shell">
        <div>
          <p className="eyebrow">Interested in my profile?</p>
          <h2>View my resume for a detailed overview of my education, skills, projects and experience.</h2>
        </div>

        <a className="btn btn-primary" {...resumeLink}>
          Download Resume
        </a>
      </div>
    </section>
  )
}
