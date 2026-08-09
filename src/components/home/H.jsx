import Video from './Video'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'



const H = (props) => {

  gsap.registerPlugin(ScrollTrigger)

  return (
    <div className='relative w-full h-screen bg-black flex flex-col leading-25 overflow-hidden text-white'>
        
        <div className='videodiv fixed h-screen w-full'>
            <img className='h-full w-full object-cover translate-x-[-30vw]' src="../../../public/instaPotfolioPic.jpg" alt="" />
        </div>
        <div className='homediv relative h-full w-full pt-[5vw] font-medium '>
            <div className='uppercase w-full h-[25vw] text-left bg-red- translate-x-[29vw] -tracking-[0.6vw] translate-y-[2vw]'>
                <div className='text-[8vw]'>
                    hi there !
                </div>
                <div className='uppercase flex items-center justify-start text-[8vw]'>
                    I'm
                    <div className='w-[12vw] translate-x-[0.5vw] translate-y-[0.5vw] h-[6vw] rounded-full border-2 border-white mt-3 overflow-hidden'><Video /></div>
                    
                </div>
                <div className='uppercase text-[8vw]'>hamza khalid</div>
            </div>
            <div className='w-full h-[25vw] flex flex-col items-center justify-between '>
                <p className='h-[15vw] w-[30vw] translate-x-[16vw] text-[1.2vw] leading-5 text-end translate-y-[1vw]'>
                  <span className='text-[1.5vw] uppercase'>full stack developer</span>
                  <br />
                  I build modern, responsive, and scalable web applications with a passion for clean code and thoughtful design. 
                  I turn complex ideas into simple, elegant solutions that work seamlessly across every device. 
                  Let's bring your vision to life.
                </p>
                <div className='h-[8vw] w-[70vw] flex items-center justify-center gap-5 mb-[8vw] bg-red-'>
                    <div onClick={() => {props.setSelectedPage('/P'); props.setStairsTrigger(!(props.stairsTrigger))}} className='-translate-y-[1vw] flex items-center justify-center font-semibold w-[15vw] h-[5vw] hover:text-[#D3FD50] hover:border-[#D3FD50] uppercase border-2 border-white rounded-full'>
                        <div className='uppercase text-[4w] font5mono'>Projects</div>
                    </div>
                    <div onClick={() => {props.setSelectedPage('/A'); props.setStairsTrigger(!(props.stairsTrigger))}} className='-translate-y-[1vw] flex items-center justify-center font-semibold w-[15vw] h-[5vw] hover:text-[#D3FD50] hover:border-[#D3FD50] uppercase border-2 border-white rounded-full'>
                        <div className='uppercase text-[4w] font5mono'>about</div>
                    </div>
                    <div onClick={() => {props.setSelectedPage('/C'); props.setStairsTrigger(!(props.stairsTrigger))}} className='-translate-y-[1vw] flex items-center justify-center font-semibold w-[15vw] h-[5vw] hover:text-[#D3FD50] hover:border-[#D3FD50] uppercase border-2 border-white rounded-full'>
                        <div className='uppercase text-[4w] font5mono'>contact</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}


export default H

