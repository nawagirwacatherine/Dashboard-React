
import React from "react";
import avatar from "../data/avatar.jpg";
import { MdOutlineCancel } from 'react-icons/md';
import { useState } from "react";

const UserProfile = ({onClose}) => {

  const [ logout, setLogout] = useState(false);
  const handleLogoutClick = () => {
    setLogout(true);

  }
  return (
    <div className=" flex absolute right-5 top-16 bg-white p-6 rounded-xl shadow-lg w-80 z-50">
      <div className=" flex">
      <div className="flex items-center gap-4 mb-4">
        <img src={avatar} alt="User" className="w-12 h-12 rounded-full" />
        <div>
          <h4 className="text-lg font-semibold">Katie Johnson</h4>
          <p className="text-gray-500 text-sm">Administrator</p>
        </div>
     
      <div className="text-sm text-gray-700 space-y-1">
        <p>Email: katie@example.com</p>
        <p>Phone: +1 234 567 8901</p>
        <button className="mt-3 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-400" onClick={handleLogoutClick}>
          Logout
        </button>
      </div>
       </div>
          < MdOutlineCancel className="bg-red-400 rounded-2xl" onClick={onClose}/>
      </div>

    </div>
  );
};

export default UserProfile;
