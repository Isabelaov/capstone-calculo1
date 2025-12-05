import  { forwardRef, useEffect, useState } from 'react'
import { planets } from '../core/planets';
import { animate } from '../app';
import { Loader } from './Loader';


export const PlanetCard = ({ planetName = "", onStart = () => {}}, ref) => {
  const planet = planets[planetName]

  const startSimulation = () => {  
    const canvas = document.getElementById(`simCanvas-${planetName}`);
    console.log(canvas.height);
    
    return animate(canvas, planet);
  }

  useEffect(() => {
    if(onStart) {
      console.log("efecto uwu");
      onStart(startSimulation);
    }
  
  }, [])
  

  return (
    <div className="bg-white rounded-5 p-4">
      <div className="flex justify-content-between">
        <div className="flex gap-2">
          <div className={"planet-icon " + planetName}></div>

          <h3>{ planet.translation.toUpperCase() }</h3>
        </div>
        

        <p className="fs-4">g = { planet.g } m/s²</p>
      </div>
      
      <canvas id={"simCanvas-" + planetName} className="w-full h-150 "></canvas>
    </div>
      
  )
}
