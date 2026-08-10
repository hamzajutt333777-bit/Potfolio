
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { ScrollTrigger } from 'gsap/all'

const FullScreenNav = () => {

  const sectionRef = useRef(null)
  const expertiseRef = useRef(null)

  // const imgRef = useRef(null)
  // const imgRef2 = useRef(null)
  // const imgRef3 = useRef(null)
  // const imgRef4 = useRef(null)

  const skillDiv = useRef(null)
  const skillDiv2 = useRef(null)
  const skillDiv3 = useRef(null)
  const skillDiv4 = useRef(null)

  const skillDetail = useRef(null)
  const skillDetail2 = useRef(null)
  const skillDetail3 = useRef(null)
  const skillDetail4 = useRef(null)

  const skillsDetailsRef = useRef(null)

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {
    // const lastImage = imgRef4.current   // the last image

    // const pinConfig = (trigger, isLast = false) => ({
    //   pin: true,
    //   trigger: trigger,
    //   start: 'top top',
    //   endTrigger: lastImage,              // all end when the last image reaches the top
    //   // markers:true,
    //   end: isLast ? 'top+=1px top' : 'top top', // tiny offset for the last image itself
    // })

    const skillDetailFunc = (trigger, ele) => ({
      pin:ele,
      trigger: trigger,
      start: 'top top',
      end: 'top -100%',
      scrub: 0.2
    })

    // gsap.to(expertiseRef.current, { scrollTrigger: {pin:expertiseRef.current, trigger: expertiseRef.current, start: 'top -10%', end:'top -250%', scrub:true, markers:true}})    

    // gsap.to(imgRef.current, { scrollTrigger: pinConfig(imgRef.current) })
    // gsap.to(imgRef2.current, { scrollTrigger: pinConfig(imgRef2.current) })
    // gsap.to(imgRef3.current, { scrollTrigger: pinConfig(imgRef3.current) })
    // gsap.to(imgRef4.current, { scrollTrigger: pinConfig(imgRef4.current, true) })

    gsap.to(skillDetail.current, {opacity:0, scrollTrigger: skillDetailFunc(skillDiv.current, skillDetail.current)})
    gsap.to(skillDetail2.current, {opacity:0, scrollTrigger: skillDetailFunc(skillDiv2.current, skillDetail2.current)})
    gsap.to(skillDetail3.current, {opacity:0, scrollTrigger: skillDetailFunc(skillDiv3.current, skillDetail3.current)})
    gsap.to(skillDetail4.current, {opacity:0, scrollTrigger: skillDetailFunc(skillDiv4.current, skillDetail4.current)})

    gsap.to(skillsDetailsRef.current, { scrollTrigger: {trigger:skillsDetailsRef.current, pin:true, markers:true, start: 'top top', end: 'top -285%'}})
  })

  return (
    <div ref={sectionRef} className='fsn min-h-screen relative transition-all w-full pt-4 bg-blue-'>
      
      <div ref={expertiseRef} className=' h-[20vw] w-full bg-red- translate-y-[15vw]'>
        <h1  className='text-[8vw] leading-[9vw]  tracking-tight translate-x-[5vw] text-black uppercase font-mono px-[5vw] py-[5vw] translate-y-[6vw] font-bold'
          style={{ wordSpacing: '-0.34em' }}>
            A<span className='text-[5vw] font-bold'>rea</span> O<span className='text-[5vw] font-bold'>f</span> E<span className='text-[5vw] font- font-bold'>xpertise</span>
        </h1>
      </div>

      <div ref={skillDiv} className='relative section w-full h-[47.5vw] '>
        {/* <div ref={imgRef} className='absolute bg-red- image1 h-full w-[60vw] left-[85%] top-[50%] -translate-y-[50%] -translate-x-[50%] rounded-4xl overflow-hidden'>
          <img className='h-[40vw] w-[40vw] object-center translate-x-[2vw] translate-y-[5vw]' src="/frontend.webp" alt="" />
        </div> */}
        <div ref={skillDetail} className='translate-x-[25vw] h-[40vw] w-[70vw] bg-blue-30 flex flex-col justify-center translate-y-[1vw] p-[4vw] text-black'>
          <h2 className='text-[3vw] font-mono font-bold mb-[2vw]'>Frontend Development</h2>
          <p className='text-[1.5vw] leading-snug font-mono'>I craft fast, accessible, and visually refined interfaces using React. Every component is designed for clarity, then enhanced with meaningful motion — subtle micro‑interactions, scroll‑driven animations, and seamless page transitions — to create a delightful user experience that feels both intuitive and alive.</p>
        </div>
      </div>

      <div ref={skillDiv2} className='relative section2 w-full h-[47.5vw] bg-transparent'>
        {/* <div ref={imgRef2} className='absolute bg-white image1 h-full w-[60vw] left-[85%] top-[50%] -translate-y-[50%] -translate-x-[50%] rounded-4xl overflow-hidden'>
          <img className='h-[40vw] w-[40vw] object-cover translate-y-[5vw]' src="/b.webp" alt="" />
        </div> */}
        <div ref={skillDetail2} className='translate-x-[25vw] h-[40vw] w-[70vw] bg-blue-30 flex flex-col justify-center translate-y-[-1vw] p-[4vw] text-black '>
          <h2 className='text-[3vw] font-bold font-mono mb-[2vw]'>Backend Engineering</h2>
          <p className='text-[1.5vw] leading-snug font-mono'>I build robust, type‑safe server architectures with Next.js and TypeScript. From API routes to database integrations, every piece is structured for performance, security, and maintainability. The result is a seamless full‑stack application where logic is clean, predictable, and scalable.</p>
        </div>
      </div>

      <div ref={skillDiv3} className='relative section3 w-full h-[47.5vw] bg-transparent'>
        {/* <div ref={imgRef3} className='absolute image1 h-full w-[60vw] left-[85%] top-[50%] -translate-y-[50%] -translate-x-[50%] rounded-4xl overflow-hidden'>
          <img className='h-[45vw] w-[40vw] translate-y-[vw] object-cover' src="/uiux.webp" alt="" />
        </div> */}
        <div ref={skillDetail3} className='translate-x-[25vw] h-[40vw] w-[70vw] bg-blue-30 flex flex-col justify-center translate-y-[-1vw] p-[4vw] text-black'>
          <h2 className='text-[3vw] font-bold font-mono mb-[2vw]'>UI/UX Design</h2>
          <p className='text-[1.5vw] leading-snug font-mono'>I design interfaces that balance modern aesthetics with real usability. Through research‑driven wireframes and polished visual design, I turn complex ideas into clear, engaging user journeys. Every layout, color, and interaction is intentional — making the product not only beautiful but effortlessly functional.</p>
        </div>
      </div>

      <div ref={skillDiv4} className='relative section4 w-full h-[47.5vw] bg-transparent'>
        {/* <div ref={imgRef4} className='absolute bg-white image1 h-full w-[60vw] left-[85%] top-[50%] -translate-y-[50%] -translate-x-[50%] rounded-4xl overflow-hidden'>
          <img className='h-[50vw] w-[40vw] object-center translate-x-[5vw]' src="/animation.webp" alt="" />
        </div> */}
        <div ref={skillDetail4} className='translate-x-[25vw] h-[40vw] w-[70vw] bg-blue-30 flex flex-col justify-center translate-y-[-1vw] p-[4vw] text-black'>
          <h2 className='text-[3vw] font-bold mb-[2vw] font-mono'>3D & Motion</h2>
          <p className='text-[1.5vw] leading-snug font-mono'>I create eye‑catching 3D animations and product visuals using Blender. From dynamic ad creatives to immersive web‑ready 3D content, I bring brands to life with motion that captivates, tells a story, and drives engagement — always optimized for performance on the web.</p>
        </div>
      </div>
    </div>
  )
}

export default FullScreenNav