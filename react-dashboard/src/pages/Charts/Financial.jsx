
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const data = [
  { date: "2024-05-01", price: 100, volume: 2400 },
  { date: "2024-05-02", price: 102, volume: 2210 },
  { date: "2024-05-03", price: 98, volume: 2290 },
  { date: "2024-05-04", price: 105, volume: 2000 },
  { date: "2024-05-05", price: 107, volume: 2181 },
  { date: "2024-05-06", price: 110, volume: 2500 },
  { date: "2024-05-07", price: 108, volume: 2100 },
];

const Financial = () => {
  return (
    <Card className="max-w-4xl mx-auto">
      <CardContent>
        <h2 className="text-lg font-semibold mb-4">Stock Price & Volume</h2>
        <ResponsiveContainer width="100%" height={300}>
          <>
            <LineChart
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 30 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" angle={-45} textAnchor="end" interval={0} />
              <YAxis yAxisId="left" domain={["auto", "auto"]} />
              <Tooltip />
              <Legend />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="price"
                stroke="#4ade80"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
            <BarChart
              data={data}
              margin={{ top: 230, right: 30, left: 20, bottom: 5 }}
              height={80}
            >
              <XAxis dataKey="date" hide />
              <YAxis yAxisId="right" orientation="right" hide />
              <Bar yAxisId="right" dataKey="volume" fill="#22d3ee" />
            </BarChart>
          </>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default Financial;

