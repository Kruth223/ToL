import { useEffect, useState } from "react";

export function Receipt({ path }: { path: string }) {
  const [state, setState] = useState<
    { status: "loading" } | { status: "ok"; text: string } | { status: "missing" }
  >({ status: "loading" });

  const docPath = "/docs/" + path;

  useEffect(() => {
    let alive = true;
    fetch(docPath)
      .then((r) => {
        if (!r.ok) throw new Error("not found");
        return r.text();
      })
      .then((text) => alive && setState({ status: "ok", text }))
      .catch(() => alive && setState({ status: "missing" }));
    return () => {
      alive = false;
    };
  }, [docPath]);

  if (state.status === "missing") {
    return (
      <div className="dusk" style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: "2rem" }}>
        <div style={{ textAlign: "center", maxWidth: "28rem" }}>
          <span className="flame" aria-hidden />
          <h1 style={{ fontSize: "1.3rem", marginTop: "1rem" }}>This receipt has no source yet.</h1>
          <p style={{ color: "var(--vellum-dim)", marginTop: ".5rem", fontSize: ".95rem" }}>
            The lantern points here, but the source hasn't been laid in the archive.
            An honest gap, not a hidden one — the lantern is still climbing.
          </p>
          <a href="#/" className="eyebrow" style={{ display: "inline-block", marginTop: "1.4rem" }}>← back to the room</a>
        </div>
      </div>
    );
  }

  return (
    <div className="dusk" style={{ minHeight: "100vh" }}>
      <header style={{ position: "sticky", top: 0, background: "var(--evening-2)", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap" style={{ padding: ".8rem 1.1rem" }}>
          <a href="#/" className="eyebrow">← back to the room</a>
          <p className="mono" style={{ fontSize: ".74rem", color: "var(--vellum-dim)", marginTop: ".4rem" }}>{docPath}</p>
          <p className="label-soft">Archaeology · the preserved source</p>
        </div>
      </header>
      <main className="wrap" style={{ padding: "1.6rem 1.1rem" }}>
        <article className="vellum mono" style={{ whiteSpace: "pre-wrap", wordBreak: "break-word",
          fontSize: ".82rem", lineHeight: 1.7, color: "var(--ink)", padding: "1.4rem", borderRadius: "var(--radius)", border: "1px solid var(--line-soft)", minHeight: "8rem" }}>
          {state.status === "loading" ? "Opening the source…" : state.text}
        </article>
      </main>
    </div>
  );
}
