import Link from "next/link";
import Image from "next/image";
import { getAllPosts, getAllCategories, formatDate } from "@/lib/server-data";
import { PlusCircle, FileText, Star, TrendingUp, ArrowRight } from "lucide-react";

export const dynamic = "force-dynamic";

export default function AdminDashboard() {
  const posts = getAllPosts();
  const categories = getAllCategories();
  const featured = posts.filter((p) => p.featured).length;
  const recentPosts = posts.slice(0, 5);

  const categoryStats = categories.map((cat) => ({
    ...cat,
    count: posts.filter((p) => p.categorySlug === cat.slug).length,
  }));

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Page header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-navy" style={{ fontFamily: "var(--font-display)" }}>
            Dashboard
          </h1>
          <p className="text-gray-500 text-sm mt-0.5">Welcome back, here's your content overview.</p>
        </div>
        <Link
          href="/admin/posts/new"
          className="flex items-center gap-2 px-4 py-2 bg-navy text-white text-sm font-bold rounded-lg hover:bg-navy-light transition-colors"
        >
          <PlusCircle className="w-4 h-4" />
          New Post
        </Link>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Total Posts", value: posts.length, icon: FileText, color: "bg-blue-50 text-blue-600" },
          { label: "Featured", value: featured, icon: Star, color: "bg-amber-50 text-amber-600" },
          { label: "Categories", value: categories.length, icon: TrendingUp, color: "bg-purple-50 text-purple-600" },
          {
            label: "This Month",
            value: posts.filter((p) => {
              const d = new Date(p.date);
              const now = new Date();
              return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
            }).length,
            icon: TrendingUp,
            color: "bg-green-50 text-green-600",
          },
        ].map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{label}</p>
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${color}`}>
                <Icon className="w-4 h-4" />
              </div>
            </div>
            <p className="text-3xl font-bold text-navy" style={{ fontFamily: "var(--font-display)" }}>
              {value}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Posts */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
            <h2 className="font-bold text-navy text-sm">Recent Posts</h2>
            <Link href="/admin/posts" className="text-xs text-amber hover:text-amber-dark flex items-center gap-1">
              View all <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="divide-y divide-gray-50">
            {recentPosts.map((post) => (
              <div key={post.id} className="flex items-center gap-4 px-5 py-3.5 hover:bg-gray-50 transition-colors">
                <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 bg-gray-100">
                  <Image src={post.image} alt={post.title} fill className="object-cover" sizes="48px" unoptimized />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-800 truncate">{post.title}</p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-xs text-gray-400">{formatDate(post.date)}</span>
                    <span className="text-gray-200">·</span>
                    <span className="text-xs text-gray-400">{post.category}</span>
                    {post.featured && (
                      <span className="text-[10px] bg-amber/10 text-amber font-bold px-1.5 py-0.5 rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                </div>
                <Link
                  href={`/admin/posts/${post.id}/edit`}
                  className="text-xs text-gray-400 hover:text-navy transition-colors shrink-0"
                >
                  Edit
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Category breakdown */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-5 py-4 border-b border-gray-100">
            <h2 className="font-bold text-navy text-sm">Posts by Category</h2>
          </div>
          <div className="p-5 space-y-4">
            {categoryStats.map((cat) => (
              <div key={cat.slug}>
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="font-semibold text-gray-700">{cat.name}</span>
                  <span className="text-gray-400">{cat.count} posts</span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-navy transition-all duration-500"
                    style={{ width: `${posts.length ? (cat.count / posts.length) * 100 : 0}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="px-5 pb-5">
            <Link
              href="/admin/posts/new"
              className="flex items-center justify-center gap-2 w-full py-2.5 border-2 border-dashed border-gray-200 rounded-lg text-sm font-semibold text-gray-400 hover:border-navy hover:text-navy transition-colors"
            >
              <PlusCircle className="w-4 h-4" />
              Create New Post
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
