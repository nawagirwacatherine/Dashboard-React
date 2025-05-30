
import React from 'react';
import {
  LineChart,
  Line,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const SparkLine = ({ data, width, height, color }) => {
  return (
    <div className="rounded-md shadow-sm bg-white p-2">
      <ResponsiveContainer width={width} height={height}>
        <LineChart data={data}>
          <Tooltip
            contentStyle={{ backgroundColor: '#fff', borderColor: '#ccc' }}
            labelFormatter={(value) => `X: ${value}`}
            formatter={(value) => [`Y: ${value}`]}
          />
          <Line
            type="monotone"
            dataKey="y"
            stroke={color}
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SparkLine;
