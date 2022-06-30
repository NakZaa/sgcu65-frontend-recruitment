import React from "react";

export const Form = () => {
  return (
    <div className="flex flex-col max-w-xs px-10 py-10 mb-4 space-y-5 bg-white border border-pink-500 rounded-lg md:max-w-sm">
      <h3 className="text-5xl font-bold">ลงทะเบียน</h3>
      <p className="pb-3 text-sm">กรุณากรอกข้อมูลให้ครบถ้วน</p>
      <form>
        <div className="pb-2 space-y-9">
          <input
            className="w-full px-3 py-2 leading-tight text-gray-200 border rounded shadow appearance-none focus:border-pink-500 "
            type="text"
            placeholder="ชื่อ"
            id="Firstname"
          />
          <input
            className="w-full px-3 py-2 leading-tight text-gray-200 border rounded shadow appearance-none focus:border-pink-500 "
            type="text"
            placeholder="นามสกุล"
            id="Lastname"
          />

          <input
            className="w-full px-3 py-2 leading-tight text-gray-200 border rounded shadow appearance-none focus:border-pink-500 "
            type="text"
            placeholder="ชื่อผู้ใช้"
            id="Username"
          />

          <input
            className="w-full px-3 py-2 leading-tight text-gray-200 border rounded shadow appearance-none focus:border-pink-500 "
            type="email"
            placeholder="อีเมล"
            id="email"
          />
  
          <input
            className="w-full px-3 py-2 leading-tight text-gray-200 border rounded shadow appearance-none focus:border-pink-500 "
            type="password"
            placeholder="รหัสผ่าน"
            id="Password"
          />
          <input
            className="w-full px-3 py-2 leading-tight text-gray-200 border rounded shadow appearance-none focus:border-pink-500"
            type="password"
            placeholder="ยืนยันรหัสผ่าน"
            id="ConfirmPassword"
          />
          <button
            className="w-full px-4 py-2 font-medium text-white bg-pink-500 rounded hover:bg-pink-700 focus:outline-none"
            type="button"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
