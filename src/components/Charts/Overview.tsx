// components/Charts/Overview.tsx
"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import the chart component with no SSR
const Chart = dynamic(() => import("./Charts"), {
  ssr: false,
  loading: () => (
    <div className="h-[300px] w-full bg-gray-100 animate-pulse rounded-lg" />
  ),
});

export default function Overview() {
  return (
    <div className="h-[300px] w-full">
      <Chart />
    </div>
  );
}
