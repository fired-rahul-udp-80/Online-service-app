import React from 'react'
import HighlightText from '../../components/HighlightText'
import Anchor from '../../components/Anchor'
import { IoCall } from "react-icons/io5";
import { FaUserDoctor } from "react-icons/fa6";

export default function DoctorService() {
  return (
    <>
        <div className="text-whiteColor max-w-[1360px] mx-auto flex flex-col items-center gap-y-8 relative overflow-hidden pt-10 px-5">
        <div className="absolute opacity-30 bottom-[30%] left-[50%] -translate-x-[50%] h-[400px] w-[900px] bg-gradient-to-b from-darkBlueColor from-10% to-lightBlueColor  blur-3xl header"></div>
            <div className="text-2xl md:text-4xl font-extrabold flex gap-x-2">
                <FaUserDoctor className=" text-3xl md:text-4xl" />
                 <p className="text-nowrap">Medi Express</p> 
                 <HighlightText text="Hazaribagh (Doctor Service)" /> 
            </div>
            <div className="flex flex-col justify-center items-start gap-y-5 md:w-[80%]">
                <div className="flex justify-center">
                <p className="font-semibold text-lg">Medi Express has provided convenient home delivery of medicines across Hazaribagh with a valid prescription. We also assist in booking appointments for medical tests like Ultrasound, X-ray, CT Scan, MRI, ECG, and all types of blood and urine tests at local pathology and diagnostic centers.</p>
                </div>
                <ul className="list-disc pl-8 font-bold flex flex-col items-start justify-start">
                    <li className="">Business Location: Tiranga Chowk, Main Road Jharpo, Jharkhand 825313</li>
                    <li>Service Areas: Jharkhand, Ranchi, Hazaribagh</li>
                    <li>Opening Hours: Monday–Saturday, 07:00–20:00</li>
                    <li>Contact: WhatsApp or Call - 072094 01957</li>
                </ul>
            </div>
            <div className="flex md:flex-row flex-col gap-y-5 w-full md:w-[80%]">
                <Anchor  text="Business Contact" linkto="callto:4948483838" icon={<IoCall/>} className="w-full" />
                <Anchor text="Join Our Business whatsapp group" linkto=" https://whatsapp.com/channel/0029VajSheC6LwHkGnb3kr3u"  className="w-full"/>
            </div>
        </div>
    </>
  )
}
