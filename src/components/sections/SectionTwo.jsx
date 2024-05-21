
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import Marquee from "react-fast-marquee";
import SlideCard from '../cards/SlideCard';
import cryp from '../../assets/image/crypitez.png'
import ecommerce from '../../assets/image/E-commerce.png'
import space_web from '../../assets/image/Space tourism.png'

function SectionTwo() {

  const panelTwoRef = useRef()
  const textArray = [{
    image:cryp,
    path:'https://chimerical-sprite-567e44.netlify.app',
    btn: 'View'
  },
  {
    image:ecommerce,
    path:'https://commerce-front-end.vercel.app/',
    btn: 'View'
  },
  {
    image:space_web,
    path:'https://space-web-site-seven.vercel.app/',
    btn: 'View'
  },

]
  useGSAP(()=>{


  },{scope:panelTwoRef.current})
  return (
    <div ref={panelTwoRef} className="h-[100dvh]  panel-two  panel  backdrop-blur-[1px]  min-w-[100%] grid bg-[#000000]">
      <div className="p-2 max-w-[100%] mx-auto h-full grid items-center md:place-content-center  ">
      <span className="font-7 self-end select-none mx-auto text-center text-[1.9rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[4rem] text-[#54545497] ">

         {
          'PROJECTS'.split('').map((value,i)=>(
            <span className='font-end-text'  key={i} >{value}</span>
          ))
         }
         </span>
      <div  className=" second-panel-div    w-full  items-center rounded p-2 h-fit  overflow-hidden   bg-black">
        <Marquee pauseOnHover={true} autoFill={true} speed={10} >
          <div className='flex justify-around mx-[1rem]  gap-[2rem]'>
            {
              textArray.map((text,index)=>(
                <SlideCard valueNumber={index} path={text.path} key={index} view={text.btn} image={text.image} />
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
