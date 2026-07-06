import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "outline";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        {
          "bg-muted text-muted-foreground": variant === "default",
          "bg-primary/10 text-primary": variant === "primary",
          "border border-border text-muted-foreground": variant === "outline",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
