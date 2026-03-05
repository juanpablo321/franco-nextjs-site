import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center section-white">
      <div className="container text-center">
        <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-6">Página no encontrada</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            Volver al Inicio
          </Link>
          <Link href="/blog" className="btn-outline-primary">
            Explorar el Blog
          </Link>
        </div>
      </div>
    </section>
  );
}
