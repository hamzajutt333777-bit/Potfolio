
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef, useEffect } from 'react'
import { ScrollTrigger } from 'gsap/all'
import FullScreenNav from '../navbar/FullScreenNav'
import Footer from '../Footer'
import LastPages from '../agents/LastPages'
import Lenis from 'lenis'


const A = (props) => {

  const changeImage = useRef(null)

  const images = [
  '/instaPotfolioPic.jpg', '/codingimg1.webp', '/codingimg2.webp', 
  '/codingimg3.webp', '/codingimg4.webp', '/codingimg5.webp', 
  '/codingimg1.webp', '/codingimg2.webp', '/codingimg3.webp', 
  '/codingimg4.webp', '/codingimg5.webp', '/codingimg1.webp', 
  '/codingimg2.webp', '/instaPotfolioPic.jpg'
];

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      smoothTouch: true,
    });

    // Sync with GSAP ScrollTrigger
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    lenis.on('scroll', ScrollTrigger.update);

    // Start at top
    window.scrollTo(0, 0);
    requestAnimationFrame(() => {
      lenis.scrollTo(0, { immediate: true });
    });

    // Arrow keys smooth scroll
    const handleKeyDown = (e) => {
      const scrollAmount = window.innerHeight * 0.8;
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        lenis.scrollTo(window.scrollY + scrollAmount, { duration: 1.5 });
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        lenis.scrollTo(window.scrollY - scrollAmount, { duration: 1.5 });
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  gsap.registerPlugin(ScrollTrigger)
  useGSAP(function(){
    gsap.to('.image-div-section1', {
    scrollTrigger: {
      trigger: '.image-div-section1',
      pin: true,
      start: 'top 17%',
      end: 'top -115%',
      scrub: true,
      onUpdate: (self) => {
        if (changeImage.current) {
          const totalImages = images.length;
          const index = Math.floor(self.progress * (totalImages - 1));
          changeImage.current.src = images[index];
        }
      }
    },
  });
})


  return (
    <div className='agentsdiv bg-blue- text-black transition-all pt-[0.1vw] bg-blue-'>
      {/* <div className='absolute top-0 left-0 h-[20vw] w-full z-[50] bg-red-'>
        <DiffNav setSelectedPage={props.setSelectedPage} stairsTrigger={props.stairsTrigger} setStairsTrigger={props.setStairsTrigger} setNavValue={props.setNavValue} scrollVar={props.scrollVar} setScrollVar={props.setScrollVar}/>
      </div> */}
      <div className='image-div-section1 absolute top-[8vw] z-1 bg-red- left-[28vw] w-[15vw] h-[20vw] rounded-3xl overflow-hidden'>
        <img ref={changeImage} className='imageofsection1 rounded-3xl h-full w-full object-cover' src="/6.jpg" alt="" />
      </div>
      <div className='section1 text-div-section1 relative w-full min-h-[50vw] translate-y-[15vw] font- bg-pink-'>
        <h1 className='textofsection1 transition-all origin-center font-mno uppercase leading-[14vw] text-black font-medium text- tracking-tighter text-[15vw]'>&nbsp;core<br />&nbsp;&nbsp;&nbsp;&nbsp;credentials</h1>
        <div className='w-[50vw] h-[39vw] translate-x-[42vw] bg-red-'>
          <p className='text-[3vw] text-black font- text-right tracking-tight leading-[3.1vw] font-mono'>To me, great development is a balance of art and science. It's about understanding 
  the user's needs, translating them into elegant code, and crafting experiences that 
  feel natural and effortless. I bring a holistic approach to every project—from 
  conceptual design to final deployment, I ensure that every detail aligns with the 
  bigger picture.</p>
        </div>
        <div className='h-[60vw] w-full bg-red-'>
          <div className='flex h-[25vw] w-full bg-red- translate-y-[5vw]'>
            <div className='h-full w-[39%] bg-red-'>
              <h1 className=' text-[10vw] translate-y-[10vw] translate-x-[5vw] tracking-tight uppercase font-semibold bg-gray-'>education</h1>
            </div>
          </div>
          <div className="h-[25vw] flex items-center justify-evenly w-full bg-red-">
            {/* Education card 1 – main degree */}
            <p className="w-[25vw] h-[12vw] text-[1.5vw] font-mono font-bold">
              BS in Computer Science<br />
              <span className="font-normal opacity-70 font-mono">
                University of Central Punjab<br />
                2022 – 2026
              </span>
              <br />
              <span className="font-mono font-normal">
                Core foundation in software engineering, algorithms, and web development.
              </span>
            </p>

            {/* Education card 2 – self‑taught / complementary */}
            <p className="w-[23vw] h-[12vw] text-[1.5vw] font-mono font-semibold">
              Advanced Frontend & Next.js<br />
              <span className="font-normal opacity-70 font-mono">
                Online (self‑paced)<br />
                2024 – Present
              </span>
              <br />
              <span className="font-mono font-normal">
                Deep dive into server‑side rendering and
                performant web apps.
              </span>
            </p>

            {/* Education card 3 – complementary skill */}
            <p className="w-[20vw] h-[15vw] text-[1.5vw] pt-[1.5vw] translate-y-[1.5vw] font-mono font-semibold">
              Blender & 3D Motion<br />
              <span className="font-normal opacity-70">
                Self‑taught artist<br />
                ongoing
              </span>
              <br />
              <span className="font-normal">
                Creating stunning 3D visuals and animations
                for the web.
              </span>
            </p>
          </div>
        
        </div>
        {/* <div className='text-[10vw] text-black uppercase font-semibold translate-x-[5vw]'>skills.</div> */}
      </div>
      <LastPages
        setSelectedPage={props.setSelectedPage}
        stairsTrigger={props.stairsTrigger}
        setStairsTrigger={props.setStairsTrigger}
        setNavValue={props.setNavValue}
        scrollVar={props.scrollVar}
        setScrollVar={props.setScrollVar}
      />
      
      <FullScreenNav setSelectedPage={props.setSelectedPage} stairsTrigger={props.stairsTrigger} setStairsTrigger={props.setStairsTrigger} setNavValue={props.setNavValue} scrollVar={props.scrollVar} setScrollVar={props.setScrollVar} />
      <div className='absolute top-[497vw] left-0 h-screen overflow-hidden w-full bg-red-'>
          <div className='h-[42.85vw] w-screen bg-white flex flex-col items-center justify-center leading-[11vw]'>
            <h1 className='text-[15vw] translate-x-[-5vw] tracking-[-1.5vw] uppercase font-extrabold italic'>ready to</h1>
            <h1 className='text-[15vw] translate-x-[5vw] tracking-[-1.5vw] uppercase font-extrabold italic'>Advance</h1>
          </div>
          <Footer />
      </div>
    </div>
  )
}

export default A