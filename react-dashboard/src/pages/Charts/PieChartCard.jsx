
import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Card, CardContent } from "@/components/ui/card";

const data = [
  { name: "Design", value: 400 },
  { name: "Development", value: 300 },
  { name: "Marketing", value: 200 },
  { name: "Sales", value: 100 },
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];

const PieChartCard = () => {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardContent className="p-4">
        <h2 className="text-lg font-semibold mb-4">Project Breakdown</h2>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default PieChartCard;

