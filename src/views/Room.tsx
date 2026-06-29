import { useMemo, useState } from "react";
import { LANTERNS, LAYERS, LAYER_META, type Layer, type Lantern } from "../data/lanterns";

type DimmerLevel = "Quiet" | "Helpful";

export function Room() {
  const [query, setQuery] = useState("");
  const [activeLayer, setActiveLayer] = useState<Layer | "All">("All");
  const [dimmer, setDimmer] = useState<DimmerLevel>("Quiet");
  const helpful = dimmer === "Helpful";

  const filtered = useMemo(() => {
    const base = [...LANTERNS].sort(
      (a, b) => LAYER_META[a.layer].rank - LAYER_META[b.layer].rank,
    );
    const q = query.trim().toLowerCase();
    return base.filter((l) => {
      if (activeLayer !== "All" && l.layer !== activeLayer) return false;
      if (!helpful || !q) return true;
      return (
        l.name.toLowerCase().includes(q) ||
        l.why.toLowerCase().includes(q) ||
        l.layer.toLowerCase().includes(q)
      );
    });
  }, [query, activeLayer, helpful]);

  return (
    <div className="dusk" style={{ minHeight: "100vh", paddingBottom: "15rem" }}>
      <header className="wrap" style={{ paddingTop: "2.4rem", paddingBottom: "1.6rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: ".55rem" }}>
          <span className="flame" aria-hidden />
          <span className="eyebrow">The Organisatiom</span>
        </div>
        <h1 style={{ fontSize: "2.6rem", lineHeight: 1.04, marginTop: ".7rem", fontWeight: 600 }}>
          The Lantern Ledger
        </h1>
        <p style={{ color: "var(--vellum-dim)", marginTop: ".8rem", maxWidth: "34rem", fontSize: "1.02rem" }}>
          A quiet room of ideas that survived inspection. Each lantern earned its
          place, and each one traces back to its source. Browse at your own pace —
          nothing here reaches for you.
        </p>
      </header>

      <div className="wrap">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderTop: "1px solid var(--line)", paddingTop: ".9rem", marginBottom: "1rem" }}>
          <span className="label-soft" style={{ color: "var(--amber)" }}>Lanterns</span>
          <span className="mono" style={{ fontSize: ".8rem", color: "var(--vellum-dim)" }}>
            {filtered.length} / {LANTERNS.length}
          </span>
        </div>

        {activeLayer !== "All" && (
          <p style={{ borderLeft: "2px solid var(--amber-deep)", paddingLeft: ".8rem", fontStyle: "italic", color: "var(--vellum-dim)", marginBottom: "1rem", fontSize: ".95rem" }}>
            {LAYER_META[activeLayer].blurb}
          </p>
        )}

        {filtered.length === 0 ? (
          <div style={{ border: "1px dashed var(--line)", padding: "1.6rem", textAlign: "center", color: "var(--vellum-dim)" }}>
            No lanterns match. The room is honest about its silence.
          </div>
        ) : (
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: ".9rem" }}>
            {filtered.map((l) => <Card key={l.receiptPath} lantern={l} />)}
          </ul>
        )}
      </div>

      <div style={{ position: "fixed", insetInline: 0, bottom: 0, background: "var(--evening-2)", borderTop: "1px solid var(--line)" }}>
        <div className="wrap" style={{ display: "flex", gap: ".5rem", alignItems: "center", padding: ".7rem 1.1rem", borderBottom: "1px solid var(--line)" }}>
          {(["Quiet", "Helpful"] as DimmerLevel[]).map((lvl) => {
            const on = dimmer === lvl;
            return (
              <button key={lvl} onClick={() => setDimmer(lvl)} aria-pressed={on} className="eyebrow"
                style={{ border: "1px solid var(--amber-deep)", padding: ".4rem .7rem", borderRadius: "var(--radius)", cursor: "pointer",
                  background: on ? "var(--amber)" : "transparent", color: on ? "var(--evening)" : "var(--amber)" }}>
                {lvl === "Quiet" ? "○ Quiet" : "◐ Helpful"}
              </button>
            );
          })}
          <span style={{ flex: 1, textAlign: "right", fontStyle: "italic", fontSize: ".74rem", color: "var(--vellum-dim)" }}>
            {helpful ? "Search filters the room, when you ask." : "Browse only. Nothing reaches for you."}
          </span>
        </div>

        <nav aria-label="Trust layers" style={{ borderBottom: "1px solid var(--line)" }}>
          <div className="wrap" style={{ display: "flex", gap: ".4rem", overflowX: "auto", padding: ".7rem 1.1rem" }}>
            <Chip label="All" active={activeLayer === "All"} onClick={() => setActiveLayer("All")} />
            {LAYERS.map((l) => (
              <Chip key={l} label={l} active={activeLayer === l} onClick={() => setActiveLayer(l)} />
            ))}
          </div>
        </nav>

        <div className="wrap" style={{ padding: ".8rem 1.1rem calc(.8rem + env(safe-area-inset-bottom))" }}>
          <input type="search" value={query} disabled={!helpful}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={helpful ? "Search lanterns…" : "Raise the dimmer to Helpful to search"}
            aria-label="Search lanterns"
            style={{ width: "100%", padding: ".75rem .8rem", fontSize: "1rem", fontFamily: "inherit",
              background: helpful ? "var(--vellum)" : "transparent",
              color: helpful ? "var(--ink)" : "var(--vellum-dim)",
              border: `1px solid ${helpful ? "var(--amber-deep)" : "var(--line)"}`,
              borderRadius: "var(--radius)", outline: "none" }} />
        </div>
      </div>
    </div>
  );
}

function Chip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick} aria-pressed={active} className="label-soft"
      style={{ flexShrink: 0, border: "1px solid var(--line-soft)", padding: ".45rem .7rem",
        borderRadius: "var(--radius)", cursor: "pointer", whiteSpace: "nowrap",
        background: active ? "var(--vellum)" : "transparent",
        color: active ? "var(--ink)" : "var(--vellum-dim)" }}>
      {label}
    </button>
  );
}

function Card({ lantern }: { lantern: Lantern }) {
  // Receipt is a plain hash link — no router needed. Runs from any front door.
  const href = "#/receipt/" + lantern.receiptPath.replace(/^\/docs\//, "");
  return (
    <li className="vellum" style={{ border: "1px solid var(--line-soft)", borderRadius: "var(--radius)", overflow: "hidden", boxShadow: "0 1px 0 rgba(0,0,0,.25)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "var(--evening-2)", padding: ".45rem .8rem" }}>
        <span className="label-soft" style={{ color: "var(--amber)" }}>{lantern.layer}</span>
        <span className="flame" aria-hidden style={{ transform: "scale(.7)" }} />
      </div>
      <div style={{ padding: "1rem" }}>
        <h3 style={{ fontSize: "1.3rem", fontWeight: 600, lineHeight: 1.15 }}>{lantern.name}</h3>
        <p style={{ marginTop: ".5rem", color: "var(--ink)", fontSize: "1rem" }}>{lantern.why}</p>
        <div style={{ marginTop: ".9rem", display: "grid", gridTemplateColumns: "auto 1fr", gap: ".3rem .7rem", fontSize: ".84rem" }}>
          <span className="label-soft">Lives in</span>
          <span style={{ color: "var(--ink)" }}>{lantern.livesIn}</span>
          <span className="label-soft">Receipt</span>
          <a href={href} className="mono" style={{ fontSize: ".78rem", color: "var(--amber-deep)", textDecoration: "underline", wordBreak: "break-all" }}>
            {lantern.receiptPath} ↗
          </a>
        </div>
      </div>
    </li>
  );
}
