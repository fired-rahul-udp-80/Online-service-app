import React from 'react'
import Navbar from '../../components/Navbar'
import Button from '../../components/Button'
import Carousel from "./Carousel"
import clothesVideo from "../../assests/home/s-video.mp4"
import HighlightText from '../../components/HighlightText'
import Shopping from './shopping/Shopping'
import MachineService from './MachineService'
import VehicleService from './VehicleService'
import DoctorService from './DoctorService'

import Footer from '../../components/Footer'
import Owner from './Owner'

 

function Home() {
  return (
    <>

    <div className="max-w-[1360px] mx-auto relative">
    <Navbar/>
    <div className="absolute opacity-60 hidden md:block bottom-[10%] left-[50%] -translate-x-[50%] h-[500px] w-[700px] bg-gradient-to-b from-darkBlueColor from-10% to-lightBlueColor  blur-2xl header"></div>
    <div className="absolute opacity-60 hidden md:block -bottom-[10%] -left-[30%] translate-x-[30%] h-[600px] w-[750px] bg-gradient-to-b from-darkBlueColor from-10% to-lightBlueColor  blur-2xl header"></div>
    <div className="absolute opacity-20  -bottom-[10%] -right-[20%] translate-x-[30%] h-[600px] w-[750px] bg-gradient-to-b from-darkBlueColor from-10% to-lightBlueColor  blur-2xl header"></div>
    

    <div className="flex justify-center flex-col items-center mt-20 gap-y-5">
        <h1 className="text-whiteColor text-2xl md:text-4xl font-[800] text-center w-[70%]" >Don't hesitate to access any service. This is a completely trustworthy service provider...</h1>
        <p className="w-[80%] md:w-[50%] text-slate-300 text-sm font-semibold text-center " >"Your One-Stop Solution for Clothing, Travel, and Health Services"
        Explore the Best Fashion, Travel with Ease, and Access Trusted Healthcare Providers</p>
    </div>
    <div className="flex gap-10 justify-center mt-20 z-[1000]">
        <Button
          text={"Get Started"}
          link = {"/s"}
          active = {true}
        />
        <Button
          text={"Watch a Demo"}
          link={"/demo"}
          active={false}
        />
    </div>

     
      <Carousel className="" />
     
    </div>

    <div className="template1 flex flex-col min-h-[450px] w-full px-5">
        <div className="flex lg:flex-row flex-col-reverse justify-evenly items-center mt-10 gap-y-5">
            <div className="flex flex-col gap-y-5 lg:w-[40%]">
                <h2 className="text-white text-center lg:text-left text-3xl md:text-4xl font-bold" >Customer choice <br /><HighlightText text={"with latest brand and Fancy"}/></h2>
                <p className="text-whiteColor font-semibold text-lg leading-8">
                Discover the latest trends in men’s and women’s fashion with our curated collections. From casual wear to formal attire, we offer stylish options for every occasion. Explore trending looks, outfit inspirations, and accessories to complete your ensemble. Shop sustainable and inclusive fashion, featuring a wide range of sizes and eco-friendly fabrics. 
                </p>
            </div>
            <div className="lg:w-[50%] w-[70%] flex justify-center items-center">
                <video width="650" height="500" controls autoPlay loop muted className="aspect-video mix-blend-normal object-fill">
                    <source src={clothesVideo} type="video/mp4"/>   
                </video>

                
            </div>
            
        </div>
        <div className="text-whiteColor mt-20">
            <Shopping/>
        </div>
        
    </div>

    <div className=" flex flex-col items-center w-full">
        <MachineService/>
    </div>
    <div className="template2 flex flex-col items-center w-full mt-20">
        <VehicleService/>
    </div>
    <div className="flex flex-col items-center w-full">
        <DoctorService/>
    </div>
   
    <div className="mt-20 template3 flex flex-col items-center w-full ">
        <Owner/>
    </div>


    <div className="footerbg w-full">
        <Footer/>
    </div>



    </>
  )
}

export default Home