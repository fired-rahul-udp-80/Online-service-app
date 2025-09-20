import React from 'react'
import mrepair from "../../assests/busService/bus1.png"
import HighlightText from '../../components/HighlightText';
import { IoCall } from "react-icons/io5";
import Anchor from '../../components/Anchor';


function VehicleService() {
  return (
    <div className="max-w-[1360px] mx-auto flex md:flex-row-reverse flex-col-reverse items-center justify-evenly my-10">
        <div className=" w-full md:w-[40%] flex justify-center items-center">
            <img src={mrepair} alt={mrepair} loading="lazy" className="w-4/3 aspect-square object-contain max-w-[500px] md:w-[500px] " />
        </div>
        <div className="md:w-[50%] w-full text-whiteColor flex flex-col items-start justify-center gap-y-10 px-5">
            <h1 className=" text-3xl md:text-4xl font-extrabold">MSD 7 Tour<HighlightText text={"and Travels"} /></h1>
            <div className="flex flex-col gap-y-4">
                <h4 className="text-2xl font-semibold">Reliable Vehicle Rentals with Experienced Drivers</h4>
                <>
                <p className="font-medium">
                Your Trusted Partner for Comfortable Travel</p>
               
                <p> MSD 7 Tour and Travels provides private cars, vans, Scorpio, Bolero, and pick-up vehicles for rent, along with experienced drivers. Whether you need a vehicle for a family trip, business travel, or transporting goods, we’ve got you covered.</p>
                </>
            </div>
            <Anchor 
                text="Confirm your vehicle "
                linkto={"callto:4985848383"}
                icon = {<IoCall/>}
            />
        </div>
    </div>
  )
}

export default VehicleService