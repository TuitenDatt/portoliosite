import { useState, useEffect } from 'react'
import avatarImg from '../assets/avatar.png'

const TYPING_ROLES = ['Backend Intern', 'Front-End Intern', 'Fullstack Developer', 'Problem Solver']

export default function Hero() {
  const [displayText, setDisplayText] = useState('')
  const [roleIdx, setRoleIdx] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = TYPING_ROLES[roleIdx]
    let timeout

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2200)
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setRoleIdx(i => (i + 1) % TYPING_ROLES.length)
    } else {
      const speed = isDeleting ? 60 : 100
      timeout = setTimeout(() => {
        setDisplayText(prev =>
          isDeleting ? prev.slice(0, -1) : currentRole.slice(0, prev.length + 1)
        )
      }, speed)
    }
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIdx])

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="hero" id="home">
      <div className="hero-bg-grid" />
      <div className="hero-bg-glow" />

      <div className="hero-inner">
        {/* LEFT: Content */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Sẵn sàng cho cơ hội mới
          </div>

          <h1 className="hero-title">
            <span className="greeting">Xin chào, tôi là</span>
            <span className="name">Lâm Quốc Đạt</span>
          </h1>

          <div className="hero-typing">
            <span className="typing-prefix">{'>'}</span>
            <span className="typing-text">{displayText}</span>
            <span className="typing-cursor" />
          </div>

          <p className="hero-desc">
            Thế mạnh cốt lõi của tôi nằm ở tư duy logic, giải quyết vấn đề và sự tập trung mạnh mẽ vào tối ưu hóa UI/UX. 
            Tôi luôn hướng đến sự hoàn hảo trong từng chi tiết kỹ thuật và không ngừng học hỏi để tạo ra 
            những sản phẩm phần mềm chất lượng cao, mang lại giá trị thực cho người dùng.
          </p>

          <div className="hero-cta">
            <button id="cta-projects" className="btn-primary" onClick={() => scrollTo('#projects')}>
              <span>Xem Dự Án</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            <a id="cta-cv" className="btn-outline" href="/cv.pdf" download>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
              </svg>
              <span>Tải CV</span>
            </a>
          </div>
        </div>

        {/* RIGHT: Avatar */}
        <div className="hero-visual">
          <div className="avatar-glow" />
          <div className="avatar-ring">
            <img src={avatarImg} alt="Lâm Quốc Đạt" className="avatar-img" />
          </div>

          <div className="floating-card card-1">
            <span style={{ fontSize: '1.4rem' }}>🚀</span>
            <div>
              <strong>2+ Dự án</strong>
              <div>đã triển khai</div>
            </div>
          </div>

          <div className="floating-card card-2">
            <span style={{ fontSize: '1.4rem' }}>💻</span>
            <div>
              <strong>Backend Dev</strong>
              <div>.NET & Java</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
