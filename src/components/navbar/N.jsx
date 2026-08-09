
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const N = (props) => {

    function gsapAnimation(){
      const tl = gsap.timeline()
    tl.to('.mainnavscreendiv',{
      display:'block',
    },'d')
    // tl.to('.navstair1',{
    //   height:609,
    //   delay:0.15
    // },'d')
    tl.to('.navstair',{
      height:638,
      duration:0.4,
      stagger:{
        amount:-0.2
      }
    })
    tl.to('.NAV',{
      opacity:100,
    },'a')
    tl.to('.crossMark',{
      x:0
    },'a')
    tl.to('.k72text',{
      opacity:1,
    },'a')
    tl.to('.link',{
      rotateY:0,
      transformOrigin:'top',
      duration:0.2,
      stagger:0.1
    },'a')
    tl.to('.NAVoptions',{
      opacity:100,

    },'a')
    
  }

  function gsapAnimationReverse() {
    const tl = gsap.timeline()
    
    // tl.to('.NAV',{
    //   opacity:0,
    // },'a')
    tl.to('.mainnavscreendiv',{
      duration:0.3
    })
    tl.to('.crossMark',{
      x:120
    },'a')
    tl.to('.k72text',{
      opacity:0,
    },'a')
    tl.to('.link',{
      rotateY:90,
      transformOrigin:'top',
      duration:0.2,
      stagger:0.1
    },'a')
    tl.to('.NAVoptions',{
      opacity:0,
      duration:0.2
    },'s')
    
    // tl.to('.navstair1',{
    //   height:0,
    //   delay:0.15
    // })
    tl.to('.navstair',{
      height:0,
      duration:0.3,
      stagger:{
        amount:-0.2
      }
    },'s')
    tl.to('.mainnavscreendiv',{
      display:'none',
    })
    
  }

  useGSAP(function(){
          if(props.navValue){
              gsapAnimation()
          }else{
              gsapAnimationReverse()
          }
      },[props.navValue])

  useGSAP(function(){
  gsap.to(".marquee-track", {
    xPercent: -33.33,
    duration: 5,
    ease: "none",
    repeat: -1,
  })
})


  return (
    <div className='mainnavscreendiv fixed z-[998] top-0 left-0 h-screen w-full '>
        <div className='navstairs absolute h-screen w-full flex'>
          <div className='navstair h-0 w-1/5 bg-black'></div>
          <div className='navstair h-0 w-1/5 bg-black'></div>
          <div className='navstair h-0 w-1/5 bg-black'></div>
          <div className='navstair h-0 w-1/5 bg-black'></div>
          <div className='navstair h-0 w-1/5 bg-black'></div>
        </div>
        <div className='relative h-screen w-full flex flex-col gap-12 '>
            <div className='NAV opacity-0 transition-all h-[8vw] w-full flex items-center justify-between px-[1vw]'>
                <div className='uppercase text-white font-bold text-[6vw] '><h1 className=' k72text opacity-0 text-white tracking-[-2vw] hover:text-[#D3FD50] translate-x-[1vw]'>hk<span className='translate-y-[-3.35vw] translate-x-[2vw] inline-block'>.</span></h1></div>
                <div onClick={()=>{props.setNavValue(false)}} className='group crossMark h-[8vw] w-[8vw] flex justify-between'>
                    {console.log(props.navValue)}
                    <div className='h-[11vw] w-[2px] bg-white origin-top -rotate-45 group-hover:bg-[#D3FD50]'></div>
                    <div className='h-[11vw] w-[2px] bg-white origin-top rotate-45 group-hover:bg-[#D3FD50]'></div>
                </div>
            </div>
            <div className='NAVoptions opacity-0 transition-all h-[32vw] w-full '>
                <div onClick={() => {props.setSelectedPage('/'); props.setStairsTrigger(!(props.stairsTrigger)); props.setNavValue(false)}} className='link relative h-[8vw] w-full border-t-1 border-white uppercase font-semibold text-center text-[7vw] '>
                    <h1 className='sublink -translate-y-[1.5vw] text-white font-bold font-mono'>home</h1>
                    <div className='movelink w-full h-full bg-[#D3FD50] absolute top-0 left-0 opacity-0 hover:opacity-100 transition-all flex overflow-hidden'>
                      <div className="marquee-track flex shrink-0">
                        <div className='moveX flex items-center gap-[2vw] -mt-2 text-black'>
                          <h2 className='whitespace-nowrap lg:text-[6vw] text-[10vw] font-semibold uppercase text-center font-mono tracking-tighter'>every sight surprise</h2>
                          <div className='rounded-full h-16 translate-y-[0.3vw] w-[10vw] bg-black overflow-hidden'></div>
                          <h2 className='whitespace-nowrap lg:text-[6vw] text-[10vw] font-semibold uppercase text-center font-mono tracking-tighter'>every sight surprise</h2>
                          <div className='rounded-full h-16 translate-y-[0.3vw] w-[10vw] bg-black overflow-hidden'></div>
                        </div>
                        <div className='moveX flex items-center gap-[2vw] -mt-2 text-black'>
                          <h2 className='whitespace-nowrap lg:text-[6vw] text-[10vw] font-semibold uppercase text-center font-mono tracking-tighter'>every sight surprise</h2>
                          <div className='rounded-full h-16 translate-y-[0.3vw] w-[10vw] bg-black overflow-hidden'></div>
                          <h2 className='whitespace-nowrap lg:text-[6vw] text-[10vw] font-semibold uppercase text-center font-mono tracking-tighter'>every sight surprise</h2>
                          <div className='rounded-full h-16 translate-y-[0.3vw] w-[10vw] bg-black overflow-hidden'></div>
                        </div>
                        <div className='moveX flex items-center gap-[2vw] -mt-2 text-black'>
                          <h2 className='whitespace-nowrap lg:text-[6vw] text-[10vw] font-semibold uppercase text-center font-mono tracking-tighter'>every sight surprise</h2>
                          <div className='rounded-full h-16 translate-y-[0.3vw] w-[10vw] bg-black overflow-hidden'></div>
                          <h2 className='whitespace-nowrap lg:text-[6vw] text-[10vw] font-semibold uppercase text-center font-mono tracking-tighter'>every sight surprise</h2>
                          <div className='rounded-full h-16 translate-y-[0.3vw] w-[10vw] bg-black overflow-hidden'></div>
                        </div>
                      </div>
                    </div>
                </div>
                <div onClick={() => {props.setSelectedPage('/P'); props.setStairsTrigger(!(props.stairsTrigger)); props.setNavValue(false)}} className='link relative h-[8vw] w-full border-t-1 border-white uppercase font-semibold text-center text-[7vw] '>
                    <h1 className='sublink -translate-y-[1.5vw] text-white font-bold font-mono'>projects</h1>
                    <div className='movelink w-full h-full bg-[#D3FD50] absolute top-0 left-0 opacity-0 hover:opacity-100 transition-all flex overflow-hidden'>
                      <div className="marquee-track flex shrink-0">
                        <div className='moveX flex items-center gap-[2vw] -mt-2 text-black'>
                          <h2 className='whitespace-nowrap lg:text-[6vw] text-[10vw] font-semibold uppercase text-center font-mono tracking-tighter'>every sight surprise</h2>
                          <div className='rounded-full h-16 translate-y-[0.3vw] w-[10vw] bg-black overflow-hidden'></div>
                          <h2 className='whitespace-nowrap lg:text-[6vw] text-[10vw] font-semibold uppercase text-center font-mono tracking-tighter'>every sight surprise</h2>
                          <div className='rounded-full h-16 translate-y-[0.3vw] w-[10vw] bg-black overflow-hidden'></div>
                        </div>
                        <div className='moveX flex items-center gap-[2vw] -mt-2 text-black'>
                          <h2 className='whitespace-nowrap lg:text-[6vw] text-[10vw] font-semibold uppercase text-center font-mono tracking-tighter'>every sight surprise</h2>
                          <div className='rounded-full h-16 translate-y-[0.3vw] w-[10vw] bg-black overflow-hidden'></div>
                          <h2 className='whitespace-nowrap lg:text-[6vw] text-[10vw] font-semibold uppercase text-center font-mono tracking-tighter'>every sight surprise</h2>
                          <div className='rounded-full h-16 translate-y-[0.3vw] w-[10vw] bg-black overflow-hidden'></div>
                        </div>
                        <div className='moveX flex items-center gap-[2vw] -mt-2 text-black'>
                          <h2 className='whitespace-nowrap lg:text-[6vw] text-[10vw] font-semibold uppercase text-center font-mono tracking-tighter'>every sight surprise</h2>
                          <div className='rounded-full h-16 translate-y-[0.3vw] w-[10vw] bg-black overflow-hidden'></div>
                          <h2 className='whitespace-nowrap lg:text-[6vw] text-[10vw] font-semibold uppercase text-center font-mono tracking-tighter'>every sight surprise</h2>
                          <div className='rounded-full h-16 translate-y-[0.3vw] w-[10vw] bg-black overflow-hidden'></div>
                        </div>
                      </div>
                    </div>
                </div>
                <div onClick={() => {props.setSelectedPage('/A'); props.setStairsTrigger(!(props.stairsTrigger)); props.setNavValue(false)}} className='link relative h-[8vw] w-full border-t-1 border-white uppercase font-semibold text-center text-[7vw] '>
                    <h1 className='sublink -translate-y-[1.5vw] text-white font-bold font-mono'>about</h1>
                    <div className='movelink w-full h-full bg-[#D3FD50] absolute top-0 left-0 opacity-0 hover:opacity-100 transition-all flex overflow-hidden'>
                      <div className="marquee-track flex shrink-0">
                        <div className='moveX flex items-center gap-[2vw] -mt-2 text-black'>
                          <h2 className='whitespace-nowrap lg:text-[6vw] text-[10vw] font-semibold uppercase text-center font-mono tracking-tighter'>every sight surprise</h2>
                          <div className='rounded-full h-16 translate-y-[0.3vw] w-[10vw] bg-black overflow-hidden'></div>
                          <h2 className='whitespace-nowrap lg:text-[6vw] text-[10vw] font-semibold uppercase text-center font-mono tracking-tighter'>every sight surprise</h2>
                          <div className='rounded-full h-16 translate-y-[0.3vw] w-[10vw] bg-black overflow-hidden'></div>
                        </div>
                        <div className='moveX flex items-center gap-[2vw] -mt-2 text-black'>
                          <h2 className='whitespace-nowrap lg:text-[6vw] text-[10vw] font-semibold uppercase text-center font-mono tracking-tighter'>every sight surprise</h2>
                          <div className='rounded-full h-16 translate-y-[0.3vw] w-[10vw] bg-black overflow-hidden'></div>
                          <h2 className='whitespace-nowrap lg:text-[6vw] text-[10vw] font-semibold uppercase text-center font-mono tracking-tighter'>every sight surprise</h2>
                          <div className='rounded-full h-16 translate-y-[0.3vw] w-[10vw] bg-black overflow-hidden'></div>
                        </div>
                        <div className='moveX flex items-center gap-[2vw] -mt-2 text-black'>
                          <h2 className='whitespace-nowrap lg:text-[6vw] text-[10vw] font-semibold uppercase text-center font-mono tracking-tighter'>every sight surprise</h2>
                          <div className='rounded-full h-16 translate-y-[0.3vw] w-[10vw] bg-black overflow-hidden'></div>
                          <h2 className='whitespace-nowrap lg:text-[6vw] text-[10vw] font-semibold uppercase text-center font-mono tracking-tighter'>every sight surprise</h2>
                          <div className='rounded-full h-16 translate-y-[0.3vw] w-[10vw] bg-black overflow-hidden'></div>
                        </div>
                      </div>
                    </div>
                </div>
                <div onClick={() => {props.setSelectedPage('/C'); props.setStairsTrigger(!(props.stairsTrigger)); props.setNavValue(false)}} className='link relative h-[8vw] w-full border-y-1 border-white uppercase font-semibold text-center text-[7vw] '>
                    <h1 className='sublink -translate-y-[1.5vw] text-white font-bold font-mono'>contact</h1>
                    <div className='movelink w-full h-full bg-[#D3FD50] absolute top-0 left-0 opacity-0 hover:opacity-100 transition-all flex overflow-hidden'>
                      <div className="marquee-track flex shrink-0">
                        <div className='moveX flex items-center gap-[2vw] -mt-2 text-black'>
                          <h2 className='whitespace-nowrap lg:text-[6vw] text-[10vw] font-semibold uppercase text-center font-mono tracking-tighter'>every sight surprise</h2>
                          <div className='rounded-full h-16 translate-y-[0.3vw] w-[10vw] bg-black overflow-hidden'></div>
                          <h2 className='whitespace-nowrap lg:text-[6vw] text-[10vw] font-semibold uppercase text-center font-mono tracking-tighter'>every sight surprise</h2>
                          <div className='rounded-full h-16 translate-y-[0.3vw] w-[10vw] bg-black overflow-hidden'></div>
                        </div>
                        <div className='moveX flex items-center gap-[2vw] -mt-2 text-black'>
                          <h2 className='whitespace-nowrap lg:text-[6vw] text-[10vw] font-semibold uppercase text-center font-mono tracking-tighter'>every sight surprise</h2>
                          <div className='rounded-full h-16 translate-y-[0.3vw] w-[10vw] bg-black overflow-hidden'></div>
                          <h2 className='whitespace-nowrap lg:text-[6vw] text-[10vw] font-semibold uppercase text-center font-mono tracking-tighter'>every sight surprise</h2>
                          <div className='rounded-full h-16 translate-y-[0.3vw] w-[10vw] bg-black overflow-hidden'></div>
                        </div>
                        <div className='moveX flex items-center gap-[2vw] -mt-2 text-black'>
                          <h2 className='whitespace-nowrap lg:text-[6vw] text-[10vw] font-semibold uppercase text-center font-mono tracking-tighter'>every sight surprise</h2>
                          <div className='rounded-full h-16 translate-y-[0.3vw] w-[10vw] bg-black overflow-hidden'></div>
                          <h2 className='whitespace-nowrap lg:text-[6vw] text-[10vw] font-semibold uppercase text-center font-mono tracking-tighter'>every sight surprise</h2>
                          <div className='rounded-full h-16 translate-y-[0.3vw] w-[10vw] bg-black overflow-hidden'></div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}


export default N