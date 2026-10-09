"use client";

import Image from "next/image";
import { personalInfo } from "@/lib/data/shared";
import { Card } from "../ui/Card";

/** Profile photo in a neumorphic frame. */
export function HeroPortrait() {
  return (
    <div className="relative aspect-square w-[min(16rem,calc(100vw-5rem))] sm:w-72 md:w-56 lg:w-64">
      <Card radius="full" depth="lg" className="h-full w-full p-3.5">
        <Card
          tone="inset"
          radius="full"
          className="neu-over relative h-full w-full overflow-hidden"
        >
          <Image
            src="/images/profile.png"
            alt={`Portrait of ${personalInfo.name}`}
            fill
            priority
            sizes="(min-width: 1024px) 416px, (min-width: 768px) 368px, (min-width: 640px) 320px, 304px"
            className="object-cover"
          />
        </Card>
      </Card>
    </div>
  );
}
