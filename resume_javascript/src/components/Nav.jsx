import { useState } from 'react'
import YouTubeIcon from '../assets/icons/youtube_social_icon_red.png'
import LinkedInIcon from '../assets/icons/LI-In-Bug.png'

const NavLinks = ({ headerRef, workRef, eduRef, skillsRef }) => {
  const style =
    'text-xl font-bold text-gray-700 mx-5 hover:-translate-y-0.5 hover:scale-105 duration-500'

  const handleScroll = (e, ref) => {
    e.preventDefault()
    if (ref.current && headerRef.current) {
      const headerHeight = headerRef.current.offsetHeight
      const targetPosition = ref.current.offsetTop - headerHeight

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <>
      <li className={style}>
        <a href='#work' onClick={(e) => handleScroll(e, workRef)}>
          Work Experience
        </a>
      </li>
      <li className={style}>
        <a href='#education' onClick={(e) => handleScroll(e, eduRef)}>
          Education
        </a>
      </li>
      <li className={style}>
        <a href='#skills' onClick={(e) => handleScroll(e, skillsRef)}>
          Skills
        </a>
      </li>
      <li className='mx-5 py-2 pl-1 md:py-0 md:pl-0'>
        <a
          href='https://www.linkedin.com/in/jromppainen/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={LinkedInIcon} alt='LinkedIn icon' className='h-6'></img>
        </a>
      </li>
      <li className='mx-5 py-2 md:py-0'>
        <a
          href='https://www.youtube.com/watch?v=-IOtI8w8wMM'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={YouTubeIcon} alt='Youtube icon' className='h-6'></img>
        </a>
      </li>
    </>
  )
}

const Nav = ({ workRef, headerRef, eduRef, skillsRef }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className='fixed w-full z-40'>
      <header
        id='header'
        ref={headerRef}
        className='bg-white top-0 flex-wrap z-[20] mx-auto flex
        w-full shadow-md'
      >
        <nav className='flex w-full justify-end'>
          <ul className='hidden md:flex py-5 px-10 '>
            <NavLinks
              workRef={workRef}
              eduRef={eduRef}
              skillsRef={skillsRef}
              headerRef={headerRef}
            />
          </ul>
          <div
            className='md:hidden py-5 px-5 text-xl hover:-translate-y-0.5
          duration-500'
          >
            <button onClick={() => setOpen(!open)}>
              <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
            </button>
          </div>
        </nav>
        <ul
          className={
            open
              ? 'md:hidden flex basis-full flex-col items-center\
               pb-5 ease-out duration-500'
              : 'fixed top-[-100%]'
          }
        >
          <NavLinks
            workRef={workRef}
            eduRef={eduRef}
            skillsRef={skillsRef}
            headerRef={headerRef}
          />
        </ul>
      </header>
    </div>
  )
}

export default Nav
