import { useContext, useRef } from "react";
import { Navbarcontext } from "../../context/Navcontext";

const Navbar = () => {
  const navGreenRef = useRef(null);
  const [navOpen, setNavOpen] = useContext(Navbarcontext)

  return (
    <div className="z-4 fixed flex top-0 w-full items-start justify-between">
      <div className="lg:px-4 px-1 lg:py-1">
        <div className="lg:w-40 w-60 -mt-3">
          <h1 className="w-full lg:text-[3vw] text-[15vw] font-bold text-white">K-72</h1>
        </div>
      </div>
      <div onClick={()=>{
        setNavOpen(true)
      }}
        onMouseEnter={() => {
          navGreenRef.current.style.height = "100%";
        }}
        onMouseLeave={() => {
          navGreenRef.current.style.height = "0%";
        }}
        className="relative lg:h-10 h-10 lg:w-[14vw] w-[30vw] bg-black lg:pt-2"
      >
        <div ref={navGreenRef} className="transition-all absolute top-0 bg-[#D3FD50] h-full w-full"></div>
        <div className="relative h-full lg:px-6 px-2 flex flex-col gap-[1px] items-end justify-center">
          <div className="lg:w-15 w-8 lg:h-[0.18vw] h-[0.5vw] bg-white"></div>
          <div className="lg:w-10 w-4 lg:h-[0.18vw] h-[0.5vw] bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
