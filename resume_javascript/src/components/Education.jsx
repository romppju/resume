import data from '../../data'
import { useRef } from 'react'

import useIsVisible from '../hooks/useIsVisible'

const Degree = ({ degree }) => {
  const ref = useRef()
  const isVisible = useIsVisible(ref)

  return (
    <div
      ref={ref}
      className={`p-2 mb-10 text-gray-700 transition-opacity ease-in duration-700
    ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <p className='text-2xl py-1 font-bold text-gray-700'>{degree.degree}</p>
      <p className='text-xl py-1  text-gray-700'>{degree.university}</p>
      <p className='py-1  text-gray-700'>
        {degree.startYear} - {degree.endYear ? degree.endYear : ''}
      </p>
      {degree.major ? (
        <p className='text-sm text-gray-700 pt-1 pb-2'>
          Major: {degree.major}, Minor: {degree.minor}
        </p>
      ) : null}
    </div>
  )
}

const Education = ({ eduRef }) => {
  const ref = useRef()
  const isVisible = useIsVisible(ref)

  const degrees = data.education

  return (
    <div
      id='education'
      ref={eduRef}
      className='w-full bg-white shadow-md border-gray-100
      border-2 p-2 mb-10'
    >
      <div className='flex flex-col lg:flex-row'>
        <h1
          ref={ref}
          className={`text-5xl md:text-8xl p-2 font-bold text-gray-700 md:w-1/2 mb-10
            transition-opacity ease-in duration-700
            ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          Education
        </h1>
        <div className='lg:w-1/3'>
          {degrees.map((degree) => (
            <div key={degree.id}>
              <Degree degree={degree} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Education
