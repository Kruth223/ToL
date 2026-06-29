import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "The Lantern Ledger" },
      {
        name: "description",
        content:
          "A quiet room of ideas that survived inspection. Browse at your own pace — nothing here reaches for you.",
      },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: () => <Outlet />,
  notFoundComponent: NotFound,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function NotFound() {
  return (
    <div className="dusk" style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: "2rem" }}>
      <div style={{ textAlign: "center", maxWidth: "26rem" }}>
        <span className="flame" aria-hidden />
        <h1 style={{ fontSize: "1.4rem", marginTop: "1rem" }}>This page isn't lit.</h1>
        <p style={{ color: "var(--vellum-dim)", marginTop: ".5rem", fontSize: ".95rem" }}>
          There's no lantern here — the path leads nowhere yet. Nothing hidden,
          just nothing built.
        </p>
        <a href="/" className="eyebrow" style={{ display: "inline-block", marginTop: "1.4rem" }}>
          ← back to the room
        </a>
      </div>
    </div>
  );
}
