import React from 'react'
import logo from "../assests/home/logo1.png"
import { FaSquareFacebook, FaTwitter,FaInstagram, FaWhatsapp } from "react-icons/fa6";
import HighlightText from './HighlightText';
 

export default function Footer() {
  return (
    <div className="text-whiteColor max-w-[1360px] mx-auto flex flex-col items-center gap-y-8 pt-10 px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl-grid-cols-4  justify-items-center md:justify-items-start gap-y-5 gap-x-5 w-full">
            <div className="md:w-[100%] flex flex-col gap-y-3 w-full">
                <div className="w-[20%]">
                    <img src={logo} alt="logo" loading="lazy" className="w-4/3 object-contain mix-blend-lighten aspect-square " />              
                </div>
                <h1 className="font-bold text-xl">Your One-Stop Solution for Clothing, Travel, and Health Services
                </h1>
                <p className="font-medium">Discover top fashion, travel hassle-free, and connect with reliable healthcare providers.</p>
            </div>
            <div className="md:w-[100%] flex flex-col gap-y-3 w-full">
                <div className="text-3xl font-bold">
                    Contact Info
                </div>
                <ul className="flex flex-col gap-y-2">
                    <li>Tiranga chowk, Main Road jharpo, Jharpo, Jharkhand 825313</li>
                    <li>+91 72094 01957</li>
                    <li>info@yourcompany.com</li>
                </ul>
            </div>
            <div className="md:w-[100%] flex flex-col justify-start items-start gap-y-3 w-full">
                <div className="text-3xl font-bold">Services</div>
                <ul className="flex flex-col gap-y-2">
                    <li>
                        <a href="#shopping" className="hover:text-darkBlueColor transition-colors duration-300" >Shopping</a>
                    </li>
                    <li>
                        <a href="#repair" className="hover:text-darkBlueColor transition-colors duration-300">Repair Service</a>   
                    </li>
                    <li>
                        <a href="#tour" className="hover:text-darkBlueColor transition-colors duration-300">Tour and Travels</a>
                    </li>
                    <li>
                        <a href="#medical" className="hover:text-darkBlueColor transition-colors duration-300">Medi Express</a>
                    </li>
                </ul>
            </div>
            <div className=" flex flex-col gap-y-4 h-full w-[100%]">
                <div className="text-3xl font-bold">STAY UP TO DATE</div>
                <div className="flex md:flex-row flex-col gap-x-3 gap-y-3">
                    <input type="text" placeholder="email..." required  className="rounded py-2 w-[100%] outline-0 border-0 text-black px-2"/>
                    <a href="mailto:abdbd@gmail.com" className="bg-darkBlueColor py-2 px-5 w-fit font-bold hover:opacity-80 rounded">SEND</a>
                </div>
            </div>
            
        </div>
        <ul className="flex items-start justify-start w-full gap-x-3">
                <li>
                    <a href="*" className="text-3xl hover:opacity-80 duration-200"><FaSquareFacebook /></a>
                </li>
                <li>
                    <a href="*" className="text-3xl hover:opacity-80 duration-200"><FaInstagram /></a>
                </li>
                <li>
                    <a href="*" className="text-3xl hover:opacity-80 duration-200"><FaTwitter/></a>
                </li>
                <li>
                    <a href="*" className="text-3xl hover:opacity-80 duration-200"><FaWhatsapp/></a>
                </li>
            </ul>
            <div className="w-full border-t-[1px] border-darkBlueColor flex gap-x-1 font-extrabold items-center justify-center py-5">
                <div className="text-center flex flex-wrap justify-center">
                <p>Copyright © 2022 Kushwaha Trading | </p>
                <a href="callto:9199607457"> Powered by <HighlightText text="Rahul Kumar"/></a>
                </div>
            </div>

    </div>



    
  )
}
