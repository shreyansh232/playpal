import Image from 'next/image'
import React from 'react'
import { HiMiniPencilSquare } from "react-icons/hi2";
import { PiSignInBold } from "react-icons/pi";
function Header() {
  return (
    <div className='flex justify-between p-3 border-b-2'>
        <div className='font-semibold flex items-center gap-2'>
        <Image src="/images/playpal.png" alt="play pal logo" width={50} height={50} />
        <h1 className='text-4xl'>PlayPal</h1>
        </div>
        <div className='flex gap-3'>
            <button className='bg-black text-white p-2 px-3 rounded-xl'><span className='hidden sm:block'>Create post</span><HiMiniPencilSquare className='sm:hidden text-[20px]'/></button>
            <button  className='border-[1px] text-gray-500 p-2 px-3 rounded-xl'><span className='hidden sm:block'>Sign in</span><PiSignInBold className='sm:hidden text-black text-[20px]' /></button>
        <Image src="/images/plug.png" alt='user image' className='rounded-full' width={48} height={40}/>
        </div>

    </div>
  )
}

export default Header