import './App.css'
import { Header } from "./components/Header.jsx";
import {BusinessCard} from "./components/BusinessCard.jsx";

function App() {

  return (
    <div style={{
        margin: 10,
    }}>
      <Header />
      <br/><br/>
      <BusinessCard />
    </div>
  )
}

export default App
