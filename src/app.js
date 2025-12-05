import { planets } from "./core/planets.js";
import { position } from "./core/physics.js";
import { drawObject } from "./ui/canvas.js";

export function animate(canvas, planet) {
  return new Promise(res => {
    if (!planet) {
      res()
    }

    const {g, color} = planet
    const {width, height} = canvas

    const ctx = canvas.getContext("2d")
    const v0 = 0;
    const h0 = height - 10;
    let t = 0;
    
    const dt = 0.05;
    const pixelsPerMeter = 10;
    

    function frame() {
      ctx.clearRect(0, 0, width, height);
      
      const y = position(t, h0, v0, g);
      const screenY = height - y * pixelsPerMeter;

      drawObject(ctx, width / 2, screenY, color);

      t += dt;
      if (y > 0) {
        requestAnimationFrame(frame)
      } else {
        res()
      }
    }
    
    requestAnimationFrame(frame)
  })  
  
}

