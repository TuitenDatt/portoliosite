import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Giới thiệu', href: '#about' },
  { label: 'Dự án', href: '#projects' },
  { label: 'Kinh nghiệm', href: '#experience' },
  { label: 'Liên hệ', href: '#contact' },
]

export default function Header({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <header className={`header${scrolled ? ' scrolled' : ''}`}>
        <a href="#" className="logo" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
          LQD<span>.</span>
        </a>

        <nav className="nav">
          {navLinks.map(l => (
            <a key={l.label} href={l.href} className="nav-link" onClick={e => handleNav(e, l.href)}>
              {l.label}
            </a>
          ))}
          <button
            id="theme-toggle"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Chuyển đổi giao diện"
            title={theme === 'dark' ? 'Chuyển sang giao diện sáng' : 'Chuyển sang giao diện tối'}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Menu"
          >
            <span style={menuOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}} />
            <span style={menuOpen ? { opacity: 0, transform: 'translateX(-10px)' } : {}} />
            <span style={menuOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}} />
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: 70, left: 0, right: 0, zIndex: 999,
          background: 'var(--bg2)', borderBottom: '1px solid var(--border)',
          padding: '1rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem'
        }}>
          {navLinks.map(l => (
            <a key={l.label} href={l.href} onClick={e => handleNav(e, l.href)}
              style={{ fontSize: '1rem', color: 'var(--text2)', fontWeight: 500, padding: '0.5rem 0' }}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </>
  )
}
