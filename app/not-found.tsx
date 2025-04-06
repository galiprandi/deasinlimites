import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Sección no encontrada</h2>
      <p>La sección que estás buscando no existe</p>
      <Link href="/">Volver al inicio</Link>
    </div>
  );
}
