import { useEffect, useRef } from 'react'

const experiences = [
  {
    icon: '🎓',
    role: 'Sinh viên Kỹ thuật Phần mềm',
    company: 'Đại học Công nghệ TP.HCM (HUTECH)',
    period: '2022 – 2026',
    desc: [
      'Chuyên ngành: Kỹ thuật Phần mềm',
      'GPA hiện tại: 3.09/4.0',
      'Tập trung nghiên cứu về kiến trúc phần mềm, hệ quản trị cơ sở dữ liệu và phát triển ứng dụng web hiện đại.',
    ],
  },
  {
    icon: '🏆',
    role: 'Chứng chỉ & Kỹ năng mềm',
    company: 'HUTECH & Các tổ chức giáo dục',
    period: '2026',
    desc: [
      'Chứng chỉ Tiếng Anh CEFR B1.',
      'Certificate of Communication and Teamwork Skills (Kỹ năng giao tiếp và làm việc nhóm).',
      'Hoàn thành các khóa học chuyên sâu về .NET và Spring Boot trên các nền tảng học trực tuyến.',
    ],
  },
]

export default function Experience() {
  const itemsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) } }),
      { threshold: 0.1 }
    )
    itemsRef.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section" id="experience">
      <div className="section-inner">
        <p className="section-label">03 — Hành trình</p>
        <h2 className="section-title">Kinh nghiệm</h2>
        <div className="section-divider" />

        <div className="experience-list">
          <div className="exp-line" />
          {experiences.map((exp, i) => (
            <div
              key={exp.role}
              className="exp-item fade-up"
              ref={el => itemsRef.current[i] = el}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="exp-dot-wrap">
                <div className="exp-dot">{exp.icon}</div>
              </div>
              <div className="exp-content">
                <div className="exp-header">
                  <h3 className="exp-role">{exp.role}</h3>
                  <span className="exp-period">{exp.period}</span>
                </div>
                <p className="exp-company">{exp.company}</p>
                <ul className="exp-desc">
                  {exp.desc.map((d, j) => <li key={j}>{d}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
