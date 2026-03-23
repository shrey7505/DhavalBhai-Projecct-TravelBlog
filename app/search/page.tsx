import { Suspense } from "react";
import SearchClient from "./SearchClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search Articles",
  description: "Search through our complete library of travel articles, destination guides, and travel tips.",
};

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="text-gray-400">Loading search...</div>
        </div>
      }
    >
      <SearchClient />
    </Suspense>
  );
}
