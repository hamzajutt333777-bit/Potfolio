import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import LastPages from './LastPages'
import DiffNav from '../navbar/DiffNav'

// 1. ALWAYS register outside the component
gsap.registerPlugin(ScrollTrigger);

const AgenceSP = (props) => {
  const container = useRef(null);
  const videoRef = useRef(null);
  const firstVideo = useRef(null);
  const secondVideo = useRef(null);
  const textDiv = useRef(null);
  
  const textarr = ['on vous', 'voit', 'conne', 'personna'];

  const handleMouseEnter = () => videoRef.current?.play();
  const handleMouseLeave = () => videoRef.current?.pause();

  useGSAP(() => {
    // 2. Create a Context-safe Timeline
    const tl = gsap.timeline();

    // Text Reveal - Using a timeline ensures it doesn't conflict with ScrollTrigger init
    tl.from('.textarrayh1', {
      y: -100,             // Move from bottom up for a more natural feel
      rotateX: -30,       // Adds a slight 3D "swing"
      opacity: 0,
      duration: 1,
      ease: 'power4.out', 
      stagger: 0.1,
    });

    // 3. Pinning Logic with 'anticipatePin' to prevent the "stop/jump"
    ScrollTrigger.create({
      trigger: textDiv.current,
      pin: true,
      scrub:true,
      start: 'top 0%',
      end: 'top -215%',
      anticipatePin: 1, // This smoothens the transition when the pin starts
    });

    ScrollTrigger.create({
      trigger: firstVideo.current,
      pin: true,
      scrub:true,
      start: 'top 0%',
      end: 'top -104.5%',
      anticipatePin: 1,
    });

  }, { scope: container }); // Scoping prevents GSAP from searching the whole DOM

  return (
    <div ref={container} className='min-h-screen py-[1vw] w-screen bg-white '>
      <div className='absolute top-0 left-0 h-[20vw] w-full z-[50]'>
        <DiffNav setSelectedPage={props.setSelectedPage} stairsTrigger={props.stairsTrigger} setStairsTrigger={props.setStairsTrigger} setNavValue={props.setNavValue} scrollVar={props.scrollVar} setScrollVar={props.setScrollVar}/>
      </div>
      <div className='h-[55vw] w-full overflow-hidden flex flex-col gap-[1vw] text-[10vw] pt-[12vw] pl-[36vw] uppercase font-semibold tracking-tighter leading-[7vw] text-black'>
        {textarr.map((item, index) => (
          <div key={index} className='h-[10vw] w-[45vw] overflow-hidden'>
            
            <h1 className='textarrayh1 block will-change-transform'>{item}</h1>
          </div>
        ))}
        <div className='uppercase border-black border-[2px] h-[7vw] w-[16vw] pb-[10px] text-[7vw] rounded-full flex items-center justify-center cursor-pointer hover:bg-black hover:text-white transition-colors duration-300'>
          lire
        </div>
      </div>
      <div className='relative min-h-screen w-full pb-[18vw]'>
        <div className='uppercase font-semibold z-10 text-[10vw] leading-[9vw] top-[8vw] text-black absolute'>champagne<br/>2020</div>
        <div className='uppercase font-semibold z-10 text-[1.5vw] leading-[2vw] top-[28vw] text-black absolute'>1<br/>2</div>
        <div className='uppercase font-semibold z-10 text-[1.5vw] leading-[2vw] top-[28vw] left-[12vw] text-black absolute'>publicite<br/>strategie</div>
        <div className='h-[70vw] w-[60vw] rounded-[6vw] ml-[40vw] overflow-hidden'>
          <img className='h-full w-full object-cover' src="../../../public/111.jpg" alt="" />
        </div>
        <h1 className='text-[4.5vw] pl-[11vw] font-semibold text-black tracking-tight leading-[4.5vw]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chez Opto-Réseau, on<br/>vous voit comme personne. Derrière un<br/>visage, c'est toute une personnalité,<br/>toute une vie qu'on devine. Ainsi, pour<br/>Opto-Réseau, habiller un visage, ce<br/>n'est pas qu'une histoire de tendances.<br/>C'est analyser sa morphologie, oui,<br/>mais aussi comprendre lecaractère, les<br/>goûts et l'histoire de l'individu qui le<br/>porte, sa singularité. Pour mieux la<br/>mettre en lumière.</h1>
      </div>
      <div className=''>
        <div className='relative h-[50vw] w-screen border-y-[1px] border-y-black flex items-center justify-center'>
          <div className='h-[5vw] w-full absolute top-0 left-0 flex items-center justify-between z-20'>
            <h1 className='text-black text-[2.5vw] font-medium uppercase '>opto-reseau</h1>
            <h1 className='text-black text-[2.5vw] font-medium uppercase '>_2020</h1>
          </div>
          <div 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className='videoAnimationDiv group relative h-full w-[50vw] bg-blue-950 rounded-[25vw] hover:rounded-none hover:w-[100vw] transition-all ease-linear duration-500 overflow-hidden cursor-pointer'
          >
            <div className='absolute z-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[7vw] w-[30vw] leading-[5vw] transition-all ease-linear group-hover:border-b-10 border-white  '>
              <p className='h-[8vw] w-full text-[7vw] tracking-tighter font-semibold text-white'>
                Lamajeure
              </p>
            </div>
            <video 
              ref={videoRef}
              className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[100vw] h-full object-cover'
              src="../../../public/video.mp4"
              muted
              loop
              playsInline
            ></video>
          </div>
        </div>
      </div>
      <div className='h-[60vw] w-screen flex items-center justify-center'>
        <div className='h-[28vw] w-full bg-red-400'>
          <div className='h-full w-full bg-blue-200'>
            <img className='h-full w-full object-cover' src="../../../public/112.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className='h-[50vw] w-full flex items-center justify-center'>
        <div className='h-[40vw] w-[80vw] bg-blue-950 rounded-[5vw] overflow-hidden'>
          <video className='h-full w-full object-cover' src="../../../public/video.mp4" muted loop autoPlay playsInline></video>
        </div>
      </div>
      <div className='h-[58vw] w-full mt-[10vw]'>
        <img className='h-full w-full object-cover' src="../../../public/113.jpg" alt="" />
      </div>
      <div className='h-[58vw] w-full'>
        <img className='h-full w-full object-cover' src="../../../public/115.jpg" alt="" />
      </div>
      <div className='relative h-[165vw] w-full '>
        <div ref={textDiv} className='absolute top-0 left-0 h-[50vw] w-full  flex items-center justify-start'>
          <h1 className='text-black font-semibold text-[9.5vw] uppercase tracking-tighter leading-[9vw]'>dans les coulisses<br/>-- apercu du<br/>processus.</h1>
        </div>
        <div ref={firstVideo} className='absolute top-[55vw] left-0 h-[50vw] w-full z-10 flex items-center justify-center'>
          <div  className='h-full w-[34vw] bg-blue-950 rounded-[5vw] overflow-hidden'>
            <video className='h-full w-full object-cover' src="../../../public/video.mp4" muted loop autoPlay playsInline></video>
          </div>
        </div>
        <div ref={secondVideo} className='absolute top-[107vw] left-0 h-[50vw] w-full z-20 flex items-center justify-center'>
          <div  className='h-full w-[34vw] bg-blue-950 rounded-[5vw] overflow-hidden'>
            <video className='h-full w-full object-cover' src="../../../public/video.mp4" muted loop autoPlay playsInline></video>
          </div>
        </div>
      </div>
      <div className='relative h-[65vw] w-full  pt-[5vw]'>
        <h1 className='text-black text-[40vw] -ml-[18vw] font-semibold text-center'>@2020</h1>
        <div className='absolute bottom-0 left-[32vw] h-[24vw] w-[34vw] rounded-[5vw] bg-blue-950 overflow-hidden'>
          <img className='h-full w-full object-cover' src="../../../public/6.jpg" alt="" />
        </div>
      </div>
      <div className=' pt-[10vw]'>
        <LastPages/>
      </div>
      
    </div>
  )
}

export default AgenceSP