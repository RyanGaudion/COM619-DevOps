import {LoginIcon, LogoutIcon} from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import {signIn, signOut, useSession} from "next-auth/react"
import Button from "./Button";

export default function Header() {
  const {data: session} = useSession();

  return (
    <div className="max-w-full relative">
      <nav className="p-5 bg-white flex justify-between border-b-2 border-light-gray fixed top-0 left-0 right-0">
        <Link href="/">
          <Image
            alt="image"
            src="/img/logo.png"
            width={102}
            height={46}
            className="cursor-pointer"
          />
        </Link>
        {!session && (<div className="flex space-x-2 cursor-pointer mt-2" onClick={() => signIn()}>
          <LoginIcon className="h-5 w-5 mt-0.5" />
          <h4 className="text-gray-500"> Log In</h4>
        </div>)}
        {session && (<div className="flex space-x-2 cursor-pointer mt-2" onClick={() => signOut()}>
          <LogoutIcon className="h-5 w-5 mt-0.5" />
          <h4 className="text-gray-500"> Log Out</h4>
        </div>)}
      </nav>
    </div>
  );
}
