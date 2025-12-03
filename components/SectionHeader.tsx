type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left"
}: Props) {
  const alignment =
    align === "center"
      ? "items-center text-center"
      : "items-start text-left";

  return (
    <div className={`mb-8 flex flex-col gap-2 ${alignment}`}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sivin-accent-soft">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-sm text-sivin-muted sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}


