import { ChevronLeft, ChevronRight } from "lucide-react";
import { IconButton } from "./Button";

interface PaginationProps {
  page: number;
  pageCount: number;
  onChange: (page: number) => void;
  label: string;
}

export function Pagination({ page, pageCount, onChange, label }: PaginationProps) {
  if (pageCount <= 1) return null;

  const pages = Array.from({ length: pageCount }, (_, index) => index + 1);

  return (
    <nav
      aria-label={label}
      className="mt-10 flex items-center justify-center gap-2"
    >
      <IconButton
        size="sm"
        label="Previous page"
        disabled={page === 1}
        onClick={() => onChange(Math.max(1, page - 1))}
      >
        <ChevronLeft size={18} />
      </IconButton>

      {pages.map((number) => (
        <IconButton
          key={number}
          size="sm"
          label={`Go to page ${number}`}
          active={number === page}
          aria-current={number === page ? "page" : undefined}
          onClick={() => onChange(number)}
        >
          {number}
        </IconButton>
      ))}

      <IconButton
        size="sm"
        label="Next page"
        disabled={page === pageCount}
        onClick={() => onChange(Math.min(pageCount, page + 1))}
      >
        <ChevronRight size={18} />
      </IconButton>
    </nav>
  );
}
