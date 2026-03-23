"use client";

import { useState } from "react";

interface NewsletterFormProps {
  variant?: "default" | "dark" | "compact";
}

export default function NewsletterForm({ variant = "default" }: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  if (submitted) {
    return (
      <p className={`text-sm font-semibold ${variant === "dark" ? "text-amber" : "text-green-600"}`}>
        Thanks for subscribing!
      </p>
    );
  }

  if (variant === "compact") {
    return (
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 text-xs focus:outline-none focus:ring-1 focus:ring-amber"
        />
        <button
          type="submit"
          className="w-full py-2 bg-amber hover:bg-amber-light text-white font-bold text-xs rounded-lg transition-colors"
        >
          Subscribe
        </button>
      </form>
    );
  }

  if (variant === "dark") {
    return (
      <form onSubmit={handleSubmit} className="flex w-full md:w-auto gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="flex-1 md:w-72 px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber focus:border-amber"
        />
        <button
          type="submit"
          className="px-6 py-2.5 bg-amber hover:bg-amber-light text-white font-semibold text-sm rounded-lg transition-colors whitespace-nowrap"
        >
          Subscribe
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email address"
        required
        className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-navy focus:outline-none text-sm"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-navy text-white font-bold rounded-lg hover:bg-navy-light transition-colors whitespace-nowrap text-sm"
      >
        Subscribe Free
      </button>
    </form>
  );
}
