type PlaceholderImageProps = {
  label: string;
  className?: string;
};

export function PlaceholderImage({ label, className = "" }: PlaceholderImageProps) {
  return (
    <div
      className={`placeholder-surface flex h-full min-h-[220px] w-full items-center justify-center ${className}`}
      aria-label={label}
    >
      <div className="h-24 w-24 rounded-full border border-neutral-300 bg-white/65 shadow-[0_20px_56px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.95)]" />
    </div>
  );
}
