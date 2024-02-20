import data from '../../data'

const Degree = ({ degree }) => {
  return (
    <div className='p-2  text-gray-700'>
      <p className='text-2xl py-1  text-gray-700'>{degree.degree}</p>
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

const Education = () => {
  const degrees = data.education

  return (
    <div
      id='education'
      className='flex justify-center w-full bg-white shadow-md border-gray-100
      border-2 p-2 mb-10'
    >
      <div className='w-[768px]'>
        <h1 className='text-3xl p-2 font-bold text-gray-700'>Education</h1>
        {degrees.map((degree) => (
          <div key={degree.id}>
            <Degree degree={degree} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Education
