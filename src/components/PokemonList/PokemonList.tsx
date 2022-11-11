import React from "react"
import PokemonCard from "components/PokemonCard"
import styles from "./PokemonList.module.scss"

interface PokemonListProps {
  pokemons: Array<string | object>
}

const PokemonList = ({ pokemons = [] }: PokemonListProps) => {
  return (
    <div className={styles.PokemonList}>
      {pokemons.map((pokemon, i) => (
        <PokemonCard key={i} />
      ))}
    </div>
  )
}

export default PokemonList
