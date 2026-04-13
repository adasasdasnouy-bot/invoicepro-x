import { cn } from "@/lib/utils";

interface ResultRowProps {
  label: string;
  value: string;
  highlight?: boolean;
}

export function ResultRow({ label, value, highlight = false }: ResultRowProps) {
  return (
    <div
      className={cn(
        "flex justify-between items-center py-2 px-3 rounded-md",
        highlight ? "bg-primary/10 border border-primary/30" : "bg-muted/50",
      )}
    >
      <span
        className={cn(
          "text-sm font-body",
          highlight ? "text-primary font-semibold" : "text-muted-foreground",
        )}
      >
        {label}
      </span>
      <span
        className={cn(
          "font-mono font-semibold text-sm",
          highlight ? "text-primary" : "text-foreground",
        )}
      >
        {value}
      </span>
    </div>
  );
}
