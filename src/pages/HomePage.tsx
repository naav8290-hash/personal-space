import Hero from '../components/home/Hero'
import About from '../components/home/About'
import StoriesPreview from '../components/home/StoriesPreview'
import Cinema from '../components/home/Cinema'
import Interests from '../components/home/Interests'
import Journey from '../components/home/Journey'
import Gallery from '../components/home/Gallery'
import JournalPreview from '../components/home/JournalPreview'
import Favorites from '../components/home/Favorites'
import Currently from '../components/home/Currently'
import Contact from '../components/home/Contact'
import PageMeta from '../components/ui/PageMeta'

export default function HomePage() {
  return (
    <>
      <PageMeta
        title="VINA — Still Becoming"
        description="A personal space by Vina Nuraini — cerita, pikiran, penemuan kecil, dan segala hal yang belum menjadi."
      />
      <Hero />
      <About />
      <StoriesPreview />
      <Cinema />
      <Interests />
      <Journey />
      <Gallery />
      <JournalPreview />
      <Favorites />
      <Currently />
      <Contact />
    </>
  )
}
