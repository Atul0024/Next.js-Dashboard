"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { date: "Mon", users: 2400, clicks: 4000, revenue: 2400 },
  { date: "Tue", users: 1398, clicks: 3000, revenue: 2210 },
  { date: "Wed", users: 9800, clicks: 2000, revenue: 2290 },
  { date: "Thu", users: 3908, clicks: 2780, revenue: 2000 },
  { date: "Fri", users: 4800, clicks: 1890, revenue: 2181 },
  { date: "Sat", users: 3800, clicks: 2390, revenue: 2500 },
  { date: "Sun", users: 4300, clicks: 3490, revenue: 2100 },
];

export default function Chart() {
  return (
    <ResponsiveContainer>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="users"
          stroke="#3B82F6"
          strokeWidth={2}
        />
        <Line
          type="monotone"
          dataKey="clicks"
          stroke="#EF4444"
          strokeWidth={2}
        />
        <Line
          type="monotone"
          dataKey="revenue"
          stroke="#10B981"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
