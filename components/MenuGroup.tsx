import React from "react";
import { ServiceGroup } from "@/lib/site";
import { MenuRow } from "./MenuRow";
import { Photo } from "./Photo";

interface MenuGroupProps {
  group: ServiceGroup;
  showImage?: boolean;
}

export function MenuGroup({ group, showImage = false }: MenuGroupProps) {
  return (
    <section
      id={group.id}
      aria-labelledby={`heading-${group.id}`}
      className="py-8 md:py-12 border-b border-[#0b4f6c]/15 last:border-b-0"
    >
      <div className={`grid grid-cols-1 ${showImage ? "lg:grid-cols-12 gap-8 lg:gap-12" : "gap-6"}`}>
        {showImage && (
          <div className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-28 overflow-hidden rounded-3xl border border-[#c9a45c]/35 shadow-xl bg-white p-2.5 space-y-2.5">
              <div className="overflow-hidden rounded-2xl bg-[#f0e8eb] aspect-[4/5] relative">
                <Photo
                  filename={group.image}
                  alt={`${group.title} category cover`}
                  fill
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="py-2.5 px-4 bg-[#0b4f6c] text-[#f9d5e1] text-center rounded-xl">
                <span className="font-display text-xs tracking-widest uppercase font-bold text-white">
                  {group.title}
                </span>
              </div>
            </div>
          </div>
        )}

        <div className={showImage ? "lg:col-span-8" : "w-full"}>
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-6 h-[2px] bg-[#c9a45c]" aria-hidden="true" />
              <span className="text-xs uppercase tracking-widest font-bold text-[#1b7f9e]">
                Empire Collection
              </span>
            </div>
            <h3
              id={`heading-${group.id}`}
              className="font-display text-2xl md:text-3xl font-bold text-[#0b4f6c]"
            >
              {group.title}
            </h3>
            <p className="text-sm md:text-base text-[#062a3a]/80 mt-1 max-w-xl">
              {group.description}
            </p>
          </div>

          <div className="divide-y-0">
            {group.items.map((item) => (
              <MenuRow key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
