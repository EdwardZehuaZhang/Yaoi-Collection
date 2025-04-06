import { Badge } from "@/components/ui/badge";
import React from "react";

const categories = [
  "Vanilla",
  "Harem",
  "Mind Control",
  "Tentacles",
  "Teacher",
  "Elf",
  "Cosplay",
  "Group",
  "Schoolgirl",
];

export default function Frame(): JSX.Element {
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(
    null,
  );

  return (
    <div className="flex flex-wrap items-center gap-3">
      {categories.map((category) => (
        <Badge
          key={category}
          variant="outline"
          className="h-[30px] px-4 py-1.5 rounded-full border border-solid border-buttontetriary-reversednormal cursor-pointer hover:bg-buttontetriary-reversedhover transition-colors"
          onClick={() =>
            setSelectedCategory(category === selectedCategory ? null : category)
          }
        >
          <span className="[font-family:'Figtree-Medium',Helvetica] font-medium text-contentreversed text-[15.2px] tracking-[-0.15px] leading-[18.2px]">
            {category}
          </span>
        </Badge>
      ))}
    </div>
  );
}
