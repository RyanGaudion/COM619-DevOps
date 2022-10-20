import Link from "next/link";
import {ChevronRightIcon, HomeIcon} from "@heroicons/react/outline";

export default function breadcrumb({room}) {
  return (
    <div className="bg-white mt-11 p-2 rounded-lg shadow-md flex">
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
  );
}
