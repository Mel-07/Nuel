import { Link } from "react-router-dom"

function SectionThree() {
  return (
    <div className="h-[100dvh] place-content-center panel backdrop-blur-[1px] grid min-w-[100%]  bg-[#000000]" >
      <div className="mx-auto max-w-[90rem]">
        <div className="my-[1rem] " >
        <h1 className=" underline underline-[1px] font-2 text-center text-[2rem]">Skills</h1>
        <table className="min-w-[100%] relative after:absolute after:text-black after:left-[90%]  after:z-[2] after:text-[1rem] after:top-[-10%] after:content-['⚒️'] bg-white rounded">
          <tbody className=" text-black">
            <tr className="    ">
            <td className="p-2">HTML5</td>
            <td className="p-2 ">CSS</td>
            </tr>
            <tr className=" ">
            <td className="p-2">JavaScript</td>
            <td className="p-2 ">React js</td>
            </tr>
            <tr className=" ">
            <td className="p-2 ">Redux</td>
            <td className="p-2 ">Tailwind</td>
            </tr>
          </tbody>
        </table>
        </div>
        <Link to={'https://docs.google.com/document/d/1lDCeGcXn4UGuf8jlG6E50nwTilO1jjszCd3oV-PdceA/edit?usp=sharinghttps://docs.google.com/document/d/1lDCeGcXn4UGuf8jlG6E50nwTilO1jjszCd3oV-PdceA/edit?usp=drive_linkhttps://docs.google.com/document/d/1MpqJE8AwAQQb7stcPuD71GizVSumGz_S/edit?usp=sharing&ouid=111940967766662582517&rtpof=true&sd=true'} className="bg-white text-black p-2 transition-colors duration-200 rounded hover:bg-[#f5f7be]" >Download Resume 💻😍</Link>
      </div>
    </div>
  )
}

export default SectionThree
