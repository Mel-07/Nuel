import Header from "./components/header/Header";
import SectionOne from './components/sections/SectionOne'
import SectionTwo from './components/sections/SectionTwo'
import SectionThree from './components/sections/SectionThree'
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Observer } from "gsap/Observer";
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(ScrollTrigger,Observer,TextPlugin)
function Layout() {
const [pageWidth,setPageWidth] = useState(innerWidth)
const panelRef = useRef()
function getPageWidth(e){
    setPageWidth(e.target.innerWidth)
}


useEffect(()=>{


    window.addEventListener('resize',getPageWidth)

    return ()=>{
        window.removeEventListener('resize',getPageWidth)
    }
},[pageWidth])


useGSAP(()=>{
    const panels = gsap.utils.toArray(".panel");
    const text = gsap.utils.toArray(".font-end-text");
    const marqueeParent = gsap.utils.toArray(".marquee-parent");


    
    gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: panelRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / 2,
          end: () => '+=' + panelRef.current.offsetWidth
        }
      });
      const timeLine = gsap.timeline({})
      gsap.set(text,{
        y:10
      })
      timeLine .to(text, {
        scrollTrigger:{
            trigger:'.panel-two',
            scrub:1,
            start: pageWidth < 640 ?"20%  top" : "50%  center",
            end:pageWidth<640 ? ()=> '+=' + 60 :'97%'
        },
        color:'#e7e7e6',
        stagger:1,
        y:0,
        ease:'circ.inOut'
      }).to(marqueeParent,{
        backgroundColor:'#e7e7e6',
        stagger:1,
      });

 

      Observer.create({
        target:'.front-end',
        type:'scroll,touch,pointer',
        onHover:()=>{
            gsap.to('.front-end',{
               
                text:'Looking into the Web3 space and Nodejs',
                background:'#000',
                color:'#fff',
            })
        },
        onHoverEnd:()=>{
            gsap.to('.front-end',{
                
                text:'A Front End Developer',
                background:'#f1f1f1',
                color:'#000' 
            })
        }
    })


    Observer.create({
        target:'.name',
        type:'scroll,touch,pointer',
        onHover:()=>{
            gsap.to('.name',{
                text:` But my friends call me Nuel &#x2764;&#xfe0f;`,
                background:'#000',
                color:'#fff'
            })
        },
        onHoverEnd:()=>{
            gsap.to('.name',{
                text:`Hi! I'm OKOCHA EMEKA CHINONSO EMMANUEL &#x2764;&#xfe0f;`,
                background:'#f1f1f1',
                color:'#000' 
            })
        }
    })



},{scope:panelRef.current})


  return (
    <div  className="h-[100dvh]  relative">
      <Header/>
      <div ref={panelRef}  className=" flex overflow-hidden">
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
      </div>
    </div>
  )
}

export default Layout
