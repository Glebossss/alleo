import "./App.css"

import Header from "./components/Header"
import Landing from "./components/Landing"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <div className='main'>
        <Header />
        <h1>ООО «Оптима Рэйл Транс»</h1>
      </div>
      <Landing />
      <Footer />
    </>
  )
}

export default App
