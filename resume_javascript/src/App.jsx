import AboutMe from './components/AboutMe'
import Education from './components/Education'
import Nav from './components/Nav'
import WorkExperience from './components/WorkExpericente'
import Skills from './components/Skills'
import { useRef } from 'react'

// bg-local bg-parallax bg-cover bg-center

function App() {
  const workRef = useRef()
  const eduRef = useRef()
  const skillsRef = useRef()
  const headerRef = useRef()

  return (
    <div className='bg-gradient-to-t from-slate-700 to-slate-600 w-full h-full'>
      <Nav
        headerRef={headerRef}
        workRef={workRef}
        eduRef={eduRef}
        skillsRef={skillsRef}
      />
      <AboutMe />
      <WorkExperience workRef={workRef} />
      <Education eduRef={eduRef} />
      <Skills skillsRef={skillsRef} />
    </div>
  )
}

export default App
