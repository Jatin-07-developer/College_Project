import React from 'react'

const Hero = () => {
  return (
    <div className="hero w-full h-[500px] bg-yellow-500">
        <div className="content">
          <div className="text">
            <h2>Fresh. Fast. Affordable</h2>
            <h1>Good food between your lectures</h1>
            <h2>Hot meals, snacks, and combos made for students</h2>
            <button className="btn">Visit Menu</button>
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