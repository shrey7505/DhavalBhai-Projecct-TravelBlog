import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight, Calendar } from "lucide-react";
import { Post, formatDate } from "@/lib/data";

interface HeroBannerProps {
  post: Post;
}

export default function HeroBanner({ post }: HeroBannerProps) {
  return (
    <section className="relative w-full h-[70vh] min-h-[500px] max-h-[750px] overflow-hidden">
      {/* Background image */}
      <Image
        src={post.image}
        alt={post.title}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative h-full flex items-end">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12 md:pb-16">
          <div className="max-w-2xl">
            {/* Category badge */}
            <Link
              href={`/category/${post.categorySlug}`}
              className="inline-block bg-amber text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4 hover:bg-amber-light transition-colors"
            >
              {post.category}
            </Link>

            {/* Title */}
            <h1
              className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="mt-4 text-gray-200 text-base sm:text-lg leading-relaxed max-w-xl">
              {post.excerpt}
            </p>

            {/* Meta + CTA */}
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex items-center gap-4 text-gray-300 text-sm">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {formatDate(post.date)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {post.readTime} min read
                </span>
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 bg-white text-navy font-bold px-6 py-3 rounded-lg hover:bg-amber hover:text-white transition-colors duration-200 text-sm group"
              >
                Read Article
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Author */}
            <div className="mt-6 flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-white/40">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </div>
              <div>
                <p className="text-white text-sm font-semibold">{post.author.name}</p>
                <p className="text-gray-400 text-xs">Staff Writer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
