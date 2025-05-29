import React from 'react';
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';

const SparkLine = ({ id, height, width, color, data, type, CurrentColor }) => {
  return (
    <div>
      <SparklineComponent
        id={id}
        height={height}
        width={width}
        lineWidth={1}
        valueType="Numeric"
        fill={color}
        border={{ color: CurrentColor, width: 2 }}
        dataSource={data}
        xName="x"
        yName="y"
        type={type}
        tooltipSettings={{
          visible: true,
          format: '${x}: ${y}',
          trackLineSettings: {
            visible: true,
          },
        }}
      >
        <Inject services={[SparklineTooltip]} />
      </SparklineComponent>
    </div>
  );
};

export default SparkLine;



// import React from 'react';
// import {
//   LineChart,
//   Line,
//   Tooltip,
//   ResponsiveContainer,
// } from 'recharts';

// const SparkLine = ({ data, width, height, color }) => {
//   return (
//     <div className="rounded-md shadow-sm bg-white p-2">
//       <ResponsiveContainer width={width} height={height}>
//         <LineChart data={data}>
//           <Tooltip
//             contentStyle={{ backgroundColor: '#fff', borderColor: '#ccc' }}
//             labelFormatter={(value) => `X: ${value}`}
//             formatter={(value) => [`Y: ${value}`]}
//           />
//           <Line
//             type="monotone"
//             dataKey="y"
//             stroke={color}
//             strokeWidth={2}
//             dot={false}
//           />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default SparkLine;
