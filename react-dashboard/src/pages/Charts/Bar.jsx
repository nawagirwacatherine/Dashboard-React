import React from 'react'

const Bar = () => {
  return (
    <div>Bar</div>
  )
}

export default Bar



// ShadCN UI doesn’t include built-in chart components like bar charts, but you can easily integrate a popular React chart library such as **Recharts** with ShadCN UI components for styling and layout.

// ---

// ### Here’s how to add a **Bar Chart** inside a ShadCN UI `Card` in React:

// ---

// ## 1. Install Recharts

// ```bash
// npm install recharts
// ```

// ---

// ## 2. Create a BarChart Component

// ```jsx
// import React from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// const data = [
//   { name: "Jan", sales: 4000, profit: 2400 },
//   { name: "Feb", sales: 3000, profit: 1398 },
//   { name: "Mar", sales: 2000, profit: 9800 },
//   { name: "Apr", sales: 2780, profit: 3908 },
//   { name: "May", sales: 1890, profit: 4800 },
//   { name: "Jun", sales: 2390, profit: 3800 },
//   { name: "Jul", sales: 3490, profit: 4300 },
// ];

// const BarChartCard = () => (
//   <Card className="max-w-3xl mx-auto">
//     <CardContent className="p-4">
//       <h2 className="text-lg font-semibold mb-4">Monthly Sales & Profit</h2>
//       <ResponsiveContainer width="100%" height={300}>
//         <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Bar dataKey="sales" fill="#4ade80" />
//           <Bar dataKey="profit" fill="#22d3ee" />
//         </BarChart>
//       </ResponsiveContainer>
//     </CardContent>
//   </Card>
// );

// export default BarChartCard;
// ```

// ---

// ## 3. Use It in Your App

// ```jsx
// import React from "react";
// import BarChartCard from "./components/BarChartCard";

// function App() {
//   return (
//     <div className="min-h-screen bg-background p-6">
//       <h1 className="text-3xl font-bold text-center mb-6">Dashboard</h1>
//       <BarChartCard />
//     </div>
//   );
// }

// export default App;
// ```

// ---

// ### Summary

// * Use **Recharts** for easy React charting.
// * Wrap the chart inside a ShadCN UI `Card` for consistent styling.
// * Use `ResponsiveContainer` so the chart is mobile-friendly.

// ---

// If you want me to help with **line charts**, **pie charts**, or add **interactions** (like tooltips, filters), just ask!
