import { useState, useEffect } from 'react'

export function Navbar({ links, contact }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <a href="#top" className="brand" aria-label="Go to top">
          <span className="brand-mark">G</span>
          <span className="brand-text">G.Lokesh</span>
        </a>

        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
          <ul className="nav-list">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-actions">
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
          <div className="nav-socials" aria-label="Social links">
            <a href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">GH</a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
          </div>
          <a className="btn btn-secondary nav-button" href="#resume">
            Resume
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
