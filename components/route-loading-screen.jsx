"use client";

import { usePathname } from "next/navigation";
import LoadingScreen from "./loading-screen";

export function RouteLoadingScreen() {
  const pathname = usePathname();
  return <LoadingScreen key={pathname} />;
}
