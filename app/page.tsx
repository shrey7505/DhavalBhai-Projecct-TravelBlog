import Link from "next/link";
import Image from "next/image";
import { ArrowRight, TrendingUp, Mail, MapPin, Compass, Star } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import ArticleCard from "@/components/ArticleCard";
import DestinationCard from "@/components/DestinationCard";
import NewsletterForm from "@/components/NewsletterForm";
import { getAllPosts, getAllCategories, getFeaturedPosts, destinations } from "@/lib/server-data";

export const dynamic = "force-dynamic";

export default function HomePage() {
  const posts = getAllPosts();
  const categories = getAllCategories();
  const featuredPosts = getFeaturedPosts();
  const heroPosts = featuredPosts[0];
  const latestPosts = posts.slice(0, 6);

  return (
    <>
      {/* Hero Banner */}
      {heroPosts && <HeroBanner post={heroPosts} />}

      {/* Featured Articles Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <TrendingUp className="w-4 h-4 text-amber" />
              <span className="text-xs font-bold text-amber tracking-widest uppercase">
                Editor's Picks
              </span>
            </div>
            <h2
              className="text-3xl font-bold text-navy"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Featured Stories
            </h2>
          </div>
          <Link
            href="/search"
            className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-amber transition-colors"
          >
            View All
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Main featured grid: big card + 2 smaller */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Big featured card */}
          <div className="lg:col-span-2">
            {featuredPosts[1] && (
              <ArticleCard post={featuredPosts[1]} variant="featured" />
            )}
          </div>

          {/* Two smaller featured cards */}
          <div className="flex flex-col gap-4">
            {featuredPosts.slice(2, 4).map((post) => (
              <ArticleCard key={post.id} post={post} variant="horizontal" />
            ))}
            {featuredPosts.length < 4 &&
              posts
                .filter((p) => !p.featured)
                .slice(0, 4 - featuredPosts.length)
                .map((post) => <ArticleCard key={post.id} post={post} variant="horizontal" />)}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-amber tracking-widest uppercase block mb-1">
              Explore Topics
            </span>
            <h2
              className="text-3xl font-bold text-navy"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Browse by Category
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="group relative rounded-xl overflow-hidden aspect-[3/4] block shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 200px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h3
                    className="text-white text-lg sm:text-xl font-bold leading-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {cat.name}
                  </h3>
                  <p className="text-gray-300 text-xs mt-1 line-clamp-2 hidden sm:block">
                    {cat.description}
                  </p>
                  <span className="mt-2 text-amber text-xs font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-bold text-amber tracking-widest uppercase block mb-1">
              Fresh Content
            </span>
            <h2
              className="text-3xl font-bold text-navy"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Latest Articles
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestPosts.map((post) => (
            <ArticleCard key={post.id} post={post} variant="default" />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/search"
            className="inline-flex items-center gap-2 border-2 border-navy text-navy font-bold px-8 py-3 rounded-lg hover:bg-navy hover:text-white transition-colors duration-200"
          >
            See All Articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-amber tracking-widest uppercase block mb-1">
              Where to Next?
            </span>
            <h2
              className="text-3xl font-bold text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Destinations We Love
            </h2>
            <p className="mt-2 text-gray-300 text-sm max-w-xl mx-auto">
              From ancient cities to untamed wilderness — discover our hand-picked destinations.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {destinations.map((destination) => (
              <DestinationCard key={destination.slug} destination={destination} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative overflow-hidden bg-navy py-20">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-amber -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-amber translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(201,149,45,0.08),_transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left: copy */}
            <div>
              <div className="inline-flex items-center gap-2 bg-amber/20 text-amber text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
                <Mail className="w-3.5 h-3.5" />
                Free Weekly Newsletter
              </div>
              <h2
                className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5"
                style={{ fontFamily: "var(--font-display)" }}
              >
                The World Is Waiting.{" "}
                <span className="text-amber">Your Inbox Too.</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Every Thursday, we send one beautifully crafted email packed with destination guides,
                hidden gems, and practical tips — curated by our team of full-time travelers.
              </p>

              {/* Benefits */}
              <ul className="space-y-3 mb-8">
                {[
                  { icon: MapPin, text: "A new destination deep-dive every week" },
                  { icon: Compass, text: "Insider tips you won't find on travel forums" },
                  { icon: Star, text: "Exclusive reader deals and itinerary guides" },
                ].map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-3 text-gray-200 text-sm">
                    <div className="w-7 h-7 rounded-full bg-amber/20 flex items-center justify-center shrink-0">
                      <Icon className="w-3.5 h-3.5 text-amber" />
                    </div>
                    {text}
                  </li>
                ))}
              </ul>

              {/* Social proof */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full ring-2 ring-navy overflow-hidden relative bg-gray-600"
                    >
                      <Image
                        src={`https://picsum.photos/seed/avatar${i}/32/32`}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="32px"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-gray-300 text-sm">
                  <span className="text-white font-bold">50,000+</span> adventurers already subscribed
                </p>
              </div>
            </div>

            {/* Right: form card */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-8 sm:p-10">
              <p
                className="text-white text-2xl font-bold mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Get Your Free Issue
              </p>
              <p className="text-gray-400 text-sm mb-6">
                Join the community. First issue in your inbox within minutes.
              </p>
              <NewsletterForm variant="dark" />
              <p className="mt-4 text-xs text-gray-500 text-center">
                No spam. No ads. Unsubscribe with one click, anytime.
              </p>

              {/* Trust badges */}
              <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-center">
                {[
                  { value: "50K+", label: "Readers" },
                  { value: "4 yrs", label: "Publishing" },
                  { value: "Weekly", label: "Cadence" },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <p className="text-white font-bold text-lg" style={{ fontFamily: "var(--font-display)" }}>
                      {value}
                    </p>
                    <p className="text-gray-400 text-xs">{label}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
