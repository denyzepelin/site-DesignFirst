interface LogoProps {
  size?: "sm" | "lg";
}

export function Logo({ size = "sm" }: LogoProps) {
  const isLg = size === "lg";

  return (
    <div className="flex flex-col items-center leading-none text-foreground">
      <span className={`font-script ${isLg ? "text-7xl md:text-8xl" : "text-3xl"}`}>
        La <span className="text-primary">B</span>ra<span className="text-primary">C</span>ieRa
      </span>
      <span
        className={`tracking-[0.35em] text-muted-foreground ${
          isLg ? "mt-4 text-base" : "mt-1 text-[10px]"
        }`}
      >
        pizza napoletana
      </span>
    </div>
  );
}
