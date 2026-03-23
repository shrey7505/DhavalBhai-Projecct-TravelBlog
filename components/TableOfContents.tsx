"use client";

import { useEffect, useState } from "react";
import { BookOpen } from "lucide-react";
import type { TocItem } from "@/lib/toc";

export type { TocItem };

interface TableOfContentsProps {
  items: TocItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-10% 0% -80% 0%", threshold: 0 }
    );

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav className="bg-cream rounded-xl p-5 border border-gray-100">
      <div className="flex items-center gap-2 mb-4">
        <BookOpen className="w-4 h-4 text-amber" />
        <h3 className="text-sm font-bold text-navy tracking-wide uppercase">
          Table of Contents
        </h3>
      </div>
      <ol className="space-y-1">
        {items.map((item) => (
          <li
            key={item.id}
            style={{ paddingLeft: item.level === 3 ? "1rem" : "0" }}
          >
            <a
              href={`#${item.id}`}
              className={`block py-1 px-2 text-sm rounded transition-colors duration-150 ${
                activeId === item.id
                  ? "text-amber font-semibold bg-amber/10"
                  : "text-gray-600 hover:text-navy hover:bg-gray-100"
              }`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
