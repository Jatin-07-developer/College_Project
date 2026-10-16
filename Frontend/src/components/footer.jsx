import React from 'react' 
import { Clock10, BadgePercent } from "lucide-react";

const footer = () => {
  return (
    <div className='bg-[#1A1A19] text-white pt-4'>
        <div className="timing flex flex-row align-center justify-center gap-10">
            <div className="time flex flex-col items-start justify-start bg-black border border-gray-700 rounded-xl p-4 w-[650px]">
                <div className="time flex flex-row items-center justify-center">
                    <Clock10 size={28} color="#ffffff" className='pb-1' />
                    <h1 className='font-semibold text-3xl pb-2 pl-1'>Timings</h1>
                </div>   
                <h3 className='text-xl'>Mon to Sat, 8AM to 6PM</h3>
            </div>
            <div className="combo flex flex-col items-start justify-start bg-black border border-gray-700 rounded-xl p-4 w-[650px]">
                <div className="disc flex flex-row items-center justify-center">
                    <BadgePercent size={28} color="#ffffff" className='pb-1'/>
                    <h1 className='text-3xl font-semibold pb-2 pl-1'>Student combos</h1>
                </div>     
                <h3 className='text-xl'>Meals plus drinks at a lower price</h3>
            </div>
        </div>


        <h1 className='text-white text-3xl mt-10 font-bold ml-10'>What students say</h1>

        <div className="boxes flex flex-row items-center justify-center gap-12 mt-5">
            <div className="box flex flex-col items-start justify-start border border-gray-700 bg-black p-4 rounded-xl w-[450px] hover:border-[#ffcb3d] cursor-pointer">
                <h2 className='text-xl font-semibold text-[#ffcb3d]'>5 star</h2>
                <h2>Short review text goes here.</h2>
            </div>
            <div className="box flex flex-col items-start justify-start border border-gray-700 bg-black p-4 rounded-xl w-[450px] hover:border-[#ffcb3d] cursor-pointer">
                <h2 className='text-xl font-semibold text-[#ffcb3d]'>5 star</h2>
                <h2>Short review text goes here.</h2>
            </div>
            <div className="box flex flex-col items-start justify-start border border-gray-700 bg-black p-4 rounded-xl w-[450px] hover:border-[#ffcb3d] cursor-pointer">
                <h2 className='text-xl font-semibold text-[#ffcb3d]'>4 star</h2>
                <h2>Short review text goes here.</h2>
            </div>
        </div>


        <div className="foot mt-10 bg-black w-full h-[50px] border-t border-gray-700">

        </div>
    </div>
  )
}

export default footer