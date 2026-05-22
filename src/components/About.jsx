import { useEffect, useRef } from 'react'

const skills = [
  { name: '.NET / ASP.NET Core', pct: 82 },
  { name: 'Java / Spring Boot', pct: 85 },
  { name: 'React.js / JavaScript', pct: 78 },
  { name: 'SQL Server / Database', pct: 80 },
  { name: 'Selenium / Postman', pct: 75 },
  { name: 'Git / GitHub', pct: 88 },
]

const stats = [
  { number: '2+', label: 'Dự án thực tế' },
  { number: '2026', label: 'Tốt nghiệp' },
  { number: 'Full-time', label: 'Sẵn sàng đi làm' },
  { number: '100%', label: 'Nhiệt huyết' },
]

export default function About() {
  const sectionRef = useRef(null)
  const skillsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            // Animate skill bars
            skillsRef.current.forEach(el => el?.classList.add('animate'))
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section fade-up" id="about" ref={sectionRef}>
      <div className="section-inner">
        <p className="section-label">01 — Về tôi</p>
        <h2 className="section-title">Giới thiệu</h2>
        <div className="section-divider" />

        <div className="about-grid">
          <div>
            <div className="about-text">
              <p>
                Xin chào! Tôi là <strong style={{ color: 'var(--text)', fontWeight: 600 }}>Lâm Quốc Đạt</strong> — sinh viên chuyên ngành Kỹ thuật Phần mềm tại <strong style={{ color: 'var(--text)', fontWeight: 600 }}>Đại học HUTECH</strong>.
                Tôi có niềm đam mê đặc biệt với việc xây dựng các hệ thống phần mềm hiệu suất cao và tối ưu hóa trải nghiệm người dùng (UI/UX).
              </p>
              <p>
                Trong quá trình học tập và thực hiện các dự án, tôi đã tích lũy được kiến thức vững chắc về <strong style={{ color: 'var(--text)', fontWeight: 600 }}>.NET Core</strong>,
                <strong style={{ color: 'var(--text)', fontWeight: 600 }}> Java Spring Boot</strong>, và <strong style={{ color: 'var(--text)', fontWeight: 600 }}>ReactJS</strong>.
                Tôi luôn hướng đến việc viết code sạch, dễ bảo trì và áp dụng các mẫu thiết kế (Design Patterns) phù hợp.
              </p>
              <p>
                Mục tiêu của tôi là không ngừng nâng cao kỹ năng chuyên môn, học hỏi các công nghệ mới
                để đóng góp vào sự thành công của dự án và mang lại giá trị thiết thực cho người dùng cuối.
              </p>
            </div>

            <div className="about-stats">
              {stats.map(s => (
                <div key={s.label} className="stat-card">
                  <div className="stat-number">{s.number}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text3)', marginBottom: '1.5rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600 }}>
              Kỹ năng chuyên môn
            </p>
            <div className="skills-list">
              {skills.map((skill, i) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-meta">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-pct">{skill.pct}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-fill"
                      ref={el => skillsRef.current[i] = el}
                      style={{ '--target': `${skill.pct / 100}`, transitionDelay: `${i * 0.1}s` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
