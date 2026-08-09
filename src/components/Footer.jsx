import { LuInstagram } from "react-icons/lu";
import { FaFacebookF, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <div className='h-[7vw] w-screen bg-black text-white'>
      <div className='h-[7vw] w-full flex translate-y-[vw] items-center justify-between bg-black'>
        <div className='translate-x-[3vw] h-[5vw] w-[18vw] text-[2vw] font-extrabold flex items-center justify-center '>
          <h1 className='uppercase font-bold font-mono translate-x-[9vw] text-[3.5vw] px-[1vw] text-white hover:text-[#D3FD50] flex items-center justify-center hover:border-[#D3FD50] '>#Contact</h1>
        </div>
        <div className='h-full w-[65vw] flex gap-[3vw] items-center translate-x-[25vw]'>
          <a href="https://www.instagram.com/hamza_jutt04/" target="_blank" rel="noopener noreferrer">
            <LuInstagram className='h-[3vw] w-[3vw] text-white hover:text-[#D3FD50]'/>
          </a>
          <a href="https://www.facebook.com/share/1FHQjacn3f/" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className='h-[3vw] w-[3vw] text-white hover:text-[#D3FD50]'/>
          </a>
          <a href="https://wa.me/+923214325393" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className='h-[3vw] w-[3vw] text-white hover:text-[#D3FD50]'/>
          </a>
          <a href="https://www.linkedin.com/in/yourprofile/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className='h-[3vw] w-[3vw] text-white hover:text-[#D3FD50]'/>
          </a>
          <a href="mailto:hamzajutt333777@gmail.com">
            <SiGmail className='h-[3vw] w-[3vw] text-white hover:text-[#D3FD50]'/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;