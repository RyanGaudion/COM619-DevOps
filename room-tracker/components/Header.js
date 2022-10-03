import Image from 'next/image'
import Link from 'next/link'
import {ArrowLeftOnRectangleIcon} from "@heroicons/react/24/outline"


export default function Header(){
    return(
    <div className='max-w-full relative'>
        <nav className='p-5 bg-white flex justify-between border-b-2 border-gray-200 fix top-0 left-0 right-0'>
          <Link href="/">
            <Image alt='logo' layout='fixed' src='/img/logo.png' width={102} height={46} className='cursor-pointer'/>
          </Link>
          <div className='flex space-x-2 cursor-pointer mt-2'>
            <ArrowLeftOnRectangleIcon className="h-6 w-6 mt-0.5"/>
            <h4 className='text-gray-500'>Log Out</h4>
          </div>
        </nav>
      </div>
    );
}