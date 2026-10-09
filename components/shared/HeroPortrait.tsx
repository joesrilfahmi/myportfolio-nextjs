import Image from "next/image";
import { personalInfo } from "@/lib/data/shared";
import { Card } from "../ui/Card";

/** Profile image in a neumorphic frame: a raised ring around a recessed disc. */
export function HeroPortrait() {
  return (
    <div className="relative aspect-square w-48 sm:w-56 lg:w-60">
      <Card radius="full" depth="md" className="h-full w-full p-3">
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
            sizes="(min-width: 1024px) 240px, (min-width: 640px) 224px, 192px"
            className="object-cover"
          />
        </Card>
      </Card>
    </div>
  );
}
