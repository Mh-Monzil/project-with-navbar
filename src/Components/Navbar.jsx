import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    return (
        <nav className="flex justify-between items-center gap-4 bg-white border-b-2 border-teal-400 md:border-0">
            <div className="flex justify-between w-full md:w-fit m-4">
                <h1 className="text-4xl font-bold hover:cursor-pointer">React<span className="text-2xl text-rose-500">JS</span>.</h1>
                <div onClick={() => setMenu(!menu)} className="flex items-center md:hidden ">
                    {
                        menu ? 
                        <IoClose className="text-3xl"/> :
                        <GiHamburgerMenu className="text-3xl"/> 
                    }
                </div>
                
            </div>
            <ul className={`flex flex-col md:items-center gap-4 md:flex-row md:gap-6 lg:gap-10 bg-teal-300 md:bg-white absolute md:static top-[75px] ${menu ? "right-0" : "-right-[800px]"} w-full md:w-fit md:top-0 md:m-4 p-4 duration-700 ease-in-out`}>
                <li><a className="font-semibold text-lg hover:text-rose-600 ease-in-out duration-300" href="">Home</a></li>
                <li><a className="font-semibold text-lg hover:text-rose-600 ease-in-out duration-300" href="">Service</a></li>
                <li><a className="font-semibold text-lg hover:text-rose-600 ease-in-out duration-300" href="">About</a></li>
                <li><a className="font-semibold text-lg hover:text-rose-600 ease-in-out duration-300" href="">Blog</a></li>
                <li><a className="font-semibold text-lg hover:text-rose-600 ease-in-out duration-300" href="">Contact</a></li>
                <button className="w-fit bg-rose-500 px-6 py-2 rounded-md text-white font-semibold hover:bg-rose-600">Get Started</button>
            </ul>
        </nav>
    );
};

export default Navbar;