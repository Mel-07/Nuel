import { Link } from 'react-router-dom';

function SlideCard({valueNumber,view}) {
  return (
    <div className="bg-[#dadadaf2] marquee-parent relative overflow-hidden h-[10rem] w-[10rem] md:h-[20rem] md:w-[20rem]  marquee__part  rounded-[1rem] ">
    <div className={`absolute grid place-content-center  marquee-child w-full h-full bg-gray-400 bg-opacity-50 ${valueNumber % 2 ? 'translate-y-[100%]' : 'translate-y-[-100%]'} transition-transform duration-500 `}>
      <Link  className='bg-black px-3 text-[1.2rem] rounded font-bold font-1' >{view}</Link>
    </div>
  </div>
  )
}

export default SlideCard
