import React from "react";

import { Sgcu } from "../../public/assets/vectors/sgcu-logo";

export const Nav = () => {
return (
    <nav className="absolute z-50 flex w-full px-5 py-4 sm:px-16 md:px-24 font-display">
        <div className="flex items-center space-x-5">
            <Sgcu />
            <h3 className="text-2xl text-pink-500">ISD SGCU</h3>
        </div>
    </nav>
)
}

