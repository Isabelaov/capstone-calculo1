import { planets } from "./core/planets.js";
import { position, velocity } from "./core/physics.js";
import { drawObject } from "./ui/canvas.js";

export function animate(canvas, planet, onFrame) {
  
  return new Promise(res => {
    if (!planet) {
      res()
    }

    const { g, color } = planet
    const { width, height } = canvas    

    const ctx = canvas.getContext("2d")
    const h0 = height - 10;
    let t = 0;
    
    const dt = 0.02;
    const pixelsPerMeter = 2;

    function frame() {
      let frameInfo = {t, y: h0, v: 0}
      
      ctx.clearRect(0, 0, width, height);
      
      const y = position(t, h0, 0, g);
      const screenY = height - y * pixelsPerMeter;

      drawObject(ctx, width / 2, screenY, color);
      frameInfo = {
        t: t.toFixed(2),
        y: y.toFixed(2),
        v: (velocity(t, 0, g) * -1).toFixed(2)
      }
      if (onFrame) onFrame(frameInfo) 

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

