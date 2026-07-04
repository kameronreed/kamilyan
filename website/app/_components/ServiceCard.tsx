type Accent = "teal" | "green";

interface ServiceCardProps {
  title: string;
  description: string;
  accent: Accent;
}

const accentStyles: Record<Accent, string> = {
  teal: "border-t-[#1FA7A0]",
  green: "border-t-[#1F4D3A]",
};

export default function ServiceCard({ title, description, accent }: ServiceCardProps) {
  return (
    <div
      className={`rounded-xl border-t-4 bg-white p-7 shadow-md transition-shadow hover:shadow-lg ${accentStyles[accent]}`}
    >
      <h3 className="mb-3 text-lg font-semibold text-zinc-900">{title}</h3>
      <p className="text-sm leading-relaxed text-zinc-600">{description}</p>
    </div>
  );
}
