import React from 'react'
import styled from 'styled-components'
import bcg from '../images/bcg1.jpg'


const Hero = () => {
  return (
    <Wrapper className='section-center'>
      <article className='content'>
        <h1>
          Lorem ipsum dolor sit amet 
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti iure
          quasi odit tenetur unde officiis repudiandae quod deserunt quia eum?
        </p>
        
          
      </article>
      <article className='img-container'>
        <img src={bcg} alt='nice table' className='main-img' />
        
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
@import url(//db.onlinewebfonts.com/c/a1caa95569aad7c1dd438b6b57c41c3d?family=Greycliff+CF+Extra+Bold);
  font-family: "Greycliff CF Extra Bold", sans-serif;
  min-height: 60vh;
  display: grid;
  place-items: center;
  
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
      
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    
  }
`

export default Hero