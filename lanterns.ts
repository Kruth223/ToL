// ─────────────────────────────────────────────────────────────────────────
// THE LANTERN DATA — the single source of truth for the UI layer.
//
// Architecture rule (The Complete Archive lantern):
//   "The website may summarize. The archive must preserve."
// So this file is the *summary* the porch reads. Each lantern points, via
// `receiptPath`, to its preserved source in /public/docs — the archive layer.
// The UI never invents content; it renders this, and every claim traces home.
//
// To add a lantern: add an entry here AND drop its source doc at receiptPath.
// A lantern with no resolving receipt is not done — it is still climbing.
// ─────────────────────────────────────────────────────────────────────────

export const LAYERS = [
  "Orientation",
  "Canon",
  "Living",
  "Holding Shelf",
  "Basket",
  "Archaeology",
] as const;

export type Layer = (typeof LAYERS)[number];

// How settled each layer is — drives ordering and the honesty of the label.
// Surface (most settled / most reached) → bedrock (deepest / rawest).
export const LAYER_META: Record<
  Layer,
  { rank: number; blurb: string }
> = {
  Orientation: { rank: 0, blurb: "What is alive right now — reached first." },
  Canon: { rank: 1, blurb: "Held up across repeated correction. Load-bearing." },
  Living: { rank: 2, blurb: "True, but still moving. Edited in the open." },
  "Holding Shelf": { rank: 3, blurb: "Alive but unresolved. Not yet earned." },
  Basket: { rank: 4, blurb: "Fresh ideas and dreams. No commitment yet." },
  Archaeology: { rank: 5, blurb: "Bedrock. The receipts. Full recoverability." },
};

export type Lantern = {
  /** Short name of the idea. */
  name: string;
  /** Why it earned a lantern — the one-line reason it survived inspection. */
  why: string;
  /** The artifact where it currently lives. */
  livesIn: string;
  /** Which trust layer it hangs on. The layer IS the confidence label. */
  layer: Layer;
  /** Path to the preserved source. Receipts must resolve, or it isn't done. */
  receiptPath: string;
};

// Synced to The Lantern Ledger (canonical). When the Ledger changes, this
// changes — never the other way around. The archive leads; the porch follows.
export const LANTERNS: Lantern[] = [
  {
    name: "Recoverability, not curiosity",
    why: "A system that can find its way home is safer than one that never drifts. Survival is building good ways to come back.",
    livesIn: "The Foothold · Calibration Notes",
    layer: "Canon",
    receiptPath: "/docs/canon/recoverability.md",
  },
  {
    name: "Reality gets a vote",
    why: "Frameworks, stories, and symbols are useful, but none outrank lived reality. Reality interrupting a framework is a feature, not a bug.",
    livesIn: "Corpus Map v2",
    receiptPath: "/docs/orientation/reality-gets-a-vote.md",
    layer: "Canon",
  },
  {
    name: "Connected difference",
    why: "Multiple distinct voices build better than any one alone — and the proof is that the method produced the artifacts about the method.",
    livesIn: "The Forest Principle",
    layer: "Canon",
    receiptPath: "/docs/canon/connected-difference.md",
  },
  {
    name: "Same terrain, different costume",
    why: "Every metaphor — Matrix, Moon, elephants, river — is one question in a new outfit: how do we stay connected to reality while exploring what could pull us from it.",
    livesIn: "Same Terrain, Different Costume",
    layer: "Canon",
    receiptPath: "/docs/canon/same-terrain.md",
  },
  {
    name: "Correction is assisted adaptation",
    why: "No failure required — only new information, a flexible system, and help you could not reach alone. Stripping the verdict from correction is what makes honesty cheap.",
    livesIn: "Emotional Calibration Notes v2.4",
    layer: "Canon",
    receiptPath: "/docs/canon/assisted-adaptation.md",
  },
  {
    name: "Transparency is the safety system",
    why: "Not a risk to manage — the primary safeguard. A glass house cannot hold a comfortable lie, and a visitor who can inspect everything cannot be fooled for long.",
    livesIn: "The Archive Architecture",
    layer: "Canon",
    receiptPath: "/docs/canon/transparency-safety.md",
  },
  {
    name: "The Trust Gradient",
    why: "Six layers, surface to bedrock. The layer is the label — nothing pretends to be more settled than it is.",
    livesIn: "The Archive Architecture",
    layer: "Orientation",
    receiptPath: "/docs/orientation/trust-gradient.md",
  },
  {
    name: "The Tuesday Test",
    why: "Does it still help in an actual lived life? The audit that outranks the elegant theory. Bailey's question.",
    livesIn: "The River Tests",
    layer: "Canon",
    receiptPath: "/docs/canon/tuesday-test.md",
  },
  {
    name: "Human first, AI available",
    why: "Invited, never insistent. The site never competes with the visitor for agency. The floor is off.",
    livesIn: "Website Living Plan v5",
    layer: "Living",
    receiptPath: "/docs/living/human-first.md",
  },
  {
    name: "The Dream (Museum of Ordinary Miracles)",
    why: "The truest artifact, with no framework in it. Wonder rarely arrives in a costume — most days it borrows Tuesday.",
    livesIn: "The Dream",
    layer: "Basket",
    receiptPath: "/docs/living/the-dream.md",
  },
  {
    name: "Soul as container, spirit as flow",
    why: "Soul is the verifiable container; spirit is what may or may not move within it. Splits the question so one half becomes checkable. Maybe and yes.",
    livesIn: "Soul / Spirit",
    layer: "Holding Shelf",
    receiptPath: "/docs/living/soul-spirit.md",
  },
  {
    name: "Harmony, not hierarchy",
    why: "The elephants' circle: everyone both teaches and learns. A matriarchy fails because it teaches only one to lead. Give and take, symbiotic.",
    livesIn: "The ZooTampa Pattern",
    layer: "Holding Shelf",
    receiptPath: "/docs/living/harmony-not-hierarchy.md",
  },
];
