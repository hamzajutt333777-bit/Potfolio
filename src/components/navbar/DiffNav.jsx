import {useEffect} from 'react'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useLocation } from 'react-router-dom';


const DiffNav = (props) => {

  const location = useLocation(); 
//   const PPage = location.pathname.toLowerCase() === '/p';

  useGSAP(() => {
    ScrollTrigger.create({
      start: 'top -30%', // Triggers after scrolling 30% of the viewport height
      onUpdate: (self) => {
        // If the scroll distance is more than 30% of viewport height
        if (self.scroll() > window.innerHeight * 0.3) {
          props.setScrollVar(true);
        } else {
          props.setScrollVar(false);
        }
      }
    });
  }, [location.pathname]);

  useEffect(() => {
  const squares = document.querySelectorAll('.navSquares');
  
  // Combine the logic: hide if scrolled OR if hovering a card
  const shouldHide = props.scrollVar || props.isHovered;

  if (shouldHide) {
    gsap.to(squares, {
      y: -window.innerHeight,
      duration: 1,
      ease: 'power2.inOut',
      stagger: { amount: 0.1 },
      pointerEvents: 'none',
      overwrite: 'auto' // CRITICAL: Tells GSAP to kill any conflicting animations
    });
  } else {
    gsap.to(squares, {
      y: 0,
      duration: 0.8,
      ease: 'power2.inOut',
      stagger: { amount: 0.1 },
      pointerEvents: 'auto',
      overwrite: 'auto' // CRITICAL: Prevents the "jumping" behavior
    });
  }
}, [props.scrollVar, props.isHovered]); // Listen to both changes here


  return (
    <div className=' z-10'>
      <div className={` fixed z-10 transition-all duration-400 ease-linear ${props.isHovered ? 'translate-y-0   pointer-events-none' : '-translate-y-[100%]'} -translate-y-[100%] top-0 left-0 h-[10vw] w-full`}>
        <div className={ `whiteArea h-[4vw] w-full bg-white transition-all duration-50 ease-linear ${props.isHovered ? 'opacity-0' : 'opacity-100'}`}></div>
        <div className='h-[5vw] w-full flex gap-[15vw] items-center justify-start border-t-black border-b-black border-[0.2vw] bg-white'>
          <div className='h-[full] w-[38vw] bg-gray- translate-x-[12vw] font-mono tracking-[-0.2vw] bg-red-'>
            <h1 className='word-spacing text-[3.5vw] font-semibold text-black '>{props.fh1}</h1>
          </div>
          <div className='h-full w-[35vw] flex items-center justify-between px-[0.3vw] bg-gray- translate-x-[vw] font-mono tracking-[-0.2vw]'>
            <h1 className='text-[3.5vw] font-semibold text-black'>{props.sh1}</h1>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default DiffNav