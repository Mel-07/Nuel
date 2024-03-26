import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className=" header backdrop-blur-sm h-fit font-serif fixed top-0 bottom-0 left-0 right-0 w-full filter bg-transparent z-[4] border-b-[.00001rem]  border-[#ffffff44] ">
      <div className="max-w-[90rem] mx-[auto] py-[.1rem] px-[.7rem] flex items-center justify-between " >

        <div className="flex items-center gap-[1rem] ml-auto ">
        <p className=" font-5 text-[2rem]" >Nuel.</p>
        <ul className="flex gap-[.5rem]   " >
          <li>
            <Link to={'https://github.com/Mel-07'}><FaGithub className="w-[1.6rem] h-[1.6rem] p-[.1rem]" /></Link>
          </li>
          <li>
            <Link to={'www.linkedin.com/in/okocha-emmanuel-02a320176'}><FaLinkedin className="w-[1.6rem] h-[1.6rem] p-[.1rem] fill-blue-500" /></Link>
          </li>
          <li>
            <Link to={'https://twitter.com/Nuel_70'}><FaXTwitter className="w-[1.6rem] h-[1.6rem] p-[.1rem]" /></Link>
          </li>
          <li>
            <Link to={'https://api.whatsapp.com/send?phone=2349068059186&text=%F0%9F%98%84https://wa.link/yypq3a'} ><IoLogoWhatsapp className="w-[1.6rem] h-[1.6rem] p-[.1rem] fill-green-500 bg-white rounded-full " /></Link>
          </li>
        </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
