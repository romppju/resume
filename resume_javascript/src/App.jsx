import AboutMe from './components/AboutMe'
import Education from './components/Education'
import Nav from './components/Nav'
import WorkExperience from './components/WorkExpericente'
import Skills from './components/Skills'

// bg-fixed bg-parallax bg-cover

function App() {
  return (
    <div className='bg-gradient-to-t from-slate-800 to-slate-700 w-full h-full'>
      <Nav />
      <AboutMe />
      <WorkExperience />
      <Education />
      <Skills />
    </div>
  )
}

export default App
