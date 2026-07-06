type Accent = "teal" | "green";

interface ServiceCardProps {
  title: string;
  description: string;
  capabilities: string[];
  accent: Accent;
}

const accentStyles: Record<Accent, string> = {
  teal: "border-t-[#1FA7A0] hover:border-t-[#0F9A93]",
  green: "border-t-[#1F4D3A] hover:border-t-[#153B2C]",
};

export default function ServiceCard({
    title,
    description,
    capabilities,
    accent,
  }: ServiceCardProps) {
    return (
      <div
      className={`flex h-full transform-gpu flex-col rounded-xl border-t-4 bg-white p-7 shadow-md transition-all duration-400 ease-out hover:-translate-y-1 hover:shadow-xl ${accentStyles[accent]}`}
      >
       <h3 className="mb-5 text-lg font-semibold text-zinc-900">
  {title}
      </h3>

      <p className="h-34 text-sm leading-6 text-zinc-600">
      {description}
      </p>

      <ul className="mt-8 space-y-3">
      {capabilities.map((capability) => (
        <li
          key={capability}
          className="flex items-start text-sm text-zinc-700"
        >
          <span className="mr-2 mt-1 text-[#1FA7A0]">•</span>
          <span>{capability}</span>
        </li>
      ))}
    </ul>
    </div>
  );
}
