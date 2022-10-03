import {HomeIcon, ChevronRightIcon} from "@heroicons/react/24/outline"
import Link from "next/link"
import Image from "next/image"

function RoomName({name, capacity}){
    return <h1> {name}  ({capacity ?? 0}) </h1>
}

export default function Room(){
    return (
        <div className="max-w-[80%] mx-auto mt-11">
            <div className="bg-white mt-11 p-2 rounded-lg shadow-md flex">
                <HomeIcon className="h-7 w-7"/>
                <Link href="/"><a className="cursor-pointer font-semibold text-blue-700 mt-1 ml-1">Room</a></Link>
                <ChevronRightIcon className="h-5 w-5 mt-2 ml-2"/>
                <p className="font-semibold mt-1"> RM505 </p>
            </div>

            <div className="bg-white mt-5 p-5 rounded-lg shadow-md flex">
                <div>
                    <Image src="/img/room.png" alt="Room Image" height={642} width={718}/>
                </div>
                <div className="min-w-[60%] ml-3">
                    <h1 className="text-xl mb-6 font-bold"> RM 505 </h1>
                    <div className="flex justify-between border-b-2 border-gray-300 pt-3 pb-3">
                        <h2 className="font-semibold"> Student Capacity</h2>
                        <h2 className="font-semibold"> 70 </h2>
                    </div>
                    <div className="flex justify-between border-b-2 border-gray-300 pt-3 pb-3">
                        <h2 className="font-semibold"> Type</h2>
                        <h2 className="font-semibold"> Mac Lab </h2>
                    </div>
                </div>
                
            </div>
        </div>
    )
}