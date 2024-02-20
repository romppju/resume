import data from '../../data'

const Work = ({ job }) => {
  return (
    <div className='p-2  text-gray-700'>
      <p className='text-2xl py-1  text-gray-700'>{job.title}</p>
      <p className='text-xl py-1  text-gray-700'>{job.employer}</p>
      <p className='py-1  text-gray-700'>
        {job.startYear} - {job.endYear}
      </p>
      <p className='text-sm text-gray-700 pt-1 pb-2'>{job.description}</p>
    </div>
  )
}

const WorkExperience = () => {
  const jobs = data.workExperience

  return (
    <div
      id='work'
      className='flex justify-center w-full bg-white shadow-md border-gray-100
      border-2 p-2 mb-10'
    >
      <div className='w-[768px]'>
        <h1 className='text-3xl p-2 font-bold text-gray-700'>
          Work Experience
        </h1>
        {jobs.map((job) => (
          <div key={job.id}>
            <Work job={job} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default WorkExperience
