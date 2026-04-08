# Blog Management System with Authentication, Roles & SEO

A production-ready full-stack blog platform built with **Node.js, Express.js, MongoDB, React.js, and Next.js**, featuring **JWT authentication, role-based access control (RBAC), SEO optimization, admin dashboard, and public blog frontend**.

---

## 🚀 Project Overview
This project is a secure and scalable blog management platform where:
- Blogs are managed through an **Admin Dashboard**
- Content is stored in **MongoDB**
- Public pages are **SEO optimized**
- UI and APIs change based on **user roles**
- Authentication is secured using **JWT + bcrypt**
- Git workflow follows meaningful commits

---

## 🛠 Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- REST APIs
- bcrypt
- multer (image upload)

### Admin Dashboard
- React.js
- Axios
- React Router
- Tailwind CSS

### Public Frontend
- Next.js
- Server-Side Rendering (SSR)
- Dynamic SEO meta tags
- JSON-LD structured data

### Other Tools
- Git & GitHub
- dotenv
- ESLint
- Prettier

---

## 🔐 Authentication & Authorization
- JWT-based login
- Secure password hashing with bcrypt
- Token protected routes
- Role validation middleware
- Session persistence
- Refresh-safe protected APIs

---

## 👥 User Roles & Permissions

| Role | Permissions |
|---|---|
| Super Admin | Full access (users, blogs, SEO, settings) |
| Editor | Create/edit blogs, SEO, tags, categories |
| Author | Create and manage own blogs |
| Viewer/User | Read-only access |

### RBAC Rules
- Author cannot edit/delete other users’ blogs
- Viewer cannot access admin dashboard
- Editor cannot manage users
- Super Admin has complete access

---

## ✍️ Blog SEO Features
Each blog supports:
- Meta Title
- Meta Description
- SEO-friendly Slug
- Canonical URL
- Feature Image
- Open Graph Tags
- Twitter Card
- Tags
- Categories
- FAQ Schema
- Internal Links
- External Links
- JSON-LD Structured Data
- Clean URLs
- Sitemap.xml
- robots.txt

---

## 📁 Folder Structure
```bash
blog-platform/
├── backend/
│   ├── models/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── utils/
│   └── server.js
│
├── admin-panel/
│   └── src/
│       ├── pages/
│       ├── components/
│       ├── hooks/
│       └── services/
│
├── frontend/
│   ├── app/
│   ├── components/
│   ├── lib/
│   └── seo/
│
├── .env.example
└── README.md
