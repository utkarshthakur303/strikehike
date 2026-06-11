export function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center whitespace-nowrap text-[22px] font-extrabold tracking-tight sm:text-[24px] ${className}`}
    >
      <span style={{ color: "var(--text-primary)" }}>Strike</span>
      <span style={{ color: "var(--primary-color)" }}>Hike</span>
      <span
        className="ml-[2px] inline-block h-[6px] w-[6px] rounded-full"
        style={{ background: "var(--primary-color)" }}
      />
    </span>
  );
}
