
import React from "react";
import { MdOutlineCancel } from 'react-icons/md';

const Notification = ({onClose}) => {
  const notifications = [
    { id: 1, message: "New order received!" },
    { id: 2, message: "Server backup completed." },
    { id: 3, message: "You have a new message from Support." },
  ];

  return (
    <div className=" flex right-5 top-16 bg-white p-6 rounded-xl shadow-lg w-80 z-50">
      <div>
      <h3 className="text-lg font-semibold mb-4 text-shadow-black">Notifications</h3> 
      <ul className="space-y-2 text-sm">
        {notifications.map((note) => (
          <li key={note.id} className="border-b pb-2 ">{note.message}</li>
        ))}
      </ul>
      </div>
            <MdOutlineCancel className="bg-red-400 rounded-2xl" onClick={onClose}/>
    </div>
  );
};

export default Notification;
