import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="container mx-auto px-4 py-24">
      <h1 className="font-heading text-3xl font-bold">
        404 – Seite nicht gefunden
      </h1>
      <p className="mt-4">
        <Link to="/" className="underline">
          Zur Startseite
        </Link>
      </p>
    </main>
  );
}
