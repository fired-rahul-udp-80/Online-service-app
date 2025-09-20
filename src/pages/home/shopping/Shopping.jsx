import React, { useState } from 'react';
import Cart from './Cart';
import tshirt2 from "../../../assests/thsirt/tshirt2.avif"
import tshirt3 from "../../../assests/thsirt/tshirt3.avif"
import tshirt4 from "../../../assests/tshirt.jpg"
import shirt1 from "../../../assests/shirt/shirt1.avif"
import shirt2 from "../../../assests/shirt/shirt2.avif"
import shirt3 from "../../../assests/shirt/shirt3.avif"
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
 

const Shopping = () => {
  const [activeItem, setActiveItem] = useState('tshirt');
  const [leftNav , setLeftNav] = useState(false);

  // Function to handle button clicks
  const handleClick = (item) => {
    setActiveItem(item);
  };

  const tshirt = [
    { id: 1, name: 'T-Shirt',img:tshirt2, price: 10 },
    { id: 2, name: 'T-Shirt',img:tshirt3, price:20},
    { id: 3, name: 'T-Shirt',img:tshirt4, price:30},
    { id: 4, name: 'T-Shirt',img:tshirt3, price:20},
    { id: 5, name: 'T-Shirt',img:tshirt4, price:30},
    { id: 6, name: 'T-Shirt',img:tshirt4, price:30},
    { id: 7, name: 'T-Shirt',img:tshirt4, price:30},

  ]
  const shirt = [
    { id: 1, name: 'Shirt',img:shirt1, price: 10 },
    { id: 2, name: 'Shirt',img:shirt2, price:20},
    { id: 3, name: 'Shirt',img:shirt3, price:30},
    { id: 4, name: 'Shirt',img:shirt2, price:20},
    { id: 5, name: 'Shirt',img:shirt1, price:30},
    { id: 6, name: 'Shirt',img:shirt3, price:30},
    { id: 7, name: 'Shirt',img:shirt2, price:30},

  ]
  // Render the selected clothing component
  const renderComponent = () => {
    switch (activeItem) {
      case 'tshirt':
        return <div className="flex flex-col gap-10 w-[100%]">
                    <div  className="flex gap-5 overflow-x-scroll no-scrollbar">

                    {
                    tshirt?.map((items) =>(
                        <div key={items.id} className="">
                            <Cart
                                name = {items.name}
                                img={items.img}
                            />
                        </div>
                    ))
                    }
            </div>
            <div className=" border-[1px] w-[80%] mx-auto border-darkBlueColor rounded font-bold flex justify-center items-center backdrop-blur-md">
                <Link className="w-full py-4 text-center font-bold flex items-center justify-center gap-x-2">Shop Now <FaCartShopping /></Link>
            </div>
        </div>;
      case 'shirt':
        return <div className="flex flex-col gap-10 w-[100%]">
                    <div  className="flex gap-5 overflow-x-scroll no-scrollbar">

                        {
                        shirt?.map((items) =>(
                            <div key={items.id} className="">
                                <Cart
                                    name = {items.name}
                                    img={items.img}
                                />
                            </div>
                        ))
                        }
                    </div>
            <div className="py-2 border-[1px] border-darkBlueColor rounded font-bold flex justify-center items-center backdrop-blur-md">
                <Link className="w-[100%] text-center">Shop Now</Link>
            </div>
            </div>
      case 'kurta':
        return <div className="content">You selected a Kurta!</div>;
      default:
        return null;
    }
  };

  return (
    <div className="flex gap-x-5 relative">
     <div onClick={() =>setLeftNav(!leftNav)}
      className="lg:hidden w-[8%] border-[1px] cursor-pointer border-darkBlueColor bg-black flex items-center justify-center rounded">
        {
            leftNav ? <FaChevronRight className=" text-lg" /> : <FaChevronLeft className="text-lg"/>
            
        }
     </div>
      <div className={`${leftNav ? "scale-100 flex":"scale-0 hidden"} scale-0 lg:flex lg:scale-100 w-[20%] flex-col  items-start gap-y-4 border-l-[1px] border-l-darkBlueColor rounded transition-all duration-300 origin-left h-full`}>
      
        <div className="flex items-end gap-x-3  pl-5 w-[100%] border-b-[1px] border-darkBlueColor py-4  rounded shadow-md font-semibold">Choose Items {" "} <IoIosArrowDown /></div>
        <button
          className={`C-button border-b-[1px] border-b-lightBlueColor flex justify-center ${activeItem === 'tshirt' ? 'active' : ''}`}
          onClick={() => handleClick('tshirt')}
        >
          T-shirt
        </button>
        <button
          className={`C-button border-b-[1px] border-b-lightBlueColor ${activeItem === 'shirt' ? 'active' : ''}`}
          onClick={() => handleClick('shirt')}
        >
          Shirt
        </button>
        <button
          className={`C-button border-b-[1px] border-b-lightBlueColor ${activeItem === 'kurta' ? 'active' : ''}`}
          onClick={() => handleClick('kurta')}
        >
          Kurta
        </button>
        <button
          className={`C-button border-b-[1px] border-b-lightBlueColor ${activeItem === 'kurta' ? 'active' : ''}`}
          onClick={() => handleClick('kurta')}
        >
          Jeans
        </button>
        <button
          className={`C-button border-b-[1px] border-b-lightBlueColor ${activeItem === 'kurta' ? 'active' : ''}`}
          onClick={() => handleClick('kurta')}
        >
          Pant
        </button>
      </div>

      <div className="w-[80%] overflow-hidden pt-5 flex flex-col justify-center ">
        {renderComponent()}
      </div>
    </div>
  );
};

export default Shopping;
