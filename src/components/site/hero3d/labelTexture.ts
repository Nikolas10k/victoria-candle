import { CanvasTexture, SRGBColorSpace } from "three";

function cssFontFamily(variable: string, fallback: string) {
  const value = getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
  return value || fallback;
}

// Draws the Signature label (forest green, gold frame) used on the 3D jar.
export function createLabelTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext("2d");
  const texture = new CanvasTexture(canvas);
  texture.colorSpace = SRGBColorSpace;
  texture.anisotropy = 8;
  if (!ctx) return texture;

  const serif = cssFontFamily("--font-cormorant", "Georgia, serif");
  const sans = cssFontFamily("--font-jost", "sans-serif");

  const draw = () => {
    ctx.fillStyle = "#2f4535";
    ctx.fillRect(0, 0, 1024, 1024);

    ctx.strokeStyle = "#d8c08a";
    ctx.lineWidth = 3;
    ctx.strokeRect(46, 46, 932, 932);

    ctx.fillStyle = "#e9dcbc";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.font = `500 92px ${serif}`;
    ctx.letterSpacing = "10px";
    ctx.fillText("VICTORIA", 512, 250);
    ctx.font = `400 30px ${sans}`;
    ctx.letterSpacing = "18px";
    ctx.fillText("CANDLE", 520, 322);

    ctx.font = `400 124px ${serif}`;
    ctx.letterSpacing = "16px";
    ctx.fillText("SIGNATURE", 520, 540);

    ctx.fillStyle = "#d8c08a";
    ctx.fillRect(412, 628, 200, 2);

    ctx.fillStyle = "#e9dcbc";
    ctx.font = `300 42px ${sans}`;
    ctx.letterSpacing = "2px";
    ctx.fillText("capim-limão", 512, 730);
    ctx.fillText("& manjericão", 512, 790);

    texture.needsUpdate = true;
  };

  draw();
  document.fonts?.ready.then(draw).catch(() => undefined);
  return texture;
}
