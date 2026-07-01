type SparklesProps = {
  variant?: "hero" | "divider" | "final";
  className?: string;
};

export function Sparkles({ variant = "hero", className = "" }: SparklesProps) {
  return (
    <span className={`sparkles sparkles-${variant} ${className}`} aria-hidden="true">
      <span className="sparkle sparkle-1" />
      <span className="sparkle sparkle-2" />
      <span className="sparkle sparkle-3" />
      <span className="sparkle sparkle-4" />
      <span className="sparkle sparkle-5" />
    </span>
  );
}
