import { useEffect, useState } from "react";
import pizzaMakingVideo from "@/assets/pizza-making.mp4";
import { Logo } from "@/components/Logo";
import { SplashScreen } from "@/components/SplashScreen";

const navItems = [
  "Cardápio",
  "Unidades",
  "Eventos",
  "Aniversário",
  "Blog",
  "Sobre Nós",
  "Prêmios",
  "Trabalhe Conosco",
];

export default function Index() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setDone(true), 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <SplashScreen done={done} />

      <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
        <video
          src={pizzaMakingVideo}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-overlay" />

        <header className="relative z-10 flex items-center justify-between gap-6 px-6 py-6 md:px-12">
          <Logo />

          <nav className="hidden items-center gap-7 text-sm xl:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="transition-opacity hover:opacity-70"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#"
              className="rounded-full bg-primary px-6 py-2.5 text-sm text-primary-foreground"
            >
              Reservas
            </a>
            <a
              href="#"
              className="rounded-full border border-foreground px-6 py-2.5 text-sm"
            >
              Delivery
            </a>
          </div>
        </header>

        <div className="relative z-10 flex h-[calc(100%-96px)] flex-col items-center justify-center px-6 text-center">
          <p className="mb-6 font-script text-xl">
            Eletta come una delle migliori pizzerie del mondo!
          </p>
          <h1 className="font-display text-4xl md:text-6xl">
            A Melhor Pizzaria Napoletana do Brasil
          </h1>
          <p className="mt-5 italic text-muted-foreground">
            Peça agora no delivery ou faça sua reserva e venha nos visitar!
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="rounded-full bg-primary px-7 py-3.5 text-primary-foreground"
            >
              Reservar Mesa
            </a>
            <a
              href="#"
              className="rounded-full bg-cream px-7 py-3.5 text-secondary-foreground"
            >
              Pedir Delivery
            </a>
            <a
              href="#"
              className="rounded-full border border-foreground px-7 py-3.5"
            >
              Ver Cardápio
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
