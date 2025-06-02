
import React from 'react'

const Pie = () => {
  return (
    <div>Pie</div>
  )
}

export default Pie




// ShadCN UI doesn't include built-in chart components like pie charts — but it integrates **perfectly** with chart libraries like **[Recharts](https://recharts.org/)** or **[Chart.js](https://www.chartjs.org/)** via wrappers like `react-chartjs-2`.

// ---

// ### ✅ Recommended Setup: **Recharts + ShadCN UI**

// Here’s how to **add a Pie Chart** inside a ShadCN `Card` using Recharts.

// ---

// ## ✅ 1. **Install Recharts**

// ```bash
// npm install recharts
// ```

// ---

// ## ✅ 2. **Create PieChart Component**

// ### 📁 `src/components/PieChartCard.jsx`

// ```jsx
// import React from "react";
// import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
// import { Card, CardContent } from "@/components/ui/card";

// const data = [
//   { name: "Design", value: 400 },
//   { name: "Development", value: 300 },
//   { name: "Marketing", value: 200 },
//   { name: "Sales", value: 100 },
// ];

// const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];

// const PieChartCard = () => {
//   return (
//     <Card className="w-full max-w-md mx-auto">
//       <CardContent className="p-4">
//         <h2 className="text-lg font-semibold mb-4">Project Breakdown</h2>
//         <ResponsiveContainer width="100%" height={250}>
//           <PieChart>
//             <Pie
//               data={data}
//               dataKey="value"
//               nameKey="name"
//               cx="50%"
//               cy="50%"
//               outerRadius={80}
//               label
//             >
//               {data.map((entry, index) => (
//                 <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//               ))}
//             </Pie>
//             <Tooltip />
//             <Legend />
//           </PieChart>
//         </ResponsiveContainer>
//       </CardContent>
//     </Card>
//   );
// };

// export default PieChartCard;
// ```

// ---

// ## ✅ 3. **Use It in App**

// ### 📁 `src/App.jsx`

// ```jsx
// import React from "react";
// import PieChartCard from "./components/PieChartCard";

// function App() {
//   return (
//     <div className="min-h-screen bg-background p-6">
//       <h1 className="text-3xl font-bold text-center mb-6">Dashboard</h1>
//       <PieChartCard />
//     </div>
//   );
// }

// export default App;
// ```

// ---

// ## 🧩 Bonus Tips

// * Use ShadCN `DropdownMenu` or `Tabs` to filter or switch between charts.
// * Wrap charts inside `Card` or `Dialog` for UI consistency.
// * Add Tailwind `dark:` styles if using dark mode.

// ---

// Let me know if you want:

// * A **dynamic pie chart** with props or API data
// * A **dashboard layout** with multiple charts (e.g. bar, line, pie)
// * A **ShadCN Dialog** with an embedded chart

// I'll tailor the code for that.
