// Importo función que me permite crear el contexto y creación de estados.
import { createContext, useEffect, useState } from 'react'
// Creo una constante donde voy a almacenar la ejecución del contexto y le agrego la palabra export para decir que
// este contexto puede ser utilizado en otros componentes.
export const MyContext = createContext()
// Creo la funciónque va a proveer todo el contexto creado y la exporto por defecto
const MyContextProvider = ({ children }) => {
  const [pokemones, setPokemones] = useState([])
  const [pokemon, setPokemon] = useState({})
  const [pokemonsLoaded, setPokemonsLoaded] = useState(false)
  const [pokemonLoaded, setPokemonLoaded] = useState(false)

  const getPokemonNames = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/generation/1')
    const { pokemon_species } = await response.json()
    const nombres = pokemon_species.map((element) => element.name)
    setPokemones(nombres)
    setPokemonsLoaded(true)
  }

  useEffect(() => {
    getPokemonNames()
  }, [])

  return (
    <MyContext.Provider value={{ pokemones, setPokemones, pokemon, setPokemon, pokemonsLoaded, setPokemonsLoaded, pokemonLoaded, setPokemonLoaded }}>
      {children}
    </MyContext.Provider>
  )
}
// Nota: Como se exporta por default no la tengo que tratar como un objeto al importarla para utilizarla posteriormente
export default MyContextProvider
