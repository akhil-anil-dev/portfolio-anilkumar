type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  align = "left",
}: Props) {
  return (
    <div
      className={`mb-12 max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <p className={light ? "eyebrow-dark" : "eyebrow"}>{eyebrow}</p>
      <h2 className={`mt-4 ${light ? "section-title-light" : "section-title"}`}>
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            light ? "text-white/75" : "text-ink-700"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
