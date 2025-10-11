import React from "react";
import { getCabins } from "@/app/_lib/data-service";

export default function page() {
  getCabins().then((data) => console.log(data));

  return <div>Cabins Page</div>;
}
