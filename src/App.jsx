import { useState } from "react";
import { Canvas } from "./components/Canvas";

const App = () => {
  const [activeAnims, setActiveAnims] = useState(0)

  const handleStart = () => {
    setActiveAnims(prev => prev + 1)
  }

  const handleFinish = () => {
    setActiveAnims( prev => Math.max(prev - 1, 0))
  }

  const loading = activeAnims > 0

  return (
    <div>
      <h1 className="text-center  font-bold">Comparador de Gravedades</h1>

      <div className="mb-4 p-2 flex justify-content-center">
        <button type="button" className="btn btn-primary btn-lg" aria-pressed="true">Empezar simulacion</button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Canvas planetName="earth"/>
        <Canvas planetName="moon"/>
      </div>
      
      <div className="clouds">
        <div className="cloud cloud1"></div>
        <div className="cloud cloud2"></div>
        <div className="cloud cloud3"></div>
        <div className="cloud cloud4"></div>
        <div className="cloud cloud5"></div>
        <div className="cloud cloud6"></div>
      </div>

    </div>
  )
}

export default App;