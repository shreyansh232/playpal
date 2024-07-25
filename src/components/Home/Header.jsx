"use client"
import Image from 'next/image';
import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { HiMiniPencilSquare } from "react-icons/hi2";
import { PiSignInBold } from "react-icons/pi";
import Link from 'next/link'; // Add this import

function Header() {
  const { data: session } = useSession();

  return (
    <div className='flex justify-between p-5 border-b-2 border-gray-500'>
      <div className='font-semibold flex items-center gap-2'>
        <Image src="/images/playpal.png" alt="playpal logo" width={40} height={40} />
        <h1 className='text-3xl '>PlayPal</h1>
      </div>
      <div className='flex gap-3 items-center'>
        <Link href="/create-post"> 
          <button className='bg-black text-white p-2 px-3 rounded-xl border'>
            <span className='hidden sm:block'>Create post</span>
            <HiMiniPencilSquare className='sm:hidden text-[20px]' />
          </button>
        </Link>
        {session ? (
          <>
            <button
              onClick={() => signOut()}
              className='border-[1px] text-white border-gray-500 p-2 px-3 rounded-xl'
            >
              <span className='hidden sm:block'>Sign out</span>
              <PiSignInBold className='sm:hidden text-white text-[20px]' />
            </button>
            <Image src={session.user.image || "/images/plug.png"} alt='user image' className='rounded-full' width={48} height={40} />
          </>
        ) : (
          <button
            onClick={() => signIn()}
            className='border-[1px] text-white border-gray-500 p-2 px-3 rounded-xl'
          >
            <span className='hidden sm:block'>Sign in</span>
            <PiSignInBold className='sm:hidden text-white text-[20px]' />
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
