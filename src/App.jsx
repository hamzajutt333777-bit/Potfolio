
import { useRef, useState } from "react";
// import Lenis from 'lenis'
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import H from "./components/home/H";
import P from "./components/projects/P";
import A from "./components/agents/A";
// import { EasePack } from "gsap/all";
// import FullScreenNav from "./components/navbar/FullScreenNav";
import N from "./components/navbar/N";
import TopNav from "./components/navbar/TopNav";
// import Uploads from "./pages/Uploads";
// import DiffNav from "./components/navbar/DiffNav";
// import Footer from "./components/Footer";
import Stairs from "./components/common/Stairs";
// import AgenceSP from "./components/agents/AgenceSP";
import ScrollToTop from "./components/Scrolltotop";
import Contact from "./components/Contact";


function App() {
  const [navValue, setNavValue] = useState(false)
  const [smallNav, setSmallNav] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [stairsTrigger, setStairsTrigger] = useState(false)
  const [scrollVar, setScrollVar] = useState(null)

  const navigate = useNavigate();
  const location = useLocation();
  const cursorRef = useRef(null);

  const setSelectedPage =(destination)=>{
    setStairsTrigger(true)
    setTimeout(() => {navigate(destination); }, 900);
  }

  const mousePointer = (event) => {
    cursorRef.current.style.opacity = 1;
    cursorRef.current.style.transform = `translate(${event.clientX}px,${event.clientY}px) scale(var(--cursor-scale, 1))`;
  };
  const notMousePointer = () => {
    cursorRef.current.style.opacity = 0;
  };
  
  return (
    <div onMouseMove={mousePointer} onMouseLeave={notMousePointer} className="app cursor-none">
      <ScrollToTop />
      <div
        ref={cursorRef}
        className={`z-[999] circleDiv pointer-events-none h-[3vw] w-[3vw] rounded-full fixed transition-all ease-out  border-[2px] border- ${
          location.pathname === '/A' ? ' border-black' : 'border-white mix-blend-difference'
        }`}
      />
      <Stairs stairsTrigger={stairsTrigger}/>
      <TopNav isHovered={isHovered} setIsHovered={setIsHovered}  smallNav={smallNav} setSmallNav={setSmallNav} navValue={navValue} setNavValue={setNavValue} />
      <N setSelectedPage={setSelectedPage} stairsTrigger={stairsTrigger} setStairsTrigger={setStairsTrigger} navValue={navValue} setNavValue={setNavValue} />
      <Routes>
        <Route path='/' element={<H setSelectedPage={setSelectedPage} stairsTrigger={stairsTrigger} setStairsTrigger={setStairsTrigger}/>} />
        <Route path='/A' element={<A scrollVar={scrollVar} setScrollVar={setScrollVar} setSelectedPage={setSelectedPage} stairsTrigger={stairsTrigger} setStairsTrigger={setStairsTrigger} navValue={navValue} setNavValue={setNavValue} />} />
        <Route path='/P' element={<P scrollVar={scrollVar} setScrollVar={setScrollVar} setSelectedPage={setSelectedPage} stairsTrigger={stairsTrigger} setStairsTrigger={setStairsTrigger} navValue={navValue} setNavValue={setNavValue} isHovered={isHovered} setIsHovered={setIsHovered} smallNav={smallNav} setSmallNav={setSmallNav} />} />
        <Route path='/C' element={<Contact scrollVar={scrollVar} setScrollVar={setScrollVar} setSelectedPage={setSelectedPage} stairsTrigger={stairsTrigger} setStairsTrigger={setStairsTrigger} navValue={navValue} setNavValue={setNavValue} />} />
        
      </Routes>
      
      
    </div>
  );
}

export default App;