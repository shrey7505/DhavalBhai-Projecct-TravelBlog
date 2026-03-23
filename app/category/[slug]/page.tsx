import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";
import ArticleCard from "@/components/ArticleCard";
import { getAllCategories, getPostsByCategory, getCategoryBySlug } from "@/lib/server-data";

export const dynamic = "force-dynamic";

const categories = getAllCategories();
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return { title: "Category Not Found" };
  return {
    title: `${category.name} — Travel Articles`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const categoryPosts = getPostsByCategory(slug);

  return (
    <>
      {/* Category Hero */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <Image
          src={category.image}
          alt={category.name}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="relative h-full flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-10">
            {/* Breadcrumb */}
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-gray-300 hover:text-white text-sm mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <div className="flex items-center gap-3 mb-2">
              <div
                className="w-1.5 h-8 rounded-full"
                style={{ backgroundColor: category.color }}
              />
              <h1
                className="text-white text-4xl md:text-5xl font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {category.name}
              </h1>
            </div>
            <p className="text-gray-200 text-lg max-w-xl">{category.description}</p>
            <div className="mt-4 flex items-center gap-2 text-gray-300 text-sm">
              <BookOpen className="w-4 h-4" />
              <span>{categoryPosts.length} articles</span>
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {categoryPosts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No articles in this category yet.</p>
          </div>
        ) : (
          <>
            {/* Featured post for this category */}
            {categoryPosts[0] && (
              <div className="mb-8">
                <ArticleCard post={categoryPosts[0]} variant="featured" />
              </div>
            )}

            {/* Rest of posts */}
            {categoryPosts.length > 1 && (
              <>
                <div className="flex items-center gap-3 mb-6 mt-10">
                  <div className="h-px flex-1 bg-gray-200" />
                  <span className="text-xs font-bold text-gray-400 tracking-widest uppercase px-3">
                    More Articles
                  </span>
                  <div className="h-px flex-1 bg-gray-200" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryPosts.slice(1).map((post) => (
                    <ArticleCard key={post.id} post={post} variant="default" />
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </section>

      {/* Other Categories */}
      <section className="bg-cream py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-xl font-bold text-navy mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Explore Other Categories
          </h2>
          <div className="flex flex-wrap gap-3">
            {categories
              .filter((c) => c.slug !== slug)
              .map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/category/${cat.slug}`}
                  className="px-5 py-2.5 rounded-full border-2 border-navy text-navy text-sm font-semibold hover:bg-navy hover:text-white transition-colors duration-200"
                >
                  {cat.name}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
