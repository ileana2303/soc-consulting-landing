import Image from "next/image";

type LogoProps = {
  compact?: boolean;
  light?: boolean;
  className?: string;
};

export function Logo({ compact = false, light = false, className = "" }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Image
        src="/soc-mark.svg"
        alt=""
        width={44}
        height={44}
        className="h-11 w-11 shrink-0"
        priority
      />
      {!compact && (
        <span className="leading-none">
          <span
            className={`block text-[1.03rem] font-extrabold tracking-[0.16em] ${
              light ? "text-white" : "text-ink"
            }`}
          >
            SOC
          </span>
          <span className="mt-1.5 block text-[0.55rem] font-bold tracking-[0.24em] text-coral">
            CONSULTING
          </span>
        </span>
      )}
    </span>
  );
}
