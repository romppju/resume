import picture from '../../pictureSmall.jpg'

const AboutMe = () => {
  return (
    <div className='flex w-full justify-center pt-10'>
      <div
        className='flex flex-col center- md:max-w-96 w-2/3 justify-center
      my-10 text-center'
      >
        <div className='flex justify-center'>
          <img
            className='max-w-44 min-w-20 aspect-square object-cover object-top
            m-5 rounded-full border-solid border-2 border-gray-300 shadow-lg'
            src={picture}
            alt='picture'
          />
        </div>
        <h1 className='text-3xl font-bold my-5 text-white'>Juho Romppainen</h1>
        <p className='text-gray-200'>
          Business master's graduate with a digital marketing background,
          currently studying computer science for a holistic skill set.
        </p>
      </div>
    </div>
  )
}

export default AboutMe
