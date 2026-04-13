import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionCardProps {
  title: string;
  icon: string;
  children: ReactNode;
  className?: string;
}

export function SectionCard({
  title,
  icon,
  children,
  className,
}: SectionCardProps) {
  return (
    <div
      className={cn(
        "bg-card border border-border rounded-lg p-5 shadow-card",
        className,
      )}
    >
      <div className="flex items-center gap-2 mb-4">
        <span className="text-lg">{icon}</span>
        <h2 className="font-display font-semibold text-foreground tracking-wide uppercase text-xs opacity-70">
          {title}
        </h2>
      </div>
      {children}
    </div>
  );
}
