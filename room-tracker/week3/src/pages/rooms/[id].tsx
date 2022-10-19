import {ChevronRightIcon, HomeIcon} from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import Room from "../../../models/Room";
import {GetServerSideProps} from "next";
import dbConnect from "../../../lib/dbConnect";

export default function RoomId({room}) {
  return (
    <div className="max-w-[80%] mx-auto mt-11">
      <div className="bg-white  mt-11 p-2 rounded-lg shadow-md flex">
        <HomeIcon className="h-7 w-7" />
        <Link href="/">
          <a className=" cursor-pointer font-semibold  mt-1 ml-1"> Home </a>
        </Link>
        <ChevronRightIcon className="h-5 w-5 mt-2 ml-1" />
        <p className="font-semibold mt-1">
          {room.building}
          {room.number}
        </p>
      </div>
      <div className="bg-white mt-5 p-5 rounded-lg shadow-md w-full flex">
        <div>
          <Image
            src="/img/room.png"
            width={718}
            height={642}
            alt="room picture"
          />
        </div>
        <div className="min-w-[40%] ml-3">
          <h1 className="text-xl mb-6">
            {room.building}
            {room.number}
          </h1>
          <div className="flex justify-between border-b-2 border-light-gray mb-6">
            <h2 className="font-semibold"> Student Capacity </h2>
            <h2 className="font-semibold">{room.capacity}</h2>
          </div>
          <div className="min-w-[40%] mb-6">
            <div className="flex justify-between border-b-2 border-light-gray">
              <h2 className="font-semibold"> Type </h2>
              <h2 className="font-semibold">{room.type.name}</h2>
            </div>
          </div>
          <div>
            <p>{room.notes}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({params}) => {
  await dbConnect();

  const room = await Room.findById(params.id).lean();

  return {props: {room: {...room, _id: room._id.toString()}}};
};
