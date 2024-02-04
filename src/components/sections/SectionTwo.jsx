import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import Marquee from "react-fast-marquee";
import SlideCard from '../cards/SlideCard';

function SectionTwo() {

  const panelTwoRef = useRef()
  const textArray = ['View','View','View']
  useGSAP(()=>{


  },{scope:panelTwoRef.current})
  return (
    <div ref={panelTwoRef} className="h-[100dvh]  panel-two  panel  backdrop-blur-[1px]  min-w-[100%] grid bg-[#000000]">
      <div className="p-2 max-w-[100%] mx-auto h-full grid items-center md:place-content-center  ">
      <span className="font-7 self-end select-none mx-auto text-center text-[1.4rem] sm:text-[1.6rem] md:text-[2rem] lg:text-[4rem] text-[#54545497] ">
        <span className="font-end-text" >M</span>
        <span className="font-end-text" >Y</span> <span className="font-end-text" >F</span>
         <span className="font-end-text" >R</span><span className="font-end-text" >O</span><span className="font-end-text" >N</span><span className="font-end-text" >T</span> <span className="font-end-text" >E</span>
         <span className="font-end-text" >N</span>
         <span className="font-end-text" >D</span> <span className="font-end-text" >W</span><span className="font-end-text" >O</span><span className="font-end-text" >R</span ><span className="font-end-text" >L</span><span className="font-end-text" >D</span></span>
      <div  className=" second-panel-div    w-full  items-center rounded p-2 h-fit  overflow-hidden   bg-black">
        <Marquee pauseOnHover={true} autoFill={true} speed={10} >
          <div className='flex justify-around mx-[1rem]  gap-[2rem]'>
            {
              textArray.map((text,index)=>(
                <SlideCard valueNumber={index} key={index} view={text} />
              ))
            }
          </div>
        </Marquee>
      </div>
      </div>
    </div>
  )
}

export default SectionTwo
