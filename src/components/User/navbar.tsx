import React from 'react'

export const Navbar = () => {
  return (
    <div className="h-[100px] flex items-center text-2xl pl-4 ">
        <ul>
            <li>
                <a className="pr-12 hover:underline underline-offset-1 font-bold text-[#707070] " >Trang chủ</a>
                <a className="pr-12 hover:underline underlinr-offset-1 font-bold text-[#707070] " >Điện Thoại</a>
                <a className="pr-12 hover:underline underline-offset-1 font-bold text-[#707070] ">Sam Sung</a>
                <a className="pr-12 hover:underline underline-offset-1 font-bold text-[#707070] ">Samsung Galaxy A73 (5G) 256GB</a>
                
            </li>
        </ul>
    </div>
  )
}
