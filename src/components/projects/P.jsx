
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import {useState, useEffect} from 'react'
import DiffNav from '../navbar/DiffNav'
import Footer from '../Footer'
import Lenis from 'lenis'



const P = (props) => {

  // const [isHovered, setIsHovered] = useState(false);
  const [fh1, setfh1] = useState(null)
  const [sh1, setsh1] = useState(null)
  const [th1, setth1] = useState(null)
  
  

  const assignValues = (val1, val2, val3) => {
  setfh1(val1);
  setsh1(val2);
  setth1(val3);
  props.setIsHovered(true)
  props.setSmallNav(true)
  };
  const assignValuesAgain = () => {
    props.setIsHovered(false)
    props.setSmallNav(false)
  }

  useEffect(() => {
    if (fh1 || sh1 || th1) {
      console.log("fh1:", fh1);
      console.log("sh1:", sh1);
      console.log("th1:", th1);
    }
  }, [fh1, sh1, th1]);

  const projectsImageArray = [{
    image1: '/codingimg1.webp',
    w11:'Animated Website',
    w12:'Frontend',
    url1:'https://sienafilmfoundationproject.netlify.app/',
    image2: '/codingimg6.webp',
    w21:'3D Animation Video',
    w22:'Blender',
    url2:'/animation1.mp4'
  }, {
    image1: '/codingimg3.webp',
    w11:'Job-Portal Web App',
    w12:'Frontend & Backend',
    url1:'',
    image2: '/codingimg4.webp',
    w21:'Animated Website',
    w22:'Frontend',
    url2:'https://granyonproject.netlify.app/',
  }, {
    image1: '/codingimg5.webp',
    w11:'Animated Page',
    w12:'Frontend',
    url1:'https://singleanimatedpage.netlify.app/',
    image2: '/codingimg2.webp',
    w21:'Animated Advertisement',
    w22:'Frontend',
    url2:'https://lampad.netlify.app/',
  }]

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(function(){
    
    gsap.utils.toArray('.projetsdiv > div > div').forEach((container) => {
      gsap.from(container, {
        scaleY:0.3,
        yPercent:-70,
        transformOrigin:'bottom',
        ease:'none',
        scrollTrigger:{
          trigger:container,
          scrub:true,
          start:'top 95%',
          // markers:true,
          end:'top 20%',
        }
      });
    });
});

useEffect(() => {

  document.body.style.overflowX = 'hidden';

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

  return (
    <div className='practice relative w-full min-h-screen bg-white pl-[0.5vw] pr-[0.5vw] pt-[0.1px]'>
        <div className='h-[20vw] w-full'>
          <DiffNav setSelectedPage={props.setSelectedPage} stairsTrigger={props.stairsTrigger} setStairsTrigger={props.setStairsTrigger} navValue={props.navValue} setNavValue={props.setNavValue} scrollVar={props.scrollVar} setScrollVar={props.setScrollVar} smallNav={props.smallNav} setSmallNav={props.setSmallNav} isHovered={props.isHovered} projectsImageArray={projectsImageArray} fh1={fh1} sh1={sh1} th1={th1}/>
        </div>
        <div className='projetsdiv relative text-black  w-full min-h-screen pt-[25vw] pb-[5vw]'>
            <h1 className='absolute  left-0 uppercase tracking-tighter font-medium bg-red- -translate-y-[1vw] translate-x-[0.2vw] text-[18vw]'>Projects</h1>
            <div className=" w-full min-h-[10vw] gap-[0.5vw] bg-red- translate-y-[20.5vw]">
  {projectsImageArray.map((items, index) => {
  const isFirstProject = index === 0;
  const wrapperClass = `imagediv${index} w-full h-[38vw] flex gap-[0.7vw] mb-2 justify-center`;

  return (
    <div key={index} className={wrapperClass}>
      {/* Card 1 - Always remains a normal clickable div */}
      <div
        onMouseEnter={() => assignValues(items.w11, items.w12, items.w13)}
        onMouseLeave={assignValuesAgain}
        onClick={() => {
          if (items.url1) {
            window.open(items.url1, '_blank', 'noopener,noreferrer');
          }
        }}
        className="pCards1 rounded-[3vw] shrink-0 relative w-[48vw] h-full group transition-all overflow-hidden cursor-pointer"
      >
        <img className="pcardimg w-full h-full object-cover" src={items.image1} alt="" />
        <div className="pointer-events-none opacity-0 group-hover:opacity-100 transition-all h-full w-full leading-[5vw] absolute top-0 left-0 flex flex-col items-center justify-center bg-black/80 z-20">
          <h1 className="text-white text-[4vw] tracking-tighter font-bold translate-x-[vw] font-mono">{items.w11}</h1>
          <h2 className="text-white text-[4vw] tracking-tighter font-bold translate-x-[vw] font-mono">{items.w12}</h2>
        </div>
      </div>

      {/* Card 2 - If it's the first project, make it an <a> tag. Otherwise, keep it a <div>. */}
      {isFirstProject ? (
        <a
          href="/animation1.mp4"
          target="_blank"
          rel="noopener noreferrer"
          className="pCards2 shrink-0 relative w-[48vw] h-full group rounded-[3vw] transition-all overflow-hidden cursor-pointer"
        >
          <img className="pcardimg w-full h-full object-cover" src={items.image2} alt="" />
          <div className="pointer-events-none opacity-0 group-hover:opacity-100 transition-all leading-[5vw] h-full w-full absolute top-0 left-0 flex flex-col items-center justify-center bg-black/80 z-20">
            <h1 className="text-white text-[4vw] tracking-tighter font-bold translate-x-[vw] font-mono">{items.w21}</h1>
            <h2 className="text-white text-[4vw] tracking-tighter font-bold translate-x-[vw] font-mono">{items.w22}</h2>
          </div>
        </a>
      ) : (
        <div
          onMouseEnter={() => assignValues(items.w21, items.w22, items.w23)}
          onMouseLeave={assignValuesAgain}
          onClick={() => {
            if (items.url2) {
              window.open(items.url2, '_blank', 'noopener,noreferrer');
            }
          }}
          className="pCards2 shrink-0 relative w-[48vw] h-full group rounded-[3vw] transition-all overflow-hidden cursor-pointer"
        >
          <img className="pcardimg w-full h-full object-cover" src={items.image2} alt="" />
          <div className="pointer-events-none opacity-0 group-hover:opacity-100 transition-all leading-[5vw] h-full w-full absolute top-0 left-0 flex flex-col items-center justify-center bg-black/80 z-20">
            <h1 className="text-white text-[4vw] tracking-tighter font-bold translate-x-[vw] font-mono">{items.w21}</h1>
            <h2 className="text-white text-[4vw] tracking-tighter font-bold translate-x-[vw] font-mono">{items.w22}</h2>
          </div>
        </div>
      )}
    </div>
  );
})}
</div>
        </div>
        <div className='h-[0vw] bg-red-400 translate-y-[25vw] text-white w-full'><Footer/></div>
    </div>
  )
}

export default P

