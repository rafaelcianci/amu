"use client";

import { usePathname } from "next/navigation";
import { ScrollFX } from "./ScrollFX";

/** Remounts ScrollFX on every route change so it re-scans the new page's DOM. */
export function RouteScrollFX() {
  const pathname = usePathname();
  return <ScrollFX key={pathname} />;
}
