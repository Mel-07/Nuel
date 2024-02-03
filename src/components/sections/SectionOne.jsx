import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Nuel from '../../assets/image/Nuel-3.jpg'

import { useEffect, useState,useRef } from 'react'


function SectionOne() {
  const containerRef = useRef()
  const imgRef = useRef()
  const [time,setCurrentTime] = useState()


 const {context,contextSafe} = useGSAP(()=>{

    gsap.set('.img-container',{
      x: '100vw',
      rotate:0
    })
    gsap.to('.img-container',{
      x: 0 , 
      rotation: 360, 
      duration:2
    })

    gsap.set('.name',{
      borderBottomColor:'black'
    })
    gsap.to('.name',{
      borderBottomColor:'#1d8ff4',
      duration:1,
    })

  },{
    scope:containerRef.current
  })

  useEffect(()=>{
    function animate() {

      const currentTime = new Date().toLocaleTimeString()

      setCurrentTime(currentTime)
      requestAnimationFrame(animate);
    }

    // Start the animation loop
    animate();

    // Cleanup function to stop the animation when the component unmounts
    return () => cancelAnimationFrame(animate);
  },[])

  return (
    <div className="h-screen panel flex min-w-[100%] backdrop-blur-[1px]  bg-[#000000] ">
        
      <div className="mx-auto   p-2 self-end sm:self-center ">
        <div ref={containerRef} className=" relative   max-w-[100%] text-black ">
          {/* image container */}
        <div className=" absolute top-[-2rem] md:top-[-5rem] lg:top-[-8rem]  !z-[0]  right-[0] mx-auto  ">
          <div className="relative  fact-parent">
          <div className='absolute z-[2] rounded-md fact-child invisible transition duration-500 ease-in-out translate-x-[-100vw] font-8 bg-[#f1f1f1] max-w-fit px-3  top-[-5%] left-[50%] right-[-50%]  text-black '>
            <div className='font-3 w-fit text-[.7rem] bg-[#f1f1f1]'>
              <p>Love Anime : currently watching Jujutsu Kaisen</p>
            </div>
          </div>
          <div ref={imgRef} className=' img-container max-w-[3rem] max-h-[3rem] md:max-w-[7rem] md:max-h-[7rem] lg:max-w-[10rem]  lg:max-h-[10rem] mx-auto rounded-full border-[#000000] border-[.2rem] overflow-hidden'>
          <img  src={Nuel} className='  w-full mx-auto overflow-hidden' alt='profile' />
          </div>
          </div>
        </div>


        <div className='bg-[#f1f1f1] max-w-[70rem] mx-auto transition duration-500 p-2 rounded-sm '>
        <h1 className=" name sm:text-[2rem] text-[1.1rem]  font-8 font-bold pb-[.1rem] border-b-[.1rem] my-[1rem] border-blue-400 cursor-pointer select-none "> Hi! I'm OKOCHA EMMANUEL &#x2764;&#xfe0f;</h1>
          <div className='font-3 z-[2] p-2  text-[.7rem] sm:text-[.85rem] md:text-[.95rem] lg:text-[1.2rem]'>
            <p className='about leading-[2rem] '><span className=' front-end font-5 text-[1.1rem] md:text-[2rem] cursor-pointer select-none '>A  Front End Developer  </span> 🥑  focused on building websites & Web Apps, that Help Businesses  solve user
             problems.<br/> I currently build web apps In the web2 space as A freelancer, where I work to provide client with A clean & interactive interface. <br /> I also love to fun website with animations, I'm currently
             based in Abuja,Nigeria. <span className='font-6'>  {time} <br />Incorporating animations into your projects adds an engaging and dynamic element to the user experience,<br /> making your work both fun and visually appealing<br /></span> Contacts Email : <span className='font-6'>EmekaOkocha07@gmail.com</span>
             </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default SectionOne
