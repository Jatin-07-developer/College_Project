import React from 'react'

const card_body = () => {
  return (
    <div className="bg-[#1A1A19] w-full h-full flex flex-col justify-center gap-5 py-10">
        <div className="main">
            <h1 className="text-2xl font-semibold text-white pl-21">Today's specials</h1>
        </div>
        <div className="cards flex flex-row items-center justify-start mr-20">
            <div className="cards w-[32%] h-[350px] border border-dashed border-[#6a4c2b] rounded-2xl text-[#f5d6a0] flex flex-col items-center justify-center gap-5 ml-20">
            <img className='rounded-xl w-[300px] h-[180px]' src="https://www.imagesarovar.in/wp-content/uploads/edd/2025/01/indian-veg-food-thali-png-vector-illustration-pre-rgnh63652.jpg" alt="" />
            <div className="text w-[300px] flex flex-col items-start justify-start gap-2 pt-4 pl-2">
                <h1 className="text-xl text-white font-medium">Veg thali</h1>
                <div className="hey flex flex-row items-center justify-start gap-10">
                    <h2 className="text-xl text-[#ffcb3d] font-bold">Rs 60</h2>
                    <h2 className="text-green-500 text-lg">Veg</h2>
                </div>        
            </div> 
            </div>
            <div className="cards w-[32%] h-[350px] border border-dashed border-[#6a4c2b] rounded-2xl text-[#f5d6a0] flex flex-col items-center justify-center gap-5 ml-20">
                <img className='rounded-xl w-[300px] h-[180px]' src="https://www.imagesarovar.in/wp-content/uploads/edd/2025/01/indian-veg-food-thali-png-vector-illustration-pre-rgnh63652.jpg" alt="" />
                <div className="text w-[300px] flex flex-col items-start justify-start gap-2 pt-4 pl-2">
                    <h1 className="text-xl text-white font-medium">Veg thali</h1>
                    <div className="hey flex flex-row items-center justify-start gap-10">
                        <h2 className="text-xl text-[#ffcb3d] font-bold">Rs 60</h2>
                        <h2 className="text-green-500 text-lg">Veg</h2>
                    </div>        
                </div> 
            </div>
            <div className="cards w-[32%] h-[350px] border border-dashed border-[#6a4c2b] rounded-2xl text-[#f5d6a0] flex flex-col items-center justify-center gap-5 ml-20">
                <img className='rounded-xl w-[300px] h-[180px]' src="https://www.imagesarovar.in/wp-content/uploads/edd/2025/01/indian-veg-food-thali-png-vector-illustration-pre-rgnh63652.jpg" alt="" />
                <div className="text w-[300px] flex flex-col items-start justify-start gap-2 pt-4 pl-2">
                    <h1 className="text-xl text-white font-medium">Veg thali</h1>
                    <div className="hey flex flex-row items-center justify-start gap-10">
                        <h2 className="text-xl text-[#ffcb3d] font-bold">Rs 60</h2>
                        <h2 className="text-green-500 text-lg">Veg</h2>
                    </div>        
                </div> 
            </div>
        </div>
        
    </div>
  )
}

export default card_body