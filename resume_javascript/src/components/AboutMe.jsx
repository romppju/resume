import mountainsImage from '../assets/icons/Mountains.jpg'

const AboutMe = () => {
  return (
    <div
      className='pt-80 bg-cover md:bg-center bg-right'
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0)), url(${mountainsImage})`,
      }}
    >
      <div className='flex flex-col lg:w-1/3'>
        <h1 className='text-5xl md:text-8xl font-bold p-5 text-white'>
          Juho
          <br />
          Romppainen
        </h1>
        <p className='text-white text-m font-bold p-5'>
          Business master's graduate with a digital marketing background,
          currently studying computer science for a holistic skill set.
        </p>
      </div>
    </div>
  )
}

export default AboutMe
