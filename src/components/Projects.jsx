import { useEffect, useRef } from 'react'
import p1 from '../assets/p1.png'
import p2 from '../assets/p2.png'
import p3 from '../assets/p3.png'

const projects = [
  {
    id: 'project-cineticket',
    name: 'CineTicket',
    desc: 'Hệ thống đặt vé xem phim trực tuyến với tính năng chọn ghế thời gian thực (SignalR), tích hợp thanh toán MoMo/VNPay và áp dụng kiến trúc Clean Architecture (Repository Pattern) giúp hệ thống dễ dàng mở rộng.',
    tags: ['.NET', 'SignalR', 'SQL Server', 'ReactJS', 'Clean Architecture'],
    img: p1,
    demo: 'https://github.com/TuitenDatt/CinemaTicket',
    repo: 'https://github.com/TuitenDatt/CinemaTicket',
  },
  {
    id: 'project-caulongvui',
    name: 'Cau Long Vui',
    desc: 'Nền tảng quản lý và đặt sân cầu lông. Triển khai hệ thống giữ chỗ thời gian thực bằng RSocket, xây dựng logic ví điện tử (Wallet System) và tích hợp các cổng thanh toán điện tử.',
    tags: ['Spring Boot', 'RSocket', 'Java', 'Spring Security', 'MoMo/VNPay'],
    img: p2,
    demo: 'https://github.com/TuitenDatt/CauLongVui_',
    repo: 'https://github.com/TuitenDatt/CauLongVui_',
  },
]

export default function Projects() {
  const cardsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) } }),
      { threshold: 0.1 }
    )
    cardsRef.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section" id="projects" style={{ background: 'var(--bg2)' }}>
      <div className="section-inner">
        <p className="section-label">02 — Portfolio</p>
        <h2 className="section-title">Dự án tiêu biểu</h2>
        <div className="section-divider" />

        <div className="projects-grid">
          {projects.map((p, i) => (
            <article
              key={p.id}
              id={p.id}
              className="project-card fade-up"
              ref={el => cardsRef.current[i] = el}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className="project-img-wrap">
                <img src={p.img} alt={p.name} className="project-img" />
              </div>
              <div className="project-body">
                <h3 className="project-name">{p.name}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="project-tags">
                  {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
                <div className="project-links">
                  <a href={p.demo} target="_blank" rel="noopener noreferrer" className="proj-link primary">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                    Live Demo
                  </a>
                  <a href={p.repo} target="_blank" rel="noopener noreferrer" className="proj-link secondary">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
