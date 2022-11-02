import {ChevronRightIcon, HomeIcon} from "@heroicons/react/outline";
import Link from "next/link";

export interface BreadCrumbProps {
  label: string;
}

export default function BreadCrumb(props: BreadCrumbProps) {
  const {label} = props;

  return (
    <div className="bg-white  mt-11 p-2 rounded-lg shadow-md flex">
      <HomeIcon className="h-7 w-7" />
      <Link href="/">
        <a className=" cursor-pointer font-semibold  mt-1 ml-1"> Home </a>
      </Link>
      <ChevronRightIcon className="h-5 w-5 mt-2 ml-1" />
      <p className="font-semibold mt-1"> {label}</p>
    </div>
  );
}
