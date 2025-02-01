import SearchHeader from "@/components/Header";
import UserTable from "@/components/Users/UserTable";
import { UserPlus, Filter } from "lucide-react";

export default function UserPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <SearchHeader userName="Guest" />
      <br />
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">User Management</h1>
        <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
          <UserPlus size={20} />
          <span>Add User</span>
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div className="relative">
            <input
              type="search"
              placeholder="Search users..."
              className="pl-4 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-64"
            />
            <svg
              className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50 transition-colors w-full sm:w-auto">
            <Filter size={20} />
            <span>Filter</span>
          </button>
        </div>

        <UserTable />
      </div>
    </div>
  );
}
