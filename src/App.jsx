import { useRef, useState } from "react";
import { PlanetCard } from "./components/PlanetCard";
import { Loader } from "./components/Loader";

const App = () => {
  const [disabled, setDisabled] = useState(false)
  const starters = useRef([])

  const handleStart = (fn) => {
    starters.current.push(fn)
  }

  const handleClick = async () => {
    setDisabled(true)
    await Promise.all(starters.current.map(fn => fn()))
    setDisabled(false)
  }

  return (
    <div>
      <h1 className="text-center  font-bold">Comparador de Gravedades</h1>

      <div className="mb-4 p-2 flex justify-content-center">
        <button 
          type="button" 
          className="btn btn-primary btn-lg" 
          disabled={disabled}
          aria-pressed="true" 
          onClick={handleClick}
        >
          {
            disabled ? (<Loader/>) : (<p>Empezar simulacion</p>)
          }
        </button>
      </div>
      

      <div className="grid grid-cols-2 gap-4">
        <PlanetCard planetName="earth" onStart={handleStart}/>
        <PlanetCard planetName="moon" onStart={handleStart}/>
        <PlanetCard planetName="mars" onStart={handleStart}/>
        <PlanetCard planetName="jupiter" onStart={handleStart}/>
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