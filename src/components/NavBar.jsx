import { NavLink } from 'react-router-dom'

const NavBar = () => {
  const UpdateNavBarElement = ({ isActive }) => {
    return (
      isActive ? 'nav-link active aria-current px-2 m-0' : 'nav-link px-2 m-0'
    )
  }
  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary' data-bs-theme='dark'>
      <div className='container-fluid'>
        <NavLink className={UpdateNavBarElement} to='/'><img src='/logo.png' /></NavLink>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <NavLink className={UpdateNavBarElement} to='/'>Inicio</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className={UpdateNavBarElement} to='/pokemones'>Pokemones</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default NavBar
