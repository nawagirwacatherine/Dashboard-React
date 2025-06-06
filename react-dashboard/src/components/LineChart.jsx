
import React from 'react'
import {
    LineChart as ReLineChart,
    Line, 
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
} from 'recharts';
import { Card, CardContent } from '@/components/ui/card';

const data = [
    { month: 'Jan', rate: 2.3},
    { month: 'Feb', rate: 2.8},
    { month: 'march',rate: 3.1 },
    { month: 'Apr', rate: 2.9 },
    { month: 'May', rate: 3.5 },
    { month: 'Jun', rate: 3.0 },
];

const CustomTooltip = ( { active, payload, label}) => {
    if (!active || !payload || !payload.length) return null;

    const { rate } = payload[0].payload;

    return (
    <div className="rounded-md border bg-white p-3 shadow-md dark:bg-neutral-900 dark:border-neutral-700">
      <p className="text-sm font-semibold text-muted-foreground">{label}</p>
      <p className="text-base font-medium text-foreground">Rate: {rate}%</p>
    </div>
  );

}


const LineChart = () => {
  return (
    <Card className="w-full">
      <CardContent className="h-[300px] p-0 pt-4">
        <ResponsiveContainer width="100%" height="100%">
          <ReLineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="rate"
              stroke="#8884d8"
              strokeWidth={2}
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
            />
          </ReLineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default LineChart;

