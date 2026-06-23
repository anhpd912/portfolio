export function SectionPanel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-7xl border-2 border-current bg-surface-raised p-6 shadow-hard sm:p-8 ${className}`}
    >
      {children}
    </div>
  );
}
