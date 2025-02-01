// components/Charts/Chart.tsx
"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "0", users: 100, clicks: 50 },
  { name: "1", users: 850, clicks: 450 },
  { name: "2", users: 700, clicks: 350 },
  { name: "3", users: 400, clicks: 500 },
  { name: "4", users: 500, clicks: 750 },
  { name: "5", users: 750, clicks: 900 },
  { name: "6", users: 100, clicks: 600 },
  { name: "7", users: 300, clicks: 650 },
];

export default function Chart() {
  return (
    <ResponsiveContainer>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="users" stroke="#3B82F6" />
        <Line type="monotone" dataKey="clicks" stroke="#EF4444" />
      </LineChart>
    </ResponsiveContainer>
  );
}
