import { Nav } from "components/Nav";
import React from "react";

const Namelist = () => {
  return (
    <div className="relative flex flex-col w-full h-screen">
        <Nav />
      <div className="flex flex-col w-full h-full pt-8 bg-center bg-no-repeat bg-cover md:pt-16 md:bg-desktop bg-mobile">
        <div className="flex flex-col px-8 pb-5 md:flex-row md:justify-around md:items-center">
        <h3 className="pb-3 text-4xl font-semibold font-display text-start md:text-5xl">รายชื่อผู้ลงทะเบียน</h3>
        <input type={"text"} placeholder="ค้นหา" className="w-full h-10 px-3 text-gray-500 rounded-lg md:w-1/5 focus:border-pink-500"/>
        </div>
        <div className="flex"></div>
      </div>
    </div>
  );
};

export default Namelist;