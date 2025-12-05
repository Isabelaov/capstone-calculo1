import  { useState } from 'react'
import { planets } from '../core/planets';
import { animate } from '../app';
import { Loader } from './Loader';


export const Canvas = ({ planetName = "" }) => {
  const [loading, setLoading] = useState(true);
  
  function startSimulation() {
    const v0 = 0;
    const canvas = document.getElementById("simCanvas");
    const ctx = canvas.getContext("2d");
    console.log(canvas.height);

    
    const h0 = canvas.height + 10;

    let t = 0;
    const dt = 0.05;
    const pixelsPerMeter = 10;

    animate();
  }

  return (
    <div className="bg-white rounded-5 p-4">
      <div className="flex gap-4">
        <div className={"planet-icon " + planetName}></div>

        <h3>{ planets[planetName].translation.toUpperCase() }</h3>

        <p className="fs-4">g = { planets[planetName].g } m/s²</p>
      </div>
      
      <canvas id="simCanvas" className="w-full h-150 "></canvas>
    </div>
      
  )
}
