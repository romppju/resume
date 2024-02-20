import { useState } from 'react'

const NavLinks = () => {
  const style =
    'text-xl text-gray-800 px-5 hover:-translate-y-0.5\
    hover:scale-105 duration-500'

  return (
    <>
      <li
        className={style}
        onClick={(e) => {
          e.preventDefault()
          window.scrollTo({
            top:
              document.querySelector('#work').offsetTop -
              document.querySelector('#header').offsetHeight,
            behavior: 'smooth',
          })
        }}
      >
        Work Experience
      </li>
      <li
        className={style}
        onClick={(e) => {
          e.preventDefault()
          window.scrollTo({
            top:
              document.querySelector('#education').offsetTop -
              document.querySelector('#header').offsetHeight,
            behavior: 'smooth',
          })
        }}
      >
        Education
      </li>
      <li
        className={style}
        onClick={(e) => {
          e.preventDefault()
          window.scrollTo({
            top:
              document.querySelector('#skills').offsetTop -
              document.querySelector('#header').offsetHeight,
            behavior: 'smooth',
          })
        }}
      >
        Skills
      </li>
    </>
  )
}

const Nav = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className='fixed w-full'>
      <header
        id='header'
        className='bg-white top-0 flex-wrap z-[20] mx-auto flex
        w-full shadow-md'
      >
        <nav className='flex w-full justify-end'>
          <ul className='hidden md:flex py-5 px-10 '>
            <NavLinks />
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
          <NavLinks />
        </ul>
      </header>
    </div>
  )
}

export default Nav
