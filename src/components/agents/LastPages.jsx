
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { ScrollTrigger } from 'gsap/all'

const LastPages = () => {
  const firstPageRef = useRef(null)
  const secondPageRef = useRef(null)
  const thirdPageRef = useRef(null)
    const forthPageRef = useRef(null)

  const maindivRef = useRef(null)

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {
    gsap.to(maindivRef.current, {
      scrollTrigger: {
        trigger: maindivRef.current,
        pin: true,
        start: 'top -20%',
        // markers:true,
        end: 'top -222%',
      },
    })
    gsap.to(firstPageRef.current, {
      scrollTrigger: {
        trigger: firstPageRef.current,
        pin: true,
        start: 'top 20%',
        // markers:true,
        end: 'top -101.5%',
      },
    })
    gsap.to(secondPageRef.current, {
      scrollTrigger: {
        trigger: secondPageRef.current,
        pin: true,
        start: 'top 40%',
        // markers:true,
        end: 'top -21%',
      },
    })
    gsap.to(thirdPageRef.current, {
      scrollTrigger: {
        trigger: thirdPageRef.current,
        pin: true,
        start: 'top 60%',
        // markers: true,
        end: 'top 39%',
      },
    })
  })

  return (
    <>
      {/* The heading is now INSIDE the main container */}
      <div  className='relative pages h-[160vw] w-full bg- bg-neutral- '>
        {/* Heading with 10vw space above */}
        <div ref={maindivRef} className='w-full h-[59.2vw] bg-blue-'>
          <h1 className='text-[10vw] font-medium translate-y-[7vw] uppercase tracking-tighter translate-x-[5vw]'>Skills</h1>
          <div className='h-[39.5vw] w-[20vw] bg-blue- translate-y-[5.1vw]'>
            <div className='h-1/4 w-full bg-blue- flex items-center justify-center z-[99]'>
              <img className='h-[8vw] w-[9vw] z-[990]' src="/react.webp" alt="" />
            </div>
            <div className='h-1/4 w-full bg-blue- flex items-center justify-center'>
              <img className='h-[8vw] w-[11vw] ' src="/nextjs.webp" alt="" />
            </div>
            <div className='h-1/4 w-full bg-blue- flex items-center justify-center'>
              <img className='h-[6vw] w-[7vw] ' src="/typescript.webp" alt="" />
            </div>
            <div className='h-1/4 w-full bg-blue- flex items-center justify-center'>
              <img className='h-[8vw] w-[9vw] ' src="/blender.webp" alt="" />
            </div>
          </div>
        </div>
        

        {/* Pages – tops adjusted to start after heading + extra space */}
        <div
          ref={firstPageRef}
          className='absolute font-mono bg-red- top-[60vw] left-[20vw] z-10 flex items-center justify-start overflow-hidden firstpage w-[80vw] h-[10vw] group'
        >
          <h1 className='text-[2vw]'>I build fast, interactive UIs using React's component architecture and smooth animations.</h1>
        </div>

        <div
          ref={secondPageRef}
          className='absolute font-mono bg-red- top-[100vw] left-[20vw] z-20 flex items-center justify-start overflow-hidden secondpage w-[80vw] h-[10vw] group '
        >
          <h1 className='text-[2vw]'>I develop full-stack web apps with Next.js server-side rendering and seamless routing.</h1>
        </div>

        <div
          ref={thirdPageRef}
          className='absolute font-mono bg-red- top-[130vw] left-[20vw] z-30 flex items-center justify-start overflow-hidden thirdpage w-[80vw] h-[10vw] group '
        >
          <h1 className='text-[2vw] '>I write type-safe, maintainable code with TypeScript to ensure early error prevention.</h1>
        </div>

        <div
          ref={forthPageRef}
          className=' absolute font-mono bg-red- top-[150vw] left-[20vw] z-30 flex items-center justify-start overflow-hidden thirdpage w-[80vw] h-[10vw] group '
        >
          <h1 className='text-[2vw]'>I craft striking 3D animations and product visualizations that enhance brand storytelling.</h1>
        </div>

        {/* Footer – top adjusted as well */}
        {/* <div className='absolute top-[143.5vw] z-40 left-0 h-screen overflow-hidden w-full bg-red-'>
          <div className='h-[42.85vw] w-screen bg-pink-'></div>
          <Footer />
        </div> */}
      </div>
    </>
  )
}

export default LastPages

{/* <h1  className='text-[10vw] leading-[9vw] tracking-tight translate-x-[5vw] text-black uppercase font-semibold px-[5vw] py-[5vw] translate-y-[10vw] font-mono'
  style={{ wordSpacing: '-0.34em' }}>
    A<span className='text-[7vw] font-bold'>rea</span> O<span className='text-[7vw] font-bold'>f</span> E<span className='text-[7vw] font-bold'>xpertise.</span>
</h1> */}