import Image from "next/image";
import { TfiWrite } from "react-icons/tfi";
import { GoSignIn } from "react-icons/go";

const Header = () => {
  return (
    <nav className="navbar bg-slate-500 flex justify-between p-5 px-2 items-center h-16">
      <div>
        <Image src={"/logo.png"} alt="logo" width={180} height={40} />
      </div>
      <div className="flex gap-5">
        <button className="bg-white rounded-full shadow-lg p-2 hover:bg-slate-400 hover:text-white">
          <span className="hidden md:block">Create Post</span>{" "}
          <TfiWrite className="md:hidden px-2 w-full h-full" />
        </button>
        <button className="bg-white rounded-full shadow-lg p-2 hover:bg-slate-400 hover:text-white">
          <span className="hidden md:block"> Sign In</span>
          <GoSignIn className="md:hidden px-2 w-full h-full" />
        </button>
        <Image
          className="cursor-pointer"
          src={"profile.svg"}
          alt="logo"
          width={40}
          height={40}
        />
      </div>
    </nav>
  );
};

export default Header;
