"use client";
import Image from "next/image";
import { TfiWrite } from "react-icons/tfi";
import { GoSignIn, GoSignOut } from "react-icons/go";
import { signIn, signOut, useSession } from "next-auth/react";
const Header = () => {
  const { data: session } = useSession();
  return (
    <nav className="navbar bg-slate-500 flex justify-between p-5 px-2 items-center h-16">
      <div className="px-2 py-10">
        <Image src={"/dunia-games.png"} alt="logo" width={160} height={40} />
      </div>
      <div className="flex gap-5">
        <button className="bg-white rounded-full shadow-lg p-2 hover:bg-slate-400 hover:text-white">
          <span className="hidden md:block">Create Post</span>
          <TfiWrite className="md:hidden px-2 w-full h-full" />
        </button>

        {session ? (
          <button
            className="bg-white rounded-full shadow-lg p-2 hover:bg-slate-400 hover:text-white"
            onClick={() => signOut()}
          >
            <span className="hidden md:block"> Sign Out</span>
            <GoSignOut className="md:hidden px-2 w-full h-full" />
          </button>
        ) : (
          <button
            className="bg-white rounded-full shadow-lg p-2 hover:bg-slate-400 hover:text-white"
            onClick={() => signIn()}
          >
            <span className="hidden md:block"> Sign In</span>
            <GoSignIn className="md:hidden px-2 w-full h-full" />
          </button>
        )}
        {session && session.user ? (
          <Image
            className="cursor-pointer rounded-full"
            src={session.user.image}
            alt="logo"
            width={40}
            height={40}
          />
        ) : (
          <Image
            className="cursor-pointer rounded-full"
            src={"profile.svg"}
            alt="logo"
            width={40}
            height={40}
          />
        )}
      </div>
      {console.log(session)}
    </nav>
  );
};

export default Header;
