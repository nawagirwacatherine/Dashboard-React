
// import React from "react";
// import { Card, CardContent } from "@/components/ui/card";

// const items = [
//   { id: 1, label: "High", value: 90 },
//   { id: 2, label: "Medium", value: 50 },
//   { id: 3, label: "Low", value: 20 },
// ];

// const getColor = (value) => {
//   if (value > 70) return "text-green-600";
//   if (value > 40) return "text-yellow-600";
//   return "text-red-600";
// };

// const ColorMappingList = () => (
//   <Card className="max-w-md mx-auto">
//     <CardContent>
//       <h2 className="text-lg font-semibold mb-4">Status List with Color Mapping</h2>
//       <ul>
//         {items.map((item) => (
//           <li key={item.id} className={`mb-2 font-medium ${getColor(item.value)}`}>
//             {item.label} — {item.value}%
//           </li>
//         ))}
//       </ul>
//     </CardContent>
//   </Card>
// );

// export default ColorMappingList;


import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const items = [
  { id: 1, label: "High", value: 90 },
  { id: 2, label: "Medium", value: 50 },
  { id: 3, label: "Low", value: 20 },
];

const getColor = (value) => {
  if (value > 70) return "bg-green-500";
  if (value > 40) return "bg-yellow-500";
  return "bg-red-500";
};

const ColorMappingList = () => (
  <Card className="max-w-md mx-auto p-4">
    <CardContent>
      <h2 className="text-lg font-semibold mb-4">Status List with Color Mapping</h2>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item.id}>
            <div className="flex justify-between mb-1">
              <span className="font-medium">{item.label}</span>
              <span className="text-sm text-gray-600">{item.value}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className={`h-3 rounded-full ${getColor(item.value)}`}
                style={{ width: `${item.value}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

export default ColorMappingList;


