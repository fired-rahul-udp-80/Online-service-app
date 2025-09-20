import React from 'react'

export default function Anchor({text, linkto, icon}) {
  return (
    <>
        <div className="w-full flex flex-col items-start justify-center">
                <a href={linkto} className=" flex gap-x-2 items-center justify-center bg-darkBlueColor py-4 px-8 lg:w-[60%] rounded text-center font-bold text-sm hover:opacity-80" >{text} {icon}</a>
        </div>
    </>
  )
}
