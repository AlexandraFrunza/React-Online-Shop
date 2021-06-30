import React from 'react'
import { FaShoppingCart, FaUser, FaUserPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'


const CartButtons = () => {
  const {total_items} = useCartContext();

  return (
    
 <Wrapper className="cart-btn-wrapper">
    <Link to="/cart" className="cart-btn" >
      Cart
      <span className="cart-container">
        <FaShoppingCart />
        <span className="cart-value">
          {total_items}
        </span>
      </span>
    </Link>
    <button type="button" className="auth-btn">
     <Link to='/login' className="cart-btn">Login <FaUserPlus /></Link> 
    </button>
    <button type="button" className="auth-btn" >
      <Link to='/profile' className="cart-btn">Profile <FaUser /></Link>
      </button> 
  </Wrapper>
 )
}

const Wrapper = styled.div`
@import url(//db.onlinewebfonts.com/c/a1caa95569aad7c1dd438b6b57c41c3d?family=Greycliff+CF+Extra+Bold);
  font-family: "Greycliff CF Extra Bold", sans-serif;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  align-items: center;
  width: 225px;

  .cart-btn {
    color: var(--clr-grey-1);
    font-size: 1rem;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    display: flex;

    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background-color: #787878;
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: #fff;
    padding: 12px;
  }
  .auth-btn {
    font-family: "Greycliff CF Extra Bold", sans-serif;
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
`
export default CartButtons