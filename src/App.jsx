import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import VideoPage from './pages/VideoPage'
import NewsPage from './pages/NewsPage'
import NewsArticle from './pages/NewsArticle'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#07102a] text-gray-800 dark:text-gray-100">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video" element={<VideoPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:id" element={<NewsArticle />} />
          {/* при желании можно добавить 404 */}
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
