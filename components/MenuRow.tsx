import React from "react";
import Link from "next/link";
import { ServiceItem } from "@/lib/site";

interface MenuRowProps {
  item: ServiceItem;
}

export function MenuRow({ item }: MenuRowProps) {
  return (
    <article
      className="group py-4 border-b border-[#0b4f6c]/10 hover:border-[#c9a45c]/50 transition-colors"
      aria-label={`${item.name} service`}
    >
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-2">
        <div className="flex items-baseline gap-3 flex-1 min-w-0">
          <span className="font-mono text-xs md:text-sm font-semibold text-[#1b7f9e] tracking-wider select-none">
            {item.number}
          </span>
          <h4 className="font-display text-lg md:text-xl font-bold text-[#062a3a] group-hover:text-[#0b4f6c] transition-colors">
            {item.name}
            {item.isPopular && (
              <span className="ml-2.5 inline-block text-[10px] uppercase font-sans font-semibold tracking-wider bg-[#f9d5e1] text-[#0b4f6c] px-2 py-0.5 rounded-full align-middle">
                Signature
              </span>
            )}
          </h4>
          <span className="dotted-leader hidden sm:block" aria-hidden="true" />
        </div>

        <div className="flex items-center justify-between sm:justify-end gap-4 mt-1 sm:mt-0 shrink-0">
          <span className="font-sans font-semibold text-sm md:text-base text-[#0b4f6c]">
            {item.price}
          </span>
          <Link
            href={`/book?service=${encodeURIComponent(item.name)}`}
            className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#0b4f6c] text-white hover:bg-[#1b7f9e] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a45c] min-h-[36px]"
          >
            Book
          </Link>
        </div>
      </div>

      <div className="mt-1 sm:mt-1.5 pl-7 sm:pl-8 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs md:text-sm text-[#062a3a]/75">
        <p className="max-w-2xl leading-relaxed">{item.description}</p>
        {item.duration && (
          <span className="text-[11px] font-medium text-[#1b7f9e]">
            Est: {item.duration}
          </span>
        )}
      </div>
    </article>
  );
}
