import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { MyContext } from '../context/MyContext'

const Pokemones = () => {
  const { pokemones, pokemonsLoaded, setPokemonLoaded } = useContext(MyContext)
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate(`/pokemones/${event.target.elements['listado-pokemones'].value}`)
    setPokemonLoaded(false)
  }

  if (pokemonsLoaded) {
    return (
      <div className='container-fluid text-center col-5 pt-5 '>
        <h2 className='pb-2'>Selecciona un pokemon</h2>
        <form className='d-flex flex-column align-items-center' onSubmit={handleSubmit}>
          <div className='mb-3 col-4'>
            <select name='listado-pokemones' className='form-select' aria-label='Default select example'>
              {pokemones.map((element, index) => {
                return (
                  <option key={index}>{element}</option>
                )
              })}
            </select>
          </div>
          <button type='submit' className='btn btn-primary'>Cargar Datos</button>
        </form>
      </div>
    )
  }
}

export default Pokemones
