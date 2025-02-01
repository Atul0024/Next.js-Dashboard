"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Users, BarChart2, Settings, Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import logo from "../../public/logo.png";

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/user", label: "User", icon: Users },
    { href: "/analytics", label: "Analytics", icon: BarChart2 },
    { href: "/settings", label: "Settings", icon: Settings },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-16 bg-white shadow-sm md:w-64 z-20 px-4 flex items-center justify-between md:justify-start md:px-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-500 rounded-full overflow-hidden">
            <Image
              src={logo}
              width="44"
              height="54"
              className="h-8"
              alt="Textify Logo"
            />
          </div>
          <h1 className="text-xl font-bold">Textify</h1>
        </div>

        <button onClick={toggleSidebar} className="p-2 md:hidden">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      <div
        className={`
        fixed md:fixed 
        top-16 md:top-16
        left-0 
        h-[calc(100vh-4rem)]
        w-64 bg-white shadow-lg 
        p-4 
        transform transition-transform duration-200 ease-in-out
        md:transform-none
        z-30
        overflow-y-auto
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}
      >
        <nav className="space-y-2">
          {navItems.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
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

      <div className="pt-16 md:pl-64">{/* Your main content goes here */}</div>
    </>
  );
}
