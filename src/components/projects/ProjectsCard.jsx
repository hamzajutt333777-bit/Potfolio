
const ProjectsCard = (props) => {

  return (
    <>
      <div className='relative group lg:w-1/2 w-full rounded-none hover:rounded-4xl overflow-hidden transition-all h-full'>
        <img className='h-full w-full object-cover' src={props.image1} alt="" />
        <div className='opacity-0 transition-all group-hover:opacity-100 absolute flex items-center justify-center h-full w-full top-0 left-0 bg-black/30'>
          <h2 className='uppercase text-3xl text-center font-semibold border-1  px-2 rounded-full'>Vior le projets</h2>
        </div>
        <div className='h-[2vw] w-full bg-red-500'></div>
      </div>
      <div className='relative group lg:w-1/2 w-full rounded-none hover:rounded-4xl overflow-hidden transition-all h-full'>
        <img className='h-full w-full object-cover' src={props.image2} alt="" />
        <div className='opacity-0 transition-all group-hover:opacity-100 absolute flex items-center justify-center h-full w-full top-0 left-0 bg-black/30'>
          <h2 className='uppercase text-3xl text-center font-semibold border-1  px-2 rounded-full'>Vior le projets</h2>
        </div>
      </div>
    </>
  )
}

export default ProjectsCard