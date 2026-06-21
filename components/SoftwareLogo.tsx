/**
 * Branded software logos.
 *
 * Resolves the display name to the matching image file in /public/logo/
 * and renders it at the requested size. Unknown names fall back to the
 * Carrier HAP logo (the generic / "other" slot).
 *
 * To add a new tool:
 *   1. Drop the PNG (or SVG) into /public/logo/<name>.png
 *   2. Add an entry to LOGO_FILE below
 *   3. Add any aliases (display names) to ALIAS
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

  return (
    <img
      src={src}
      alt={name}
      width={size}
      height={size}
      draggable={false}
      className={`block shrink-0 select-none object-contain ${className}`}
      style={{ width: size, height: size }}
    />
  );
}
