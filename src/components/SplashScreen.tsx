import { Logo } from "@/components/Logo";

interface SplashScreenProps {
  done: boolean;
}

export function SplashScreen({ done }: SplashScreenProps) {
  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-background transition-opacity duration-700 ${
        done ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="animate-logo-in">
        <Logo size="lg" />
      </div>
      <div className="mt-12 h-px w-48 bg-border">
        <div className="animate-bar h-px bg-primary" />
      </div>
    </div>
  );
}
