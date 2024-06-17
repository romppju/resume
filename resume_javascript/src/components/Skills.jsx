import { useRef } from 'react'

import useIsVisible from '../hooks/useIsVisible'

const Skill = ({ name, width }) => {
  const ref = useRef()
  const isVisible = useIsVisible(ref)

  return (
    <div
      ref={ref}
      className={`p-2 text-2xl py-5  text-gray-700 transition-opacity ease-in duration-700
        ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {name}
      <div className='py-2'>
        <div
          className='w-full bg-gray-300 rounded-full h-2.5
         dark:bg-gray-700'
        >
          <div className={`bg-blue-600 h-full rounded-full ${width}`}></div>
        </div>
      </div>
    </div>
  )
}

const Skills = ({ skillsRef }) => {
  const ref = useRef()
  const isVisible = useIsVisible(ref)

  return (
    <div
      id='skills'
      ref={skillsRef}
      className='flex flex-col w-full bg-white shadow-md border-gray-100
      border-2 p-2 pb-32'
    >
      <h1
        ref={ref}
        className={`text-5xl md:text-8xl p-2 font-bold mb-10 text-gray-700 transition-opacity ease-in duration-700
        ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        Skills
      </h1>
      <div className='flex flex-row justify-center'>
        <div className='w-[768px]'>
          <div className='grid grid-cols-2'>
            <Skill name='Python' width='w-3/4' />
            <Skill name='TypeScript' width='w-1/2' />
            <Skill name='JavaScript' width='w-3/4' />
            <Skill name='React' width='w-3/4' />
            <Skill name='C++' width='w-2/3' />
            <Skill name='Node.js' width='w-3/4' />
            <Skill name='Java' width='w-1/2' />
            <Skill name='Docker' width='w-1/2' />
            <Skill name='SQL' width='w-3/4' />
            <Skill name='Git' width='w-3/4' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
