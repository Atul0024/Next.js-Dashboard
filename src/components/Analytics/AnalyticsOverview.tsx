"use client";

import dynamic from "next/dynamic";

const Chart = dynamic(() => import("./Chart"), {
  ssr: false,
  loading: () => (
    <div className="h-[400px] w-full bg-gray-100 animate-pulse rounded-lg" />
  ),
});

export default function AnalyticsOverview() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-lg font-semibold mb-4">Performance Overview</h2>
      <div className="h-[400px]">
        <Chart />
      </div>
    </div>
  );
}
