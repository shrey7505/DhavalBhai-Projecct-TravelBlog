import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Clock, Calendar, ArrowLeft, Tag } from "lucide-react";
import TableOfContents from "@/components/TableOfContents";
import { extractTocItems } from "@/lib/toc";
import RelatedPosts from "@/components/RelatedPosts";
import { CategoryBadge } from "@/components/ArticleCard";
import ArticleCard from "@/components/ArticleCard";
import {
  getAllPosts,
  getPostBySlug,
  getRelatedPosts,
  formatDate,
} from "@/lib/server-data";

export const dynamic = "force-dynamic";
import NewsletterForm from "@/components/NewsletterForm";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post, 3);
  const tocItems = extractTocItems(post.content);

  return (
    <>
      {/* Hero */}
      <section className="relative h-64 sm:h-80 md:h-[500px] overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
        <div className="relative h-full flex items-end">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-10">
            <Link
              href={`/category/${post.categorySlug}`}
              className="inline-flex items-center gap-1.5 text-gray-300 hover:text-white text-sm mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to {post.category}
            </Link>
            <CategoryBadge category={post.category} categorySlug={post.categorySlug} />
            <h1
              className="mt-3 text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-tight max-w-3xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Article body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main content */}
          <article className="flex-1 min-w-0 max-w-3xl">
            {/* Meta bar */}
            <div className="flex flex-wrap items-center gap-4 pb-6 border-b border-gray-200 mb-8">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-amber/30">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy">{post.author.name}</p>
                  <p className="text-xs text-gray-400">Staff Writer</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-400 text-sm ml-auto">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {formatDate(post.date)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {post.readTime} min read
                </span>
              </div>
            </div>

            {/* Excerpt */}
            <p
              className="text-gray-600 text-lg leading-relaxed mb-8 italic border-l-4 border-amber pl-5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {post.excerpt}
            </p>

            {/* Article content */}
            <div
              className="prose-magazine"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="mt-10 pt-6 border-t border-gray-200">
              <div className="flex flex-wrap items-center gap-2">
                <Tag className="w-4 h-4 text-gray-400" />
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/search?q=${encodeURIComponent(tag)}`}
                    className="text-xs bg-gray-100 hover:bg-amber hover:text-white text-gray-600 px-3 py-1 rounded-full transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* Author bio */}
            <div className="mt-10 p-6 bg-cream rounded-xl border border-gray-100 flex gap-5">
              <div className="relative w-16 h-16 shrink-0 rounded-full overflow-hidden ring-2 ring-amber/30">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <div>
                <p className="text-xs font-bold text-amber tracking-widest uppercase mb-1">
                  About the Author
                </p>
                <p
                  className="text-lg font-bold text-navy mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {post.author.name}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">{post.author.bio}</p>
              </div>
            </div>

            {/* Related Posts */}
            <RelatedPosts posts={relatedPosts} />
          </article>

          {/* Sidebar */}
          <aside className="lg:w-72 xl:w-80 shrink-0">
            <div className="sticky top-24 space-y-6">
              {/* Table of Contents */}
              {tocItems.length > 0 && <TableOfContents items={tocItems} />}

              {/* More from this category */}
              <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                <h3
                  className="text-sm font-bold text-navy mb-4 tracking-wide uppercase"
                >
                  More in {post.category}
                </h3>
                <div className="space-y-3">
                  {relatedPosts.slice(0, 2).map((relatedPost) => (
                    <ArticleCard
                      key={relatedPost.id}
                      post={relatedPost}
                      variant="horizontal"
                    />
                  ))}
                </div>
                <Link
                  href={`/category/${post.categorySlug}`}
                  className="mt-4 block text-center text-sm font-semibold text-amber hover:text-amber-dark transition-colors py-2 border border-amber rounded-lg"
                >
                  View All {post.category} Articles
                </Link>
              </div>

              {/* Newsletter mini */}
              <div className="bg-navy rounded-xl p-5 text-white">
                <p className="text-xs font-bold text-amber tracking-widest uppercase mb-2">
                  Newsletter
                </p>
                <p
                  className="text-lg font-bold mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Get Weekly Travel Picks
                </p>
                <p className="text-gray-300 text-xs mb-4">
                  Join 50,000+ readers. Free, every Thursday.
                </p>
                <NewsletterForm variant="compact" />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
