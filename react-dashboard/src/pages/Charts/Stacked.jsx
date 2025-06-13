import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";

const data = [
  { month: "Jan", Sales: 4000, Revenue: 2400 },
  { month: "Feb", Sales: 3000, Revenue: 1398 },
  { month: "Mar", Sales: 2000, Revenue: 9800 },
  { month: "Apr", Sales: 2780, Revenue: 3908 },
  { month: "May", Sales: 1890, Revenue: 4800 },
  { month: "Jun", Sales: 2390, Revenue: 3800 },
  { month: "Jul", Sales: 3490, Revenue: 4300 },
];

const Stacked = () => {
  return (
    <Card className="w-full max-w-4xl mx-auto p-4">
      <CardContent>
        <h2 className="text-lg font-semibold mb-4">Monthly Sales vs Revenue (Stacked)</h2>
        <div className="w-full h-96">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Sales" stackId="a" fill="#8884d8" />
              <Bar dataKey="Revenue" stackId="a" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default Stacked;


