// Mutable state shared between the DOM hero (scroll/pointer listeners) and the
// WebGL scene (read every frame), so updates never trigger React re-renders.
export const heroState = {
  progress: 0,
  pointerX: 0,
  pointerY: 0,
};
