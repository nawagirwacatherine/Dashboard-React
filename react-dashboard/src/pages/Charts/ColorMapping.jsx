
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const items = [
  { id: 1, label: "High", value: 90 },
  { id: 2, label: "Medium", value: 50 },
  { id: 3, label: "Low", value: 20 },
];

const getColor = (value) => {
  if (value > 70) return "text-green-600";
  if (value > 40) return "text-yellow-600";
  return "text-red-600";
};

const ColorMappingList = () => (
  <Card className="max-w-md mx-auto">
    <CardContent>
      <h2 className="text-lg font-semibold mb-4">Status List with Color Mapping</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id} className={`mb-2 font-medium ${getColor(item.value)}`}>
            {item.label} — {item.value}%
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

export default ColorMappingList;

