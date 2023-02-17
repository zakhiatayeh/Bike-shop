import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import './css/navbar.css'

const navbar = () => {

  const path = window.location.pathname;

  return (
    <div>
      <nav className='nav'>
        <ul className='nav__list'>
          <li className='nav__listlogo'>
            <img src={require('./pictures/bicycle.png')} alt='BikeShop' />
          </li>

          <Link className='nav__listitem' to='home'>
            Home
          </Link>
          <li className='nav__listitem' href='products'>
            Products
            <ul className='nav__listitemdrop'>
              <li>
                <Link to='/products' relocation=''>
                  All Products
                </Link>
              </li>
              <li>
                <Link to='/products#bikerelocate' relocation='bikerelocate'>
                  Bikes
                </Link>
              </li>
              <li>
                <Link to='/products' relocation='helmetsrelocate'>
                  Helmets
                </Link>
              </li>
              <li>
                <Link to='/products' relocation='accessoriesrelocate'>
                  Accessories
                </Link>
              </li>
            </ul>
          </li>
          <Link className='nav__listitem' to='/onSale'>
            On Sale
          </Link>
          <Link className='nav__listitem' to='/about'>
            About
          </Link>
          <Link className='nav__listitem' to='/SignIn'>
            Login/Sign Up
          </Link>
          <Link className='nav__listitem nav__listlogo rightmost' to='/cart'>
            <img
              
              id='icon'
              src={require('./pictures/cart.png')}
              alt='ggg'
            />
          </Link>
        </ul>
      </nav>
      <div class='distance'></div>
      {/*<h1>{path}</h1>*/}
    </div>
  )

  /*function CustomLink({to,children, ...props}){
    const relocation = props.relocation;
    return (
      <li>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
  }*/
}

export default navbar
