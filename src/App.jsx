import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import { Inicio, NotFound, Pokemones, Detalle } from './views'

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/pokemones' element={<Pokemones />} />
        <Route path='/pokemones/:nombre' element={<Detalle />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
