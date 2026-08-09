import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import MarqueeContent from './MarqueeContent'
import { useGSAP } from '@gsap/react';
import { LuInstagram } from "react-icons/lu";
import { FaFacebookF, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const containerRef = useRef(null)

  // 1. ANIMATION LOGIC
  useGSAP(() => {
    const items = gsap.utils.toArray('.contactText');
    items.forEach((item) => {
      gsap.from(item, {
        opacity: 0,
        y: -100,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
          toggleActions: "play none none none",
        }
      });
    });

    // Horizontal Marquee
    gsap.to(".marquee-inner", {
      xPercent: -33.33,
      duration: 10,
      ease: "none",
      repeat: -1,
    })
  });

  // 2. Lenis smooth scroll + infinite loop + arrow keys
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      smoothTouch: true,
    });

    // Sync with GSAP
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    lenis.on('scroll', ScrollTrigger.update);

    // Start at top
    window.scrollTo(0, 0);
    requestAnimationFrame(() => {
      lenis.scrollTo(0, { immediate: true });
    });

    // Infinite loop logic – now works with Lenis
    const handleInfiniteScroll = () => {
      const content = containerRef.current;
      if (!content) return;
      const loopPoint = content.scrollHeight / 3;
      const scrollY = lenis.scroll;

      if (scrollY >= loopPoint) {
        lenis.scrollTo(1, { immediate: true });
      } else if (scrollY <= 0) {
        lenis.scrollTo(loopPoint - 1, { immediate: true });
      }
    };

    // Rotation on scroll direction
    let lastScrollY = lenis.scroll;
    const handleRotation = () => {
      const currentScrollY = lenis.scroll;
      const rotationAmount = currentScrollY > lastScrollY ? 5 : -5;
      gsap.to(".marquee-container", { 
        rotate: rotationAmount, 
        duration: 0.6, 
        ease: "power2.out",
        overwrite: "auto"
      });
      lastScrollY = currentScrollY;
    };

    lenis.on('scroll', () => {
      handleInfiniteScroll();
      handleRotation();
    });

    // Arrow keys smooth scroll
    const handleKeyDown = (e) => {
      const scrollAmount = window.innerHeight * 0.8;
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        lenis.scrollTo(lenis.scroll + scrollAmount, { duration: 1.5 });
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        lenis.scrollTo(lenis.scroll - scrollAmount, { duration: 1.5 });
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const phrases = [
    ['pour', 'parler de', 'votre', 'projet'],
    ['pour', 'parler de', 'votre', 'projet'],
    ['pour', 'parler de', 'votre', 'projet'],
    ['pour', 'parler de', 'votre', 'projet'],
    ['pour', 'parler de', 'votre', 'projet']
  ]

  const ContentBlock = () => (
    <div className="w-full mb-[5vw] ">
      <div className='h-[35vw] w-full flex items-center justify-between px-[5vw]'>
        <div className='w-[20vw] text-[1.2vw] leading-tight inline-block mt-[28vw] translate-x-[2vw] translate-y-[12vw]' />
        <div className='flex-1 flex flex-col items-center justify-center h-[30vw] w-[40vw] bg-red- p-[1.5vw] translate-y-[2vw]'>
          <form className='w-[40vw] h-full flex flex-col items-center justify-between gap-[1vw] pt-[2vw] bg-red-'>
            <div className='flex flex-col gap-[0.2vw]'>
              <label className='text-white font-mono text-[1.3vw]'>Name</label>
              <input type="text" placeholder="Enter your name" className=' bg-neutral-900 border border-white text-white placeholder-gray-500 text-[0.9vw] h-[3vw] w-[30vw] px-[0.8vw] py-[0.4vw] rounded-xl focus:outline-none' />
            </div>
            <div className='flex flex-col gap-[0.2vw]'>
              <label className='text-white font-mono text-[1.3vw]'>Email</label>
              <input type="email" placeholder="Enter your email" className=' bg-neutral-900 border border-white text-white placeholder-gray-500 text-[0.9vw] h-[3vw] w-[30vw] px-[0.8vw] py-[0.4vw] rounded-xl focus:outline-none' />
            </div>
            <div className='flex flex-col gap-[0.2vw] flex-1'>
              <label className='text-white font-mono text-[1.3vw]'>Message</label>
              <textarea placeholder="Write your message..." className=' bg-neutral-900 border border-white text-white placeholder-gray-500 text-[0.9vw] h-[10vw] w-[30vw] p-[0.8vw] rounded-xl resize-none focus:outline-none' />
            </div>
            <button type="submit" className=' bg-white text-black font-mono text-[1vw] translate-y-[-2vw] translate-x-[-12vw] font-bold h-[2.8vw] w-[6vw] py-[0.5vw] rounded-full hover:bg-[#D3FD50] transition-colors mt-[0.3vw]'>Send</button>
          </form>
        </div>
        <div className='w-[20vw] text-right text-[1.2vw] leading-tight inline-block mt-[28vw] translate-x-[-2vw] translate-y-[12vw]' />
      </div>
      <div className='marquee-container h-[12vw] w-full bg-[#D3FD50] my-[8vw] flex items-center overflow-hidden whitespace-nowrap text-black'>
        <div className="marquee-inner flex items-center shrink-0">
          <MarqueeContent />
          <MarqueeContent />
          <MarqueeContent />
        </div>
      </div>
      <div className='flex flex-col items-center py-[5vw]'>
        <h1 className='uppercase mb-4 text-[1.2vw] opacity-70'>___</h1>
        <div className='flex gap-[3vw] items-center justify-center w-full'>
          <LuInstagram className='h-[5vw] w-[5vw] text-white hover:text-[#D3FD50] '/>
          <FaFacebookF className='h-[5vw] w-[5vw] text-white hover:text-[#D3FD50]'/>
          <FaWhatsapp className='h-[5vw] w-[5vw] text-white hover:text-[#D3FD50]'/>
          <FaLinkedin className='h-[5vw] w-[5vw] text-white hover:text-[#D3FD50]'/>
          <SiGmail className='h-[5vw] w-[5vw] text-white hover:text-[#D3FD50]'/>
        </div>
      </div>
    </div>
  )

  return (
    <div className='bg-black text-white overflow-x-hidden'>
      <div ref={containerRef} className="flex flex-col gap-y-[5vw]">
        {[...phrases, ...phrases, ...phrases].map((phraseSet, i) => (
          <ContentBlock key={i} phraseSet={phraseSet} />
        ))}
      </div>
    </div>
  )
}

export default Contact











