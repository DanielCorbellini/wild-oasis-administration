"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";

export default function MainNav() {
  const pathName = usePathname();

  const navItems = [
    { href: "/dashboard", label: "Home", icon: <HiOutlineHome /> },
    { href: "/bookings", label: "Bookings", icon: <HiOutlineCalendarDays /> },
    { href: "/cabins", label: "Cabins", icon: <HiOutlineHomeModern /> },
    { href: "/users", label: "Users", icon: <HiOutlineUsers /> },
    { href: "/settings", label: "Settings", icon: <HiOutlineCog6Tooth /> },
  ];

  return (
    <nav className="mt-2 text-[1.2rem] font-medium">
      <ul>
        {navItems.map(({ href, label, icon }) => {
          const isActive = pathName === href;
          return (
            <li key={href} className="mb-2">
              <Link
                href={href}
                className={`flex items-center gap-3 px-6 py-3 transition-all rounded-md
                  ${
                    isActive
                      ? "bg-gray-200 text-gray-800"
                      : "text-gray-600 hover:bg-gray-300 hover:text-gray-800"
                  }`}
              >
                {icon}
                <span>{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
