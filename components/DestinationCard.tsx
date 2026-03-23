import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { Destination } from "@/lib/data";

interface DestinationCardProps {
  destination: Destination;
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <article className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <Link href={`/blog/${destination.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={destination.image}
            alt={destination.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Country badge */}
          <div className="absolute top-3 right-3">
            <span className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full font-medium border border-white/30">
              <MapPin className="w-3 h-3" />
              {destination.country}
            </span>
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <h3
              className="text-white text-xl font-bold leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {destination.name}
            </h3>
            <p className="mt-1 text-gray-200 text-sm line-clamp-2">{destination.description}</p>

            {/* Highlights */}
            <div className="mt-3 flex flex-wrap gap-1.5">
              {destination.highlights.slice(0, 2).map((highlight) => (
                <span
                  key={highlight}
                  className="text-xs bg-white/15 text-white px-2 py-0.5 rounded-full backdrop-blur-sm"
                >
                  {highlight}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-3 flex items-center gap-1 text-amber text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <span>Explore</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
