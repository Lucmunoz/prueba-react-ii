import { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { MyContext } from '../context/MyContext'

const Detalle = () => {
  const { nombre } = useParams()
  const { pokemon, setPokemon, pokemonLoaded, setPokemonLoaded } = useContext(MyContext)
  const navigate = useNavigate()

  const goBack = () => {
    navigate('/pokemones/')
  }
  const getPokemonData = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
    const data = await response.json()
    setPokemon(data)
    setPokemonLoaded(true)
  }

  useEffect(() => {
    getPokemonData()
  }, [])

  const showData = () => {
    console.log('datos cargados')
    return (
      <>
        <h3 className='text-center'>{pokemon.name.toUpperCase()}</h3>
        <div className='d-flex flex-row'>
          <div className=''>
            <img src={pokemon.sprites.other['official-artwork'].front_default} alt='...' />
          </div>
          <div className='ps-5'>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>
                <h5>Habilidades</h5>
                <ul>
                  {pokemon.abilities.map((element, index) => {
                    return (
                      <li key={'habilities-' + index}>{element.ability.name.toUpperCase()}</li>)
                  })}
                </ul>
              </li>
              <li className='list-group-item'>
                <h5>Tipo</h5>
                <ul>
                  {pokemon.types.map((element, index) => {
                    return (
                      <li key={'types-' + index}>{element.type.name.toUpperCase()}</li>)
                  })}
                </ul>
              </li>
              <li className='list-group-item'>
                <h5>Altura</h5>
                {pokemon.height / 10 + ' m'}
              </li>
              <li className='list-group-item'>
                <h5>Peso</h5>
                {pokemon.weight / 10 + ' kg'}
              </li>
              <li className='list-group-item'>
                <h5>Stats</h5>
                <ul>
                  {pokemon.stats.map((element, index) => {
                    return (
                      <li key={'stats-' + index}>{element.stat.name.toUpperCase()}: {element.base_stat}</li>)
                  })}
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className='text-center'>
          <button type='button' className='btn btn-success' onClick={goBack}>Regresar</button>
        </div>
      </>
    )
  }

  const showLoading = () => {
    console.log('Cargando')
    return (
      <div className='spinner-border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </div>
    )
  }

  return (
    <div className='container col-6 d-flex flex-column pt-5 align-items-center'>
      {pokemonLoaded ? showData() : showLoading()}
    </div>
  )
}

export default Detalle
