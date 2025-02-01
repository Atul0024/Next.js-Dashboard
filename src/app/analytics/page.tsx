import AnalyticsOverview from "@/components/Analytics/AnalyticsOverview";
import MetricsGrid from "@/components/Analytics/MetricsGrid";
import SearchHeader from "@/components/Header";

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <SearchHeader userName="Guest" />
      <br />
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
        <select className="border rounded-lg px-4 py-2 bg-white">
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Last 90 days</option>
          <option>This year</option>
        </select>
      </div>

      <MetricsGrid />
      <AnalyticsOverview />
    </div>
  );
}
