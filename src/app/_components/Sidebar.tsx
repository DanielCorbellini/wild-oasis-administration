import React from "react";
import Logo from "./Logo";
import MainNav from "./MainNav";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-[290px] flex flex-col gap-[2.5rem] py-15 px-9 border-r-1 border-gray-100 row-[1/-1] bg-gray-50">
      <Link href="/dashboard">
        <Logo />
      </Link>
      <MainNav />
    </aside>
  );
}
