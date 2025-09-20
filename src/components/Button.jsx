import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({linkto, text, active}) => {
  return (
    <div>
        <Link to={linkto} className={`${active ? " bg-darkBlueColor text-whiteColor" : "border-[1px] border-darkBlueColor text-whiteColor"}  px-8 py-4 rounded-md font-bold text-md hover:opacity-70 transition-all duration-200`}>{text}</Link>
    </div>
  )
}

export default Button