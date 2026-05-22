# Portfolio – Lâm Quốc Đạt

## Yêu cầu
- [Node.js](https://nodejs.org) v18+ (tải tại nodejs.org)

## Cài đặt & Chạy

```bash
# 1. Cài đặt dependencies
npm install

# 2. Chạy dev server
npm run dev
# → Mở trình duyệt tại http://localhost:5173

# 3. Build production
npm run build
```

## Cấu trúc dự án

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/           # Ảnh avatar và project thumbnails
│   │   ├── avatar.png
│   │   ├── p1.png, p2.png, p3.png
│   ├── components/
│   │   ├── Header.jsx    # Sticky nav + dark/light toggle
│   │   ├── Hero.jsx      # Typing effect + avatar
│   │   ├── About.jsx     # Skills bars + stats
│   │   ├── Projects.jsx  # Project cards grid
│   │   ├── Experience.jsx# Timeline experience
│   │   └── Footer.jsx    # Social links + copyright
│   ├── App.jsx
│   ├── index.css         # Global styles
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Tùy chỉnh nội dung

- **Avatar**: Thay file `src/assets/avatar.png` bằng ảnh của bạn
- **Project thumbnails**: Thay `p1.png`, `p2.png`, `p3.png`  
- **Thông tin cá nhân**: Chỉnh sửa trong từng component (Hero.jsx, About.jsx, Experience.jsx)
- **Link mạng xã hội**: Cập nhật trong `Footer.jsx`
- **CV**: Đặt file `cv.pdf` vào thư mục `public/`
