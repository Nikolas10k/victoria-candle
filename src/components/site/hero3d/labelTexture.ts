import { CanvasTexture, LinearMipmapLinearFilter, SRGBColorSpace } from "three";

// The label wraps 1.56 rad of a ~0.99 radius jar and is 1.25 tall, so the canvas
// keeps that ~1.23:1 aspect to avoid stretching the lettering.
const WIDTH = 2560;
const HEIGHT = 2080;

const GREEN = "#2f4535";
const GOLD = "#d9c28e";
const CREAM = "#efe4c8";

function cssFontFamily(variable: string, fallback: string) {
  const value = getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
  return value || fallback;
}

function spacedText(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, spacing: number) {
  // Manual tracking keeps letter spacing identical across browsers.
  const chars = [...text];
  const widths = chars.map((c) => ctx.measureText(c).width);
  const total = widths.reduce((a, b) => a + b, 0) + spacing * (chars.length - 1);
  let cursor = x - total / 2;
  chars.forEach((c, i) => {
    ctx.fillText(c, cursor + widths[i] / 2, y);
    cursor += widths[i] + spacing;
  });
}

// Draws the Signature label (forest green, gold frame) used on the 3D jar.
export function createLabelTexture(anisotropy: number) {
  const canvas = document.createElement("canvas");
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  const ctx = canvas.getContext("2d");
  const texture = new CanvasTexture(canvas);
  texture.colorSpace = SRGBColorSpace;
  texture.anisotropy = anisotropy;
  texture.minFilter = LinearMipmapLinearFilter;
  texture.generateMipmaps = true;
  if (!ctx) return texture;

  const serif = cssFontFamily("--font-cormorant", "Georgia, serif");
  const sans = cssFontFamily("--font-jost", "sans-serif");
  const cx = WIDTH / 2;

  const fonts = {
    brand: `500 190px ${serif}`,
    sub: `400 58px ${sans}`,
    title: `400 250px ${serif}`,
    notes: `300 92px ${sans}`,
  };

  const draw = () => {
    ctx.fillStyle = GREEN;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    // Subtle paper grain so the flat colour reads as printed stock.
    for (let i = 0; i < 9000; i++) {
      ctx.fillStyle = Math.random() > 0.5 ? "rgba(255,255,255,0.025)" : "rgba(0,0,0,0.035)";
      ctx.fillRect(Math.random() * WIDTH, Math.random() * HEIGHT, 3, 3);
    }

    // Double gold frame.
    ctx.strokeStyle = GOLD;
    ctx.lineWidth = 6;
    ctx.strokeRect(150, 120, WIDTH - 300, HEIGHT - 240);
    ctx.lineWidth = 2.5;
    ctx.strokeRect(182, 152, WIDTH - 364, HEIGHT - 304);

    ctx.fillStyle = CREAM;
    ctx.textAlign = "center";
    ctx.textBaseline = "alphabetic";

    ctx.font = fonts.brand;
    spacedText(ctx, "VICTORIA", cx, 560, 26);
    ctx.font = fonts.sub;
    spacedText(ctx, "CANDLE", cx, 670, 44);

    ctx.font = fonts.title;
    spacedText(ctx, "SIGNATURE", cx, 1150, 40);

    ctx.fillStyle = GOLD;
    ctx.fillRect(cx - 230, 1260, 460, 4);
    ctx.beginPath();
    ctx.arc(cx, 1262, 11, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = CREAM;
    ctx.font = fonts.notes;
    spacedText(ctx, "capim-limão", cx, 1500, 6);
    spacedText(ctx, "& manjericão", cx, 1640, 6);

    texture.needsUpdate = true;
  };

  draw();
  if (document.fonts) {
    Promise.all(Object.values(fonts).map((f) => document.fonts.load(f)))
      .then(draw)
      .catch(() => undefined);
  }
  return texture;
}
