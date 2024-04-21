import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MyContext } from '../context/MyContext'

const Pokemones = () => {
  const { pokemones, pokemonsLoaded, setPokemonLoaded } = useContext(MyContext)
  const [name, setName] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate(`/pokemones/${name}`)
    setPokemonLoaded(false)
  }

  if (pokemonsLoaded) {
    return (
      <div className='container-fluid text-center col-5 pt-5 '>
        <h2 className='pb-2'>Selecciona un pokemon</h2>
        <form className='d-flex flex-column align-items-center' onSubmit={handleSubmit}>
          <div className='mb-3 col-4'>
            <select className='form-select' aria-label='Default select example' value={name} onChange={(e) => { setName(e.target.value) }}>
              <option>Seleccione un pokemon</option>
              {pokemones.map((element, index) => {
                return (
                  <option key={index}>{element}</option>
                )
              })}
            </select>
          </div>
          <button disabled={name === ''} type='submit' className='btn btn-primary'>Cargar Datos</button>
        </form>
      </div>
    )
  }
}

export default Pokemones
