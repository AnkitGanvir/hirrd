# Hirrd 💼 — Full Stack Job Portal

A full-stack job portal where **recruiters** can post and manage job listings, and **candidates** can browse, save, and apply to jobs with a resume upload. Built with React, Tailwind CSS, Supabase, and Clerk.

**Live demo:** [ankit-job-portal.vercel.app](https://ankit-job-portal.vercel.app)

## ✨ Features

- **Role-based onboarding** — users choose to sign up as a *Candidate* or a *Recruiter*, stored via Clerk's user metadata, and are routed to the right dashboard.
- **Job listings** — browse all open jobs with filters by location, company, and a search-by-title query.
- **Job details** — full job description with a rich-text (Markdown) editor view, company info, and an apply/save action.
- **Post a job** (Recruiter) — create new job listings tied to a company, with a Markdown-based description field.
- **Company management** — recruiters can add new companies along with a logo upload to Supabase Storage.
- **My Jobs** (Recruiter) — view jobs you've posted, toggle hiring status (open/closed), review applicants, and update application status (applied/interviewing/hired/rejected).
- **Apply to Job** (Candidate) — apply with experience, education, skills, and a resume file, uploaded to Supabase Storage.
- **Saved Jobs** (Candidate) — bookmark jobs to revisit later.
- **Authentication** — secure sign-in/sign-up and session handling via Clerk, integrated with Supabase Row Level Security using Clerk-issued JWTs.
- **Protected routes** — job listing, job detail, post-job, my-jobs, and saved-jobs pages require authentication.
- **Dark theme UI** — built with shadcn/ui components and a custom theme provider.
- **Responsive design** — Tailwind CSS v4 for a mobile-friendly layout.

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Frontend | React 19, Vite |
| Styling | Tailwind CSS v4, shadcn/ui, Radix UI |
| Forms & Validation | React Hook Form, Zod |
| Auth | Clerk |
| Backend / Database / Storage | Supabase (PostgreSQL, Storage) |
| Routing | React Router v7 |
| Other | Embla Carousel, Lucide Icons, React Markdown Editor (`@uiw/react-md-editor`), React Spinners, country-state-city |

## 📂 Project Structure

```
src/
├── api/                 # Supabase query functions (jobs, applications, companies)
├── components/          # Reusable UI components (job-card, header, drawers, etc.)
│   └── ui/               # shadcn/ui primitives (button, input, select, etc.)
├── data/                # Static JSON (companies list, FAQ)
├── hooks/               # Custom hooks (e.g. use-fetch for API calls)
├── layouts/             # App layout wrapper
├── pages/               # Route-level pages (landing, job-listing, job, post-job, my-jobs, saved-job, onboarding)
├── utils/               # Supabase client setup
└── App.jsx              # Route definitions
```

## ⚙️ Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- A [Supabase](https://supabase.com/) project
- A [Clerk](https://clerk.com/) application

### 1. Clone the repository

```bash
git clone https://github.com/AnkitGanvir/hirrd.git
cd hirrd
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory and add:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

### 4. Set up Supabase

In your Supabase project, create the following:

- **Tables:** `companies`, `jobs`, `applications`, `saved_jobs` (with appropriate foreign keys/relations between them)
- **Storage buckets:** `company-logo` (public) and `resumes` (public)
- **Row Level Security:** configure policies using Clerk's JWT for authenticated access

### 5. Run the development server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### Other scripts

```bash
npm run build     # Production build
npm run preview   # Preview the production build locally
npm run lint      # Run ESLint
```

## 🚀 Deployment

This project is configured for [Vercel](https://vercel.com/) (see `vercel.json`) and is live at [ankit-job-portal.vercel.app](https://ankit-job-portal.vercel.app).

## 👤 Author

**Ankit Ganvir**
- GitHub: [@AnkitGanvir](https://github.com/AnkitGanvir)
- LinkedIn: [ankit-ganvir](https://linkedin.com/in/ankit-ganvir-099437239)

## 📄 License

This project is open source and available for learning purposes.
