import React from 'react'
import HeadBikes from './Products/HeadBikes.js'
import HeadHelmets from './Products/HeadHelmets.js'
import HeadAccessories from './Products/HeadAccessories'
import './Products/products.css'

//import {useRef} from 'react';

import { useState ,useEffect} from 'react'
import Axios from 'axios'

const Products = (props) => {
  const [productsList, setProductsList] = useState([])

  const getProducts = () => {
    Axios.get('http://localhost:3001/gettingproducts').then((response) => {
      setProductsList(response.data) //in my response, look at status it should be 200 and my information is inside of data
    })
    console.log('proooooducttttttttt')
    console.log(productsList)
  }

  useEffect(() => {
    getProducts()
  },[])
    

  return (
    <div>
      <h1 id='category'>Bikes</h1>

      <HeadBikes list={productsList} />
      <h1 id='category'>Helmets</h1>
      <HeadHelmets list={productsList} />
      <h1 id='category'>Accessories</h1>
      <HeadAccessories list={productsList} />
      {/*
      <div className='bikerelocate' id='bikerelocate'>
        BIKESSS
      </div>
      <div className='helmetsrelocate' id='helmetsrelocate'>
        Helmets
      </div>
      <div className='accessoriesrelocate' id='accessoriesrelocate'>
        Accessories
      </div>
      */}
    </div>
  )
}

export default Products