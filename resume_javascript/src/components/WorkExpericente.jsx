import data from '../../data'
import { useRef } from 'react'

import useIsVisible from '../hooks/useIsVisible'

const Work = ({ job }) => {
  const ref = useRef()
  const isVisible = useIsVisible(ref)

  return (
    <div
      ref={ref}
      className={`p-2 mb-10 text-gray-700 transition-opacity ease-in duration-700
        ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <p className='text-2xl py-1 font-bold text-gray-700'>{job.title}</p>
      <p className='text-xl py-1  text-gray-700'>{job.employer}</p>
      <p className='py-1 text-gray-700'>
        {job.startYear} - {job.endYear}
      </p>
      <p className='text-sm text-gray-700 pt-1 pb-2'>{job.description}</p>
    </div>
  )
}

const WorkExperience = ({ workRef }) => {
  const ref = useRef()
  const isVisible = useIsVisible(ref)

  const jobs = data.workExperience

  return (
    <div
      id='work'
      ref={workRef}
      className='w-full bg-white shadow-md border-gray-100
      border-2 p-2 mb-10'
    >
      <div className='flex flex-col lg:flex-row'>
        <h1
          ref={ref}
          className={`text-5xl md:text-8xl p-2 font-bold text-gray-700 md:w-1/2 mb-10
          transition-opacity ease-in duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Work
          <br />
          Experience
        </h1>

        <div className='lg:w-1/3'>
          {jobs.map((job) => (
            <div key={job.id}>
              <Work job={job} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WorkExperience
