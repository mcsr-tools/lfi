export function formatTime(ms: number) {
  if (!Number.isFinite(ms)) return "None";
  const m = Math.floor(ms / (1000 * 60));
  const s = Math.floor(ms / 1000) % 60;
  return `${m}:${("" + s).padStart(2, "0")}`;
}
