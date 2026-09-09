import Header from '@/components/header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen container px-4 mx-auto">
        <Header />
        <Outlet />
      </main>
     <div className="p-8 text-center bg-gray-800 mt-10 text-gray-300 flex flex-col items-center justify-center gap-4 border-t border-gray-700 shadow-inner">

  {/* Social Media Links */}
  <div className="flex items-center gap-4 my-1">
    <a
      href="https://github.com/AnkitGanvir"
      target="_blank"
      rel="noreferrer"
      className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 hover:text-white transition-all"
      aria-label="GitHub"
    >
      <svg
        className="w-5 h-5 fill-current"
        viewBox="0 0 24 24"
      >
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    </a>

    <a
      href="https://www.linkedin.com/in/ankit-ganvir-099437239/"
      target="_blank"
      rel="noreferrer"
      className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 hover:text-white transition-all"
      aria-label="LinkedIn"
    >
      <svg
        className="w-5 h-5 fill-current"
        viewBox="0 0 24 24"
      >
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    </a>

    <a
      href="ankitganvir1744@gmail.com"
      className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 hover:text-white transition-all"
      aria-label="Email"
    >
      <svg
        className="w-5 h-5 fill-none stroke-current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    </a>
  </div>

  <div className="w-full h-[1px] bg-gray-700"></div>

  {/* Author & Copyright */}
  <p className="text-base tracking-wide flex items-center justify-center gap-1.5 font-medium">
    Made with <span className="text-red-500 animate-pulse text-lg">💗</span> by{" "}
    <span className="font-semibold text-white hover:text-blue-400 transition-colors cursor-pointer">
      Ankit Ganvir
    </span>
  </p>

  <p className="text-xs text-gray-500">
    © {new Date().getFullYear()} All rights reserved.
  </p>
</div>
    </div>
  )
}

export default AppLayout