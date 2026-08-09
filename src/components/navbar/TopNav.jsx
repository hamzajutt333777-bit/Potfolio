import { useLocation } from 'react-router-dom'; // 1. Import useLocation

const TopNav = (props) => {
  const location = useLocation(); 

  // Use toLowerCase() to catch '/P' or '/p'
  const isPPage = location.pathname.toLowerCase() === '/p' || location.pathname.toLowerCase() === '/asp';   
  const isAPage = location.pathname.toLowerCase() === '/a';


  return (
    <div className={`fixed top-0 left-0 h-[5vw] z-[997] w-full pl-[1vw] flex justify-between transition-all duration-300 bg-red-`}>
        <div className='pt-[1vw] bg-red- translate-x-[2vw]'>
            <h1 className={`uppercase font- font-bold text-[7vw] -translate-y-[2vw] transition-transform duration-300 origin-top-left tracking-[-2.18vw] ${isPPage ? 'text-black' : 'text-white'} ${isAPage ? 'opacity-0' : ''} ${isPPage ? 'text-black' : 'text-white'} ${props.smallNav ? 'scale-50 pointer-events-none translate-y-[0.1vw]' : 'scale-100 '} `}>hk<span className='translate-y-[-3.9vw] translate-x-[2vw] inline-block'>.</span></h1>
        </div>
        <div className='relative group overflow-hidden border-[1px] border-white border-t-0 border-r-0 bg-red- h-[4vw]'>
            <div onClick={() => { props.setNavValue(true) }}  className={`group h-[4vw] w-[14.6vw] pt-[2vw] bg-black relative flex flex-col items-center justify-center gap-[2px] `}>
                <div className={`  h-[2.2px] w-[8vw] z-[10] rounded-full transition-all ease-linear bg-white group-hover:bg-black`}></div>
                <div className={`  h-[2.2px] w-[5vw] z-[10] rounded-full transition-all ease-linear bg-white group-hover:bg-black`}></div>
            </div>
            <div 
                className='pointer-events-none absolute -top-15 group-hover:top-0 transition-all duration-200 ease-linear left-0 h-[4vw] w-[14.6vw] bg-[#D3FD50]'
            ></div>
        </div>
    </div>
  )
}

export default TopNav;