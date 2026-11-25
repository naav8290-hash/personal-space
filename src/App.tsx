import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollManager from './components/layout/ScrollManager'
import HomePage from './pages/HomePage'
import JournalIndexPage from './pages/JournalIndexPage'
import JournalArticlePage from './pages/JournalArticlePage'
import StoryIndexPage from './pages/StoryIndexPage'
import StoryReaderPage from './pages/StoryReaderPage'
import StudioPage from './pages/StudioPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  const location = useLocation()

  return (
    <div className="site">
      <a className="skip-link" href="#main">
        Lewati ke konten
      </a>
      <ScrollManager />
      <Navbar />
      <div className="page-transition" key={location.pathname}>
        <main id="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/journal" element={<JournalIndexPage />} />
            <Route path="/journal/:slug" element={<JournalArticlePage />} />
            <Route path="/stories" element={<StoryIndexPage />} />
            <Route path="/stories/:slug" element={<StoryReaderPage />} />
            <Route path="/studio" element={<StudioPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  )
}
