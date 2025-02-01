import {
  ArrowUpRight,
  ArrowDownRight,
  Users,
  MousePointerClick,
  ShoppingCart,
  CreditCard,
} from "lucide-react";

export default function MetricsGrid() {
  const metrics = [
    {
      title: "Total Users",
      value: "24,589",
      change: "+12.5%",
      trend: "up",
      icon: Users,
    },
    {
      title: "Total Clicks",
      value: "168,789",
      change: "+8.2%",
      trend: "up",
      icon: MousePointerClick,
    },
    {
      title: "Products Viewed",
      value: "45,223",
      change: "-3.1%",
      trend: "down",
      icon: ShoppingCart,
    },
    {
      title: "Revenue",
      value: "$86,289",
      change: "+15.3%",
      trend: "up",
      icon: CreditCard,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {metrics.map((metric) => {
        const Icon = metric.icon;
        return (
          <div key={metric.title} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">{metric.title}</p>
                <h3 className="text-2xl font-bold mt-1">{metric.value}</h3>
              </div>
              <div
                className={`p-2 rounded-lg ${
                  metric.trend === "up" ? "bg-green-100" : "bg-red-100"
                }`}
              >
                <Icon
                  className={`w-5 h-5 ${
                    metric.trend === "up" ? "text-green-600" : "text-red-600"
                  }`}
                />
              </div>
            </div>
            <div className="flex items-center mt-4">
              {metric.trend === "up" ? (
                <ArrowUpRight className="w-4 h-4 text-green-600" />
              ) : (
                <ArrowDownRight className="w-4 h-4 text-red-600" />
              )}
              <span
                className={`text-sm ml-1 ${
                  metric.trend === "up" ? "text-green-600" : "text-red-600"
                }`}
              >
                {metric.change} from last period
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
