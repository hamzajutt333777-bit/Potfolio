import { useContext, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Navbarcontext } from '../../context/Navcontext'

const Screennav = () => {

  const [navOpen, setNavOpen] = useContext(Navbarcontext)

  const stairingRef = useRef(null)
  const navRef = useRef(null)
  const sectionRef = useRef(null)
  const screennavRef = useRef(null)


  function gsapAnimation() {
        const tl = gsap.timeline()
        tl.to('.classscreennav', {
            display: 'block'
        })
        tl.to('.stairing', {
            delay: 0.2,
            height: '100%',
            stagger: {
                amount: -0.3
            }
        })
        tl.to('.link', {
            opacity: 1,
        })
        tl.to('.navlink', {
            opacity: 1
        })
    }

  function gsapAnimationReverse() {
        const tl = gsap.timeline()
        tl.to('.link', {
            opacity: 0,
        })
        tl.to('.stairing', {
            height: 0,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.navlink', {
            opacity: 0
        })
        tl.to('.classscreennav', {
            display: 'none',
        })
    }
    useGSAP(function(){
        if(navOpen){
            gsapAnimation()
        }else{
            gsapAnimationReverse()
        }
    },[navOpen])

  return (
    <div ref={screennavRef} id='screennav' className='classscreennav text-white hidden absolute z-50 h-screen w-full overflow-hidden'>
        <div ref={stairingRef} className="fixed h-screen w-full top-0">
            <div className="h-full w-full flex">
                <div className="stairing h-full w-1/5 bg-black"></div>
                <div className="stairing h-full w-1/5 bg-black"></div>
                <div className="stairing h-full w-1/5 bg-black"></div>
                <div className="stairing h-full w-1/5 bg-black"></div>
                <div className="stairing h-full w-1/5 bg-black"></div>
            </div>
        </div>
        <div ref={navRef} className="navlink p-1 pl-3 w-full flex items-start justify-between">
            <div className='lg:text-[4vw] text-[8vw] z-20 lg:font-bold font-semibold text-white'>K-72</div>
            <div onClick={()=>{setNavOpen(false)}} className="relative lg:h-20 h-10 lg:w-20 w-10">
                <div className="absolute -rotate-45 origin-top lg:h-27 h-13 w-0.5 bg-[#D3FD50]"></div>
                <div className="absolute rotate-45 origin-top lg:h-27 h-13 w-0.5 bg-[#D3FD50] right-0"></div>
            </div>
        </div>
        <div ref={sectionRef} className='section lg:py-10 py-30 text-white'>
            <div className='link opacity-0 relative border-t-1 border-white bg-red-300'>
                <h1 className='lg:text-[6vw] text-[12vw] font-semibold uppercase lg:pt-3 lg:-mt-7 text-center text-white bg-red-300'>Projects</h1>
                <div className='moveLink absolute bg-[#D3FD50] h-full w-full pt-3 top-0 flex'>
                    <div className='moveX flex items-center -mt-7 text-black'>
                        <h2 className='whitespace-nowrap lg:text-[6vw] text-[10vw] font-semibold uppercase text-center'>Pour Tout Voir</h2>
                        <div className='rounded-full h-16 mt-2 w-40 bg-red-500'></div>
                        <h2 className='whitespace-nowrap lg:text-[6vw] text-[10vw] font-semibold uppercase text-center'>Pour Tout Voir</h2>
                        <div className='rounded-full h-16 mt-2 w-40 bg-blue-500'></div>
                    </div>
                    <div className='moveX flex items-center -mt-7 text-black'>
                        <h2 className='whitespace-nowrap text-[6vw] font-semibold uppercase text-center'>Pour Tout Voir</h2>
                        <div className='rounded-full h-16 mt-2 w-40 bg-red-500'></div>
                        <h2 className='whitespace-nowrap text-[6vw] font-semibold uppercase text-center'>Pour Tout Voir</h2>
                        <div className='rounded-full h-16 mt-2 w-40 bg-blue-500'></div>
                    </div>
                </div>
            </div>
            <div className='link relative border-t-1 border-white'>
                <h1 className='lg:text-[6vw] text-[12vw] font-semibold uppercase lg:pt-3 lg:-mt-7 text-center'>Agence</h1>
                <div className='moveLink absolute bg-[#D3FD50] h-full w-full pt-3 top-0 flex'>
                    <div className='moveX flex items-center -mt-7 text-black'>
                        <h2 className='whitespace-nowrap text-[6vw] font-semibold uppercase text-center'>Pour Tout Voir</h2>
                        <div className='rounded-full h-16 mt-2 w-40 bg-red-500'></div>
                        <h2 className='whitespace-nowrap text-[6vw] font-semibold uppercase text-center'>Pour Tout Voir</h2>
                        <div className='rounded-full h-16 mt-2 w-40 bg-blue-500'></div>
                    </div>
                    <div className='moveX flex items-center -mt-7 text-black'>
                        <h2 className='whitespace-nowrap text-[6vw] font-semibold uppercase text-center'>Pour Tout Voir</h2>
                        <div className='rounded-full h-16 mt-2 w-40 bg-red-500'></div>
                        <h2 className='whitespace-nowrap text-[6vw] font-semibold uppercase text-center'>Pour Tout Voir</h2>
                        <div className='rounded-full h-16 mt-2 w-40 bg-blue-500'></div>
                    </div>
                </div>
            </div>
            <div className='link relative border-t-1 border-white'>
                <h1 className='lg:text-[6vw] text-[12vw] font-semibold uppercase lg:pt-3 lg:-mt-7 text-center'>Contact</h1>
                <div className='moveLink absolute bg-[#D3FD50] h-full w-full pt-3 top-0 flex'>
                    <div className='moveX flex items-center -mt-7 text-black'>
                        <h2 className='whitespace-nowrap text-[6vw] font-semibold uppercase text-center'>Pour Tout Voir</h2>
                        <div className='rounded-full h-16 mt-2 w-40 bg-red-500'></div>
                        <h2 className='whitespace-nowrap text-[6vw] font-semibold uppercase text-center'>Pour Tout Voir</h2>
                        <div className='rounded-full h-16 mt-2 w-40 bg-blue-500'></div>
                    </div>
                    <div className='moveX flex items-center -mt-7 text-black'>
                        <h2 className='whitespace-nowrap text-[6vw] font-semibold uppercase text-center'>Pour Tout Voir</h2>
                        <div className='rounded-full h-16 mt-2 w-40 bg-red-500'></div>
                        <h2 className='whitespace-nowrap text-[6vw] font-semibold uppercase text-center'>Pour Tout Voir</h2>
                        <div className='rounded-full h-16 mt-2 w-40 bg-blue-500'></div>
                    </div>
                </div>
            </div>
            <div className='link relative border-y-1 border-white'>
                <h1 className='lg:text-[6vw] text-[12vw] font-semibold uppercase lg:pt-3 lg:-mt-7 text-center'>Blogue</h1>
                <div className='moveLink absolute bg-[#D3FD50] h-full w-full pt-3 top-0 flex'>
                    <div className='moveX flex items-center -mt-7 text-black'>
                        <h2 className='whitespace-nowrap text-[6vw] font-semibold uppercase text-center'>Pour Tout Voir</h2>
                        <div className='rounded-full h-16 mt-2 w-40 bg-red-500'></div>
                        <h2 className='whitespace-nowrap text-[6vw] font-semibold uppercase text-center'>Pour Tout Voir</h2>
                        <div className='rounded-full h-16 mt-2 w-40 bg-blue-500'></div>
                    </div>
                    <div className='moveX flex items-center -mt-7 text-black'>
                        <h2 className='whitespace-nowrap text-[6vw] font-semibold uppercase text-center'>Pour Tout Voir</h2>
                        <div className='rounded-full h-16 mt-2 w-40 bg-red-500'></div>
                        <h2 className='whitespace-nowrap text-[6vw] font-semibold uppercase text-center'>Pour Tout Voir</h2>
                        <div className='rounded-full h-16 mt-2 w-40 bg-blue-500'></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Screennav