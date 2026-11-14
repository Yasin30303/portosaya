import React from "react";
import Image from "next/image";
import { ProjectGalleryItem } from "@/types";

export function ProjectGallery({ items }: { items?: ProjectGalleryItem[] }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="space-y-6 my-12">
      <div className="font-mono text-xs uppercase tracking-wider text-muted">
        SYSTEM VISUALS &amp; INTERFACES
      </div>

      <div className="grid grid-cols-1 gap-8">
        {items.map((item, index) => (
          <figure
            key={index}
            className="rounded-2xl border border-border/80 bg-surface/50 overflow-hidden shadow-lg"
          >
            <div className="relative aspect-[16/10] w-full bg-surface border-b border-border/80">
              <Image
                src={item.url}
                alt={item.alt}
                fill
                sizes="(max-width: 1200px) 100vw, 1100px"
                className="object-contain object-center"
              />
            </div>
            {item.caption && (
              <figcaption className="p-4 sm:p-5 font-mono text-xs text-foreground-secondary bg-surface/80">
                <span>{item.caption}</span>
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </div>
  );
}

