
import { useRef } from 'react'

const ANames = () => {

  const namesRef = useRef(null)
  const namesImageRef = useRef(null)

  return (
    <div>
        <div className=' relative min-h-screen w-full bg-black '>
        <div ref={namesRef} className='names-div translate-y-[9vw]'>
          <div ref={namesImageRef} className='names-image-div absolute hidden z-10 top-[25vw] left-[20vw] w-[20vw] h-[30vw] bg-red-500 rounded-4xl'></div>
          <div className='relative flex items-center group justify-between px-3 border-t-2 border-white overflow-hidden'>
            <div className='absolute -ml-[1vw] h-full w-full bg-[#DEFD50] translate-y-[-100%] group-hover:translate-y-[0] transition-all'></div>
            <h1 className='-mt-[2vw] uppercase text-white text-[1.2vw] font-semibold '>something</h1>
            <h1 className='uppercase text-white text-[3vw] font-semibold '>write something</h1>
          </div>
          <div className='relative flex items-center group justify-between px-3 border-t-2 border-white overflow-hidden'>
            <div className='absolute -ml-[1vw] h-full w-full bg-[#DEFD50] translate-y-[-100%] group-hover:translate-y-[0] transition-all'></div>
            <h1 className='-mt-[2vw] uppercase text-white text-[1.2vw] font-semibold '>something</h1>
            <h1 className='uppercase text-white text-[3vw] font-semibold '>write something</h1>
          </div>
          <div className='relative flex items-center group justify-between px-3 border-t-2 border-white overflow-hidden'>
            <div className='absolute -ml-[1vw] h-full w-full bg-[#DEFD50] translate-y-[-100%] group-hover:translate-y-[0] transition-all'></div>
            <h1 className='-mt-[2vw] uppercase text-white text-[1.2vw] font-semibold '>something</h1>
            <h1 className='uppercase text-white text-[3vw] font-semibold '>write something</h1>
          </div>
          <div className='relative flex items-center group justify-between px-3 border-t-2 border-white overflow-hidden'>
            <div className='absolute -ml-[1vw] h-full w-full bg-[#DEFD50] translate-y-[-100%] group-hover:translate-y-[0] transition-all'></div>
            <h1 className='-mt-[2vw] uppercase text-white text-[1.2vw] font-semibold '>something</h1>
            <h1 className='uppercase text-white text-[3vw] font-semibold '>write something</h1>
          </div>
          <div className='relative flex items-center group justify-between px-3 border-t-2 border-white overflow-hidden'>
            <div className='absolute -ml-[1vw] h-full w-full bg-[#DEFD50] translate-y-[-100%] group-hover:translate-y-[0] transition-all'></div>
            <h1 className='-mt-[2vw] uppercase text-white text-[1.2vw] font-semibold '>something</h1>
            <h1 className='uppercase text-white text-[3vw] font-semibold '>write something</h1>
          </div>
          <div className='relative flex items-center group justify-between px-3 border-t-2 border-white overflow-hidden'>
            <div className='absolute -ml-[1vw] h-full w-full bg-[#DEFD50] translate-y-[-100%] group-hover:translate-y-[0] transition-all'></div>
            <h1 className='-mt-[2vw] uppercase text-white text-[1.2vw] font-semibold '>something</h1>
            <h1 className='uppercase text-white text-[3vw] font-semibold '>write something</h1>
          </div>
          <div className='relative flex items-center group justify-between px-3 border-y-2 border-white overflow-hidden'>
            <div className='absolute -ml-[1vw] h-full w-full bg-[#DEFD50] translate-y-[-100%] group-hover:translate-y-[0] transition-all'></div>
            <h1 className='-mt-[2vw] uppercase text-white text-[1.2vw] font-semibold '>something</h1>
            <h1 className='uppercase text-white text-[3vw] font-semibold '>write something</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ANames