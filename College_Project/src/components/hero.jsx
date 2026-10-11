import React from 'react'

const Hero = () => {
  return (
    <div className="hero w-full h-[400px] bg-[#311A00]">
        <div className="content  flex flex-row items-center justify-center gap-40 px-20 py-10">
          <div className="text flex flex-col items-start justify-center gap-2">
            <h2 className="text-2xl text-[#ffcb3d] font-semibold">Fresh. Fast. Affordable</h2>
            <h1 className="text-6xl text-white font-bold">Good food between your lectures</h1>
            <h2 className="text-2xl text-gray-300 font-medium mt-4">Hot meals, snacks, and combos made for students</h2>
            <button className="btn w-[150px] h-[50px] bg-white text-black font-bold hover:bg-gray-200 mt-4 rounded-xl font-light text-xl">Visit Menu</button>
          </div>

          <div className="w-[40%] h-[300px] flex flex-col items-center justify-center gap-2 bg-[#2d1905] border border-dashed border-[#6a4c2b] rounded-2xl text-[#f5d6a0]">

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[#e4c58b]"
            >
              <rect x="3" y="3" width="18" height="18" rx="3" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="m21 15-5-5L5 21" />
            </svg>

            <p className="m-0 text-base font-medium">
              Hero food image
            </p>
          </div>
          
        </div>
    </div>
  )
}

export default Hero