import { useState } from "react"
import Lampa from "./components/Lampa"
import Vezerlopult from "./components/Vezerlopult"

const App=()=> {

  const [bekapcsolva, setBekapcsolva] = useState(false)
  const [ertek, setErtek] = useState<number>(10)
  const novel =()=>{
    setErtek((elozoErtek)=>elozoErtek+1)
  }
  const lampaKapcsolasa =()=>{
    setBekapcsolva((elozo)=>!elozo)
    console.log(bekapcsolva)
    novel()
  }

  return (
    <>
      <h1>Lifting State up</h1>
      <Vezerlopult lampaKapcsolasa ={lampaKapcsolasa}></Vezerlopult>
      <Lampa ertek ={ertek}></Lampa>
    </>
  )
}

export default App