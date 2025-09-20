import React from 'react'
import mrepair from "../../assests/machineService/machine.png"
import HighlightText from '../../components/HighlightText';
import { IoCall } from "react-icons/io5";
import Anchor from '../../components/Anchor';


function MachineService() {
  return (
    <div className="max-w-[1360px] mx-auto flex md:flex-row flex-col items-center justify-evenly mt-10 px-5">
        <div className=" w-full md:w-[40%] flex justify-center items-center">
            <img src={mrepair} alt={mrepair} loading="lazy" className="w-4/3 aspect-square object-contain mix-blend-hard-light w-[300px] md:w-[400px] lg:w-[500px]" />
        </div>
        <div className="md:w-[40%] w-full text-whiteColor flex flex-col items-start justify-center gap-y-5">
            <h1 className=" text-3xl md:text-4xl font-extrabold">Om Airconditioner <HighlightText text={"and Cooling world"} /></h1>
            <div className="flex flex-col gap-y-2">
                <h4 className="text-2xl font-semibold">Trusted Home Appliance Repair Services – At Your Doorstep!</h4>
                <p className="font-medium">
                We specialize in servicing and repairing ACs, fridges, coolers, geysers, washing machines, RO systems, and fans at your home. Our skilled technicians provide quick, affordable, and reliable solutions to keep your appliances running smoothly.</p>
                <ul className="list-disc pl-10">
                    <li>AC Services: Installation, gas filling, and repair.</li>
                    <li>Fridge Repair: Cooling, compressor, and gas issues.</li>
                    <li>Cooler & Fan Repair: Motor repairs and maintenance.</li>
                    <li>Geyser Repair: Heating problems and electrical fixes.</li>
                    <li>Washing Machine Repair: Drum, drainage, and mechanical repairs.</li>
                    <li>RO System Repair: Filter replacement and water quality service.</li>
                </ul>
            </div>
            <Anchor 
                text="Book your service date "
                linkto={"callto:4985848383"}
                icon = {<IoCall/>}
            />
        </div>
    </div>
  )
}

export default MachineService