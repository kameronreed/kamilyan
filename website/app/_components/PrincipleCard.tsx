interface PrincipleCardProps {
  title: string;
  description: string;
}

export default function PrincipleCard({
  title,
  description,
}: PrincipleCardProps) {
  return (
    <div
      className={`
        flex h-full flex-col
        rounded-xl
        border border-zinc-200
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-400
        ease-out
        hover:-translate-y-0.5
        hover:shadow-lg
      `}
    >
      {/* Accent line */}
      <div className="mb-5 ml-1 h-0.5 w-8 bg-[#1FA7A0]" />

      {/* Title */}
      <h3 className="mb-3.5 text-xl font-semibold text-zinc-900">
        {title}
      </h3>

      {/* Description */}
      <p className="leading-7 text-zinc-600">
        {description}
      </p>
    </div>
  );
}