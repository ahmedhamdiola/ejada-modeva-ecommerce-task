import Navbar from "./components/navbar/Navbar"
import MainCover from "./assets/main.png"

function App() {

  return (
    <>
      <div className="">
        <Navbar />
        <img src={MainCover} alt="Main Cover" className="w-full" />
      </div>
    </>
  )
}

export default App
