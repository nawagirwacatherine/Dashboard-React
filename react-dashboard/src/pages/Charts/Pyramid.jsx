import React from 'react'

const Pyramid = () => {
  return (
    <div>Pyramid</div>
  )
}

export default Pyramid


// ShadCN UI doesn’t provide built-in **pyramid chart** components, but you can create one by integrating a chart library that supports pyramid charts alongside ShadCN UI components for layout and styling.

// ---

// ### ✅ How to Add a Pyramid Chart in React with ShadCN UI

// The best way is to use **[react-fusioncharts](https://www.npmjs.com/package/react-fusioncharts)** or **[react-google-charts](https://react-google-charts.com/)** since they support pyramid charts.

// ---

// ## Option 1: Using **React Google Charts**

// ### 1. Install

// ```bash
// npm install react-google-charts
// ```

// ### 2. Pyramid Chart Component

// ```jsx
// import React from "react";
// import { Chart } from "react-google-charts";
// import { Card, CardContent } from "@/components/ui/card";

// const data = [
//   ["Stage", "Count"],
//   ["Prospects", 3000],
//   ["Qualified", 2000],
//   ["Proposals", 1200],
//   ["Negotiations", 800],
//   ["Closed", 400],
// ];

// const options = {
//   chartArea: { width: '80%', height: '80%' },
//   legend: { position: "none" },
//   colors: ['#4ade80', '#22d3ee', '#818cf8', '#facc15', '#f87171'],
//   pieHole: 0.4,
//   is3D: false,
//   pieSliceText: 'label',
//   // Use pie chart type to mimic pyramid visually; Google Charts doesn’t have a dedicated pyramid chart type
// };

// const PyramidChartCard = () => (
//   <Card className="max-w-md mx-auto">
//     <CardContent>
//       <h2 className="text-lg font-semibold mb-4">Sales Funnel (Pyramid)</h2>
//       <Chart
//         chartType="PieChart"
//         data={data}
//         options={options}
//         width="100%"
//         height="300px"
//       />
//     </CardContent>
//   </Card>
// );

// export default PyramidChartCard;
// ```

// ---

// ## Option 2: Using **React FusionCharts**

// If you want an actual pyramid chart (funnel chart or pyramid), FusionCharts supports it natively.

// ### 1. Install

// ```bash
// npm install fusioncharts react-fusioncharts
// ```

// ### 2. Pyramid Chart Component

// ```jsx
// import React from "react";
// import FusionCharts from "fusioncharts";
// import Charts from "fusioncharts/fusioncharts.charts";
// import ReactFC from "react-fusioncharts";
// import Funnel from "fusioncharts/fusioncharts.funnel";
// import { Card, CardContent } from "@/components/ui/card";

// Charts(FusionCharts);
// Funnel(FusionCharts);

// const dataSource = {
//   chart: {
//     caption: "Sales Funnel",
//     subcaption: "2025",
//     theme: "fusion",
//     formatNumberScale: "0",
//     labelDistance: "15",
//   },
//   data: [
//     { label: "Prospects", value: "3000" },
//     { label: "Qualified Leads", value: "2000" },
//     { label: "Proposals", value: "1200" },
//     { label: "Negotiations", value: "800" },
//     { label: "Closed Deals", value: "400" },
//   ],
// };

// const PyramidChartCard = () => (
//   <Card className="max-w-md mx-auto">
//     <CardContent>
//       <h2 className="text-lg font-semibold mb-4">Sales Funnel (Pyramid)</h2>
//       <ReactFC
//         type="funnel"
//         width="100%"
//         height="300"
//         dataFormat="json"
//         dataSource={dataSource}
//       />
//     </CardContent>
//   </Card>
// );

// export default PyramidChartCard;
// ```

// ---

// ## Wrap it in ShadCN UI

// Both examples wrap the chart inside a ShadCN `Card` with padding and title for UI consistency.

// ---

// ### Summary

// | Library             | Pyramid Support                            | Easy Integration | License             |
// | ------------------- | ------------------------------------------ | ---------------- | ------------------- |
// | react-google-charts | No direct pyramid, use pie for funnel look | Easy             | Free / Google       |
// | react-fusioncharts  | Yes, funnel/pyramid charts supported       | Moderate         | Free + paid options |

// ---

// If you want, I can help build a full React + ShadCN UI pyramid/funnel example with any of these libraries, plus drag/drop or interaction.

// Just tell me which chart library you prefer or if you want me to pick!
