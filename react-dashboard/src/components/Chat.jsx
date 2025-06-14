
import React from "react";
import { MdOutlineCancel } from 'react-icons/md';

const Chat = ({onClose}) => {
  const messages = [
    { id: 1, sender: "Admin", content: "Welcome! Need help with anything?" },
    { id: 2, sender: "You", content: "Yes, I have an issue with my order." },
    { id: 3, sender: "Admin", content: "Sure! Let me check that for you." },
  ];

  return (
    <div className=" flex absolute right-5 top-16 bg-white p-4 rounded-xl shadow-lg w-80 z-50">
     
      <div className="space-y-3 max-h-60 overflow-y-auto">
         <h3 className="text-lg font-semibold mb-4">Messages</h3>
        {messages.map((msg) => (
          <div key={msg.id} className="text-sm">
            <p><strong>{msg.sender}:</strong> {msg.content}</p>
          </div>
        ))}
      </div>
      <MdOutlineCancel
      className="bg-red-400 rounded-2xl"  onClick={onClose}/>
    </div>
  );
};

export default Chat;