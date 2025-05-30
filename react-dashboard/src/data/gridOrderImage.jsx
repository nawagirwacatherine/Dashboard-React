
// import React from 'react'
// import avatar from "./avatar.jpg";

// const gridOrderImage = () => {
//   return (
//      <div style={{ display: 'flex', justifyContent: 'center' }}>
//     <img
//       src={avatar} 
//       alt="Order"
//       style={{ width: '40px', height: '40px', borderRadius: '50%' }}
//     />
//   </div>

//   )
// }

// export default gridOrderImage


import React from 'react';
import defaultAvatar from './avatar.jpg';

const gridOrderImage = (props) => {
  return (
    <div className="flex justify-center items-center">
      <img
        src={props.image || defaultAvatar}
        alt="Employee"
        className="w-10 h-10 rounded-full object-cover border border-gray-300 shadow-sm"
      />
    </div>
  );
};

 export default gridOrderImage



 