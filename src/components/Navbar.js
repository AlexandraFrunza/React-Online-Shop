import React from 'react'
import { Link } from 'react-router-dom'
import styles from 'styled-components'
import logo from '../images/logo7.svg'
import { links } from '../utils/constants'
import CartButtons from './CartButtons'


const Nav = () => {
  return ( 
   <NavContainer>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/'>
            <img src={logo} alt='acasa' />
          </Link>
          
        </div>
        <ul className='nav-links'>
          {links.map((link) => {
            const { id, text, url } = link
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            )
          })}
          
        </ul>
        <CartButtons />
      </div>
    </NavContainer>
  )
}

const NavContainer = styles.nav`
  @import url(//db.onlinewebfonts.com/c/a1caa95569aad7c1dd438b6b57c41c3d?family=Greycliff+CF+Extra+Bold);
  font-family: "Greycliff CF Extra Bold", sans-serif;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
    img {
      width: 210px;
      margin-left: -15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
    font-size: 2rem;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
        font-size: 2rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`

export default Nav