import './App.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { RecruiterSnapshot } from './components/RecruiterSnapshot'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { Education } from './components/Education'
import { Achievements } from './components/Achievements'
import { ResumeCTA } from './components/ResumeCTA'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { portfolio } from './data/portfolio'

function App() {
  const { candidate, navLinks, snapshot, skills, projects, experience, education, achievements } = portfolio

  return (
    <div className="app-shell">
      <Navbar links={navLinks} contact={candidate.contact} />

      <main>
        <Hero candidate={candidate} />
        <RecruiterSnapshot stats={snapshot} />
        <About about={candidate.about} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Experience experience={experience} />
        <Education education={education} />
        <Achievements achievements={achievements} />
        <ResumeCTA resumeUrl={candidate.contact.resume} />
        <Contact contact={candidate.contact} />
      </main>

      <Footer />
    </div>
  )
}

export default App
