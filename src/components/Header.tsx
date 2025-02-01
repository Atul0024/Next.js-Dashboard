"use client";

import React, { useState } from "react";
import { Search, Bell, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface SearchHeaderProps {
  userName?: string;
}

const SearchHeader = ({ userName = "Guest" }: SearchHeaderProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="w-full px-4 py-2 flex items-center justify-between">
      {/* Search Section */}
      <div className="relative flex-1 max-w-2xl">
        <div className="relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="search"
            className="w-full py-2 pl-10 pr-4 bg-gray-200/70 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors"
          />
        </div>
      </div>

      {/* User Section */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <button className="p-2 hover:bg-gray-200 rounded-full transition-colors">
          <Bell className="h-5 w-5 text-gray-600" />
        </button>

        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2 p-1 hover:bg-gray-200 rounded-full transition-colors">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">{userName[0]}</span>
              </div>
              <span className="text-sm text-gray-700">{userName}</span>
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Sign out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default SearchHeader;
