// components/Sidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Users, BarChart2, Settings } from "lucide-react";
import Image from "next/image";
import logo from "../../public/logo.png";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-full md:w-64 bg-white shadow-lg md:min-h-screen p-4">
      <div className="flex items-center gap-2 mb-8">
        <div className="w-8 h-8 bg-blue-500 rounded-full overflow-hidden">
          <Image
            src={logo}
            width="44"
            height="54"
            className="h-8"
            alt="Flowbite Logo"
          />
        </div>
        <h1 className="text-xl font-bold">Textify</h1>
      </div>

      <nav className="space-y-2">
        {[
          { href: "/", label: "Home", icon: Home },
          { href: "/user", label: "User", icon: Users },
          { href: "/analytics", label: "Analytics", icon: BarChart2 },
          { href: "/settings", label: "Settings", icon: Settings },
        ].map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={`flex items-center gap-3 px-4 py-2 rounded transition-colors ${
              pathname === href
                ? "bg-blue-50 text-blue-600"
                : "hover:bg-gray-50"
            }`}
          >
            <Icon className="w-5 h-5" />
            <span>{label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
