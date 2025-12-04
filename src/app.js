import { planets } from "./core/planets.js";
import { position, velocity } from "./core/physics.js";
import { drawObject } from "./ui/canvas.js";
import { setupControls } from "./ui/controls.js";


function startSimulation() {
  const planet = document.getElementById("planetSelector").value;
  // const h0 = parseFloat(document.getElementById("heightSlider").value);
  const g = planets[planet].g;
  const v0 = 0;

  const canvas = document.getElementById("simCanvas");
  const ctx = canvas.getContext("2d");
  const h0 = canvas.height + 10;

  let t = 0;
  const dt = 0.05;
  const pixelsPerMeter = 10;

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const y = position(t, h0, v0, g);
    const screenY = canvas.height - y * pixelsPerMeter;
    drawObject(ctx, canvas.width / 2, screenY, planets[planet].color);

    t += dt;
    if (y > 0) requestAnimationFrame(animate);
  }

  animate();
}

document.getElementById("startSim").addEventListener("click", startSimulation());