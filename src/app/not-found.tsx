import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <main className="text-center space-y-6 mt-4">
      <h1 className="text-3xl font-semibold">
        The page you are looking for could not be found
      </h1>
      <Link href="/">Go back home</Link>
    </main>
  );
}
