import React from 'react'
import owner from "../../assests/businessman.png"
import HighlightText from '../../components/HighlightText'

export default function Owner() {
  return (
    <div className="text-whiteColor max-w-[1360px] mx-auto flex md:flex-row flex-col items-center justify-evenly gap-y-8 px-5">
        <div>
            <img src={owner} alt={owner} loading="lazy" className="w-4/3 object-cover aspect-square" />
        </div>
        <div className="md:w-[50%] flex flex-col items-start gap-y-10 mb-3">
            <div className="text-3xl md:text-4xl font-extrabold">Meet the <HighlightText text="Founder" /></div>
            <div className="text-lg flex flex-col gap-y-5">
                <>
                <p className="text-whiteColor">Ravi Kumar, the visionary behind this platform, has over 5+ years of experience in the fashion, travel, and healthcare industries. Driven by a passion for quality and customer service, Ravi Kumar created this one-stop solution to make your life easier, stylish, and healthier. With a focus on innovation and reliability, they are committed to offering top-notch services that you can trust.</p>
                <p>"At <HighlightText text="Kushwaha Trading" className="font-bold"/>, our goal is to make your journey in fashion, travel, and health as seamless and enjoyable as possible."</p>
                </>
            </div>
        </div>
    


    </div>
  )
}
