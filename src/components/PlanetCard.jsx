import  { forwardRef, useEffect, useState } from 'react'
import { planets } from '../core/planets';
import { animate } from '../app';
import { Loader } from './Loader';


export const PlanetCard = ({ planetName = "", onStart = () => {}}, ref) => {
  
  const planet = planets[planetName]
  const [frameData, setFrameData] = useState({t: 0, y: 150, v: 0})
  const {t, y, v} = frameData

  const startSimulation = () => {  
    const canvas = document.getElementById(`simCanvas-${planetName}`);
    
    return animate(canvas, planet, (data)=> setFrameData(data));
  }

  useEffect(() => {
    if(onStart) onStart(startSimulation);
  }, [])
  

  return (
    <div className="bg-[#BBDEFB] shadow-sm rounded-5 p-4">
      <div className="flex justify-content-between">
        <div className="flex gap-2">
          <div className={"planet-icon " + planetName}></div>

          <h3>{ planet.translation.toUpperCase() }</h3>
        </div>
        

        <p className="fs-4">g = { planet.g } m/s²</p>
      </div>

      <div className="overflow-hidden border-2 border-sky-500 rounded-5 my-3 bg-white">
        <canvas id={"simCanvas-" + planetName} className="w-full h-100"></canvas>
      </div>

      <div>
        <p> <span>Tiempo:</span> { t } s</p>
        <p>Posicion en y: { y } m</p>
        <p>Velocidad: { v } m/s</p>
      </div>
    </div>
      
  )
}
