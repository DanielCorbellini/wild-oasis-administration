import React from "react";
import Logo from "./Logo";

export default function Sidebar() {
  return (
    <aside className="py-15 px-12.5 border-r-1 border-gray-100 row-[1/-1] bg-gray-50">
      <Logo />
    </aside>
  );
}
