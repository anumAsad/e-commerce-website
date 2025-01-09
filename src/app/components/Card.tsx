import Image from 'next/image'
import React from 'react'

const Card = () => {
  return (
    <div>
        <div className='container w-full px-[120px] py-[493] mt-10 bg-white border-2 border-neutral-100'>
            <div className="mb-8">
            Elevate your lifestyle with a more intelligent, superior wardrobe.<br/>
            Our range is crafted sustainably with longevity in mind.
            </div>
            <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className='relative'>
                    <Image 
                    src='/new-Arrivals.jpg' 
                    alt='New Arrival' 
                    width={400} 
                    height={400} />
                    <span className="absolute bottom-2 left-2 bg-gray-600 text-white text-xs font-bold px-2 py-1 rounded">
                  <button>NEW ARRIVALS</button>
                </span>
                    </div>

                <div className='relative'>
                    <Image 
                    src='/casual-wear.jpg' 
                    alt='Casual Wear' 
                    width={400} 
                    height={400} />
                    <span className="absolute bottom-2 left-2 bg-gray-600 text-white text-xs font-bold px-2 py-1 rounded">
                  <button>CASUAL WEAR</button>
                </span>
                    </div>
                
                    <div className='relative'>
                    <Image 
                    src='/best-sell.jpEg' 
                    alt='Best Sell' 
                    width={400} 
                    height={500} />
                    <span className="absolute bottom-2 left-2 bg-gray-600 text-white text-xs font-bold px-2 py-1 rounded">
                  <button>BEST ITEMS</button>
                </span>
                    </div>
            
            </div>
            </div>
        </div>
    </div>
  )
}

export default Card