import { createFileRoute, Link, notFound } from "@tanstack/react-router";

export const Route = createFileRoute("/receipt/$")({
  loader: async ({ params }) => {
    const splat = params._splat ?? "";
    const path = `/docs/${splat}`;
    const res = await fetch(path);
    if (!res.ok) throw notFound();
    return { path, text: await res.text() };
  },
  component: Receipt,
  notFoundComponent: Missing,
});

function Receipt() {
  const { path, text } = Route.useLoaderData();
  return (
    <div className="dusk" style={{ minHeight: "100vh" }}>
      <header style={{ position: "sticky", top: 0, background: "var(--evening-2)", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap" style={{ padding: ".8rem 1.1rem" }}>
          <Link to="/" className="eyebrow">← back to the room</Link>
          <p className="mono" style={{ fontSize: ".74rem", color: "var(--vellum-dim)", marginTop: ".4rem" }}>{path}</p>
          <p className="label-soft">Archaeology · the preserved source</p>
        </div>
      </header>
      <main className="wrap" style={{ padding: "1.6rem 1.1rem" }}>
        {/* The archive preserves; it does not dress up. Plain, honest source. */}
        <article className="vellum mono" style={{ whiteSpace: "pre-wrap", wordBreak: "break-word",
          fontSize: ".82rem", lineHeight: 1.7, color: "var(--ink)", padding: "1.4rem", borderRadius: "var(--radius)", border: "1px solid var(--line-soft)" }}>
          {text}
        </article>
      </main>
    </div>
  );
}

function Missing() {
  return (
    <div className="dusk" style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: "2rem" }}>
      <div style={{ textAlign: "center", maxWidth: "28rem" }}>
        <span className="flame" aria-hidden />
        <h1 style={{ fontSize: "1.3rem", marginTop: "1rem" }}>This receipt has no source yet.</h1>
        <p style={{ color: "var(--vellum-dim)", marginTop: ".5rem", fontSize: ".95rem" }}>
          The lantern points here, but the source hasn't been laid in the archive.
          An honest gap, not a hidden one — the lantern is still climbing.
        </p>
        <Link to="/" className="eyebrow" style={{ display: "inline-block", marginTop: "1.4rem" }}>← back to the room</Link>
      </div>
    </div>
  );
}
