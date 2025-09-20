import React from 'react'

export default function Cart({img,name}) {
  return (
    <div className="">
        <div className="w-[200px]">
            
            <img src={img} alt={img} className="w-4/3 aspect-square object-cover mix-blend-hard-light rounded" />
            
        </div>
    </div>
  )
}
