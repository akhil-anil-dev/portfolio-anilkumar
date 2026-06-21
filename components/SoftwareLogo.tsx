/**
 * Branded software logos.
 *
 * Each source PNG (in /public/logo/) has its own intrinsic canvas size and
 * varying amounts of internal padding around the brand mark. We normalise
 * the *visual* size with a per-logo SCALE factor so they all appear at
 * roughly the same on-screen footprint, regardless of how tight the
 * original PNG crop is.
 *
 * To add a new tool:
 *   1. Drop PNG (or SVG) into /public/logo/<name>.png
 *   2. Add entries to LOGO_FILE + ALIAS
 *   3. Optionally tweak SCALE if the icon looks under/over-sized
 */

type Props = {
  name: string;
  /** Outer pixel size (square). */
  size?: number;
  className?: string;
};

type LogoKey =
  | "revit"
  | "autocad"
  | "navisworks"
  | "dynamo"
  | "bim360"
  | "hap";

const LOGO_FILE: Record<LogoKey, string> = {
  revit: "/logo/revit.png",
  autocad: "/logo/autocad.png",
  navisworks: "/logo/navisworks.png",
  dynamo: "/logo/dynamo.png",
  bim360: "/logo/bim.png",
  hap: "/logo/carrier.png",
};

/**
 * Visual-size normalisation. 1 = render image at the natural object-contain
 * size of the wrapper. >1 = grow the icon (good for PNGs with whitespace
 * around the mark). <1 = shrink (good for PNGs that fill edge-to-edge).
 */
const SCALE: Record<LogoKey, number> = {
  revit: 1.0,        // good fill
  autocad: 0.85,     // slight shrink — solid red square otherwise dominates
  navisworks: 1.3,   // landscape wordmark, needs to grow visually
  dynamo: 1.0,
  bim360: 0.9,       // shrink a touch — large B is otherwise oversized
  hap: 1.15,         // landscape Carrier logo, slight grow
};

const ALIAS: Record<string, LogoKey> = {
  revit: "revit",
  "autodesk revit": "revit",
  autocad: "autocad",
  "autodesk autocad": "autocad",
  navisworks: "navisworks",
  "navisworks manage": "navisworks",
  "autodesk navisworks": "navisworks",
  dynamo: "dynamo",
  "autodesk dynamo": "dynamo",
  bim360: "bim360",
  "bim 360": "bim360",
  "bim 360 / acc": "bim360",
  "autodesk construction cloud": "bim360",
  acc: "bim360",
  hap: "hap",
  "carrier hap": "hap",
  carrier: "hap",
};

export default function SoftwareLogo({
  name,
  size = 44,
  className = "",
}: Props) {
  const key: LogoKey = ALIAS[name.toLowerCase().trim()] ?? "hap";
  const src = LOGO_FILE[key];
  const scale = SCALE[key];

  return (
    <div
      style={{ width: size, height: size }}
      className={`grid shrink-0 place-items-center overflow-hidden ${className}`}
    >
      <img
        src={src}
        alt={name}
        draggable={false}
        className="block max-h-full max-w-full select-none object-contain"
        style={{ transform: `scale(${scale})`, transformOrigin: "center" }}
      />
    </div>
  );
}
