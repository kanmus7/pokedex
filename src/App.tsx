import React from "react"
import Searcher from "components/Searcher/Searcher"
import Col from "antd/es/grid/col"
import PokemonList from "components/PokemonList/PokemonList"
import "./App.css"

function App() {
  return (
    <div className='App'>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={["", "", "", "", "", ""]} />
    </div>
  )
}

export default App
