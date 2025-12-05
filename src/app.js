import { planets } from "./core/planets.js";
import { position } from "./core/physics.js";
import { drawObject } from "./ui/canvas.js";

export function animate(canvas, planet) {
  const g = planets[selectedPlanet].g;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const y = position(t, h0, v0, g);
  const screenY = canvas.height - y * pixelsPerMeter;
  drawObject(ctx, canvas.width / 2, screenY, planets[planet].color);

  t += dt;
  if (y > 0) requestAnimationFrame(animate);
}

