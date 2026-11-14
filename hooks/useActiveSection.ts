"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function useActiveSection(sectionIds: string[], offset = 100) {
  const [activeSection, setActiveSection] = useState<string>("");
  const pathname = usePathname();

  useEffect(() => {
    // Only subscribe to scroll listener on homepage
    if (pathname !== "/") {
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      let matched = false;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            matched = true;
            return;
          }
        }
      }

      if (!matched || window.scrollY < 150) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset, pathname]);

  // Derive active section directly based on pathname
  if (pathname.startsWith("/projects")) {
    return "projects";
  }

  if (pathname !== "/") {
    return "";
  }

  return activeSection;
}
