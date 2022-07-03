import React from "react";
import Link from "next/link";
import { Sgcu } from "../../public/assets/vectors/sgcu-logo";

export const Nav = () => {
return (
    <nav className="flex justify-between w-full px-5 py-2 sm:px-16 md:px-24 font-display" >
        <Link href="/">
        <div className="flex items-center space-x-5 cursor-pointer">
            <Sgcu />
            <h3 className="text-2xl text-pink-500">ISD SGCU</h3>
        </div>
        </Link>
        <Link href="/namelist">
        <div className="flex items-center cursor-pointer">
            <p className="text-xl">List</p>
        </div>
        </Link>
    </nav>
)
}

