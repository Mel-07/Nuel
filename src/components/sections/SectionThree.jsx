import { Link } from "react-router-dom"

function SectionThree() {
  return (
    <div className="h-[100dvh] place-content-center panel backdrop-blur-[1px] grid min-w-[100%]  bg-[#000000]" >
      <div className="mx-auto max-w-[90rem]">
        <Link to={'https://docs.google.com/document/d/1lDCeGcXn4UGuf8jlG6E50nwTilO1jjszCd3oV-PdceA/edit?usp=sharinghttps://docs.google.com/document/d/1lDCeGcXn4UGuf8jlG6E50nwTilO1jjszCd3oV-PdceA/edit?usp=drive_linkhttps://docs.google.com/document/d/1MpqJE8AwAQQb7stcPuD71GizVSumGz_S/edit?usp=sharing&ouid=111940967766662582517&rtpof=true&sd=true'} className="bg-white text-black p-2 transition-colors duration-200 rounded hover:bg-[#f5f7be]" >Download Resume</Link>
      </div>
    </div>
  )
}
SectionThree.prototype.Name =()=>{

}
console.log(SectionThree)

export default SectionThree
