import Overview from "@/components/Charts/Overview";
import SearchHeader from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <SearchHeader userName="Guest" />
      <br />
      <h1 className="text-2xl font-bold mb-6">Today's Report</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { title: "Users", color: "bg-blue-400" },
          { title: "Clicks", color: "bg-gray-500" },
          { title: "Items", color: "bg-blue-600" },
          { title: "Sales", color: "bg-gray-600" },
        ].map(({ title, color }) => (
          <div
            key={title}
            className={`${color} rounded-lg shadow-md p-6 text-white`}
          >
            <h3 className="text-lg font-medium">{title}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Overview</h2>
          <div className="bg-white rounded-lg shadow-md p-4">
            <Overview />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Activity</h2>
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="space-y-4">
              {[
                { label: "Users", icon: "👤" },
                { label: "Clicked Events", icon: "🖱️" },
                { label: "Items", icon: "📊" },
                { label: "Sales", icon: "📈" },
              ].map(({ label, icon }) => (
                <div key={label} className="flex items-center gap-3">
                  <span>{icon}</span>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
