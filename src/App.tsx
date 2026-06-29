import { useEffect, useState } from "react";
import { Room } from "./views/Room";
import { Receipt } from "./views/Receipt";

// Dead-simple hash routing. "#/" = the room. "#/receipt/<path>" = a receipt.
// No router library, no generated tree — just the URL hash and React state.
// This is what makes it run from any static front door without a backend.
function parseHash(): { view: "room" } | { view: "receipt"; path: string } {
  const h = window.location.hash.replace(/^#/, "");
  if (h.startsWith("/receipt/")) {
    return { view: "receipt", path: h.slice("/receipt/".length) };
  }
  return { view: "room" };
}

export function App() {
  const [route, setRoute] = useState(parseHash());

  useEffect(() => {
    const onHash = () => setRoute(parseHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  if (route.view === "receipt") return <Receipt path={route.path} />;
  return <Room />;
}
