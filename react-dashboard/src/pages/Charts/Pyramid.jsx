
import React from "react";
import { Chart } from "react-google-charts";
import { Card, CardContent } from "@/components/ui/card";

const data = [
  ["Stage", "Count"],
  ["Prospects", 3000],
  ["Qualified", 2000],
  ["Proposals", 1200],
  ["Negotiations", 800],
  ["Closed", 400],
];

const options = {
  chartArea: { width: '80%', height: '80%' },
  legend: { position: "none" },
  colors: ['#4ade80', '#22d3ee', '#818cf8', '#facc15', '#f87171'],
  pieHole: 0.4,
  is3D: false,
  pieSliceText: 'label',
  // Use pie chart type to mimic pyramid visually; Google Charts doesn’t have a dedicated pyramid chart type
};

const PyramidChartCard = () => (
  <Card className="max-w-md mx-auto">
    <CardContent>
      <h2 className="text-lg font-semibold mb-4">Sales Funnel (Pyramid)</h2>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width="100%"
        height="300px"
      />
    </CardContent>
  </Card>
);

export default PyramidChartCard;

