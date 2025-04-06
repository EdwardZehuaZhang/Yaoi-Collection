import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
} from "@/components/ui/pagination";
import { ChevronRight, ChevronsRight } from "lucide-react";
import React from "react";

export default function Frame(): JSX.Element {
  // Data for pagination numbers
  const paginationNumbers = [1, 2, 3, 4, 5];

  return (
    <Pagination>
      <PaginationContent className="flex items-center gap-4">
        {/* Pagination numbers */}
        <div className="inline-flex items-center gap-2">
          {paginationNumbers.map((number, index) => (
            <PaginationItem key={index}>
              <button
                className={`flex w-[37.31px] h-[37.31px] items-center justify-center rounded-[130.35px] overflow-hidden ${
                  number === 1
                    ? "bg-contentalpha-20 border-[0.64px] border-solid border-buttontetriary-reversednormal"
                    : ""
                }`}
              >
                <span className="[font-family:'Figtree-Medium',Helvetica] font-medium text-contentreversed text-[15.2px] tracking-[-0.15px] leading-[18.2px]">
                  {number}
                </span>
              </button>
            </PaginationItem>
          ))}
        </div>

        {/* Navigation controls */}
        <div className="inline-flex items-center gap-[13px]">
          <PaginationNext className="p-0">
            <ChevronRight className="w-7 h-7 text-contentreversed" />
          </PaginationNext>
          <PaginationItem>
            <button className="p-0">
              <ChevronsRight className="w-7 h-7 text-contentreversed" />
            </button>
          </PaginationItem>
        </div>
      </PaginationContent>
    </Pagination>
  );
}