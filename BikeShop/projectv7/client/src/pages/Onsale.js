import React from 'react'
import HeadBikes from './Products/HeadBikes.js'
import HeadHelmets from './Products/HeadHelmets.js'
import HeadAccessories from './Products/HeadAccessories'
//import './Products/products.css'

//import { useRef } from 'react'

import { useState, useEffect } from 'react'
import Axios from 'axios'


const Onsale = () => {
  const [productsList, setProductsList] = useState([]);
  //const [discountInfo, setDiscountInfo] = useState([]);
  
  
  const getProductsOnSale = () => {
    Axios.get('http://localhost:3001/gettingproductsonsale').then((response) => {
      setProductsList(response.data); //in my response, look at status it should be 200 and my information is inside of data     
    })
    console.log('proooooducttttttttt')
    console.log(productsList)
  }
  
  for (var i = 0; i < productsList.length; i++) {
    if(productsList[i].Discount_Name==null){
      productsList.splice(i);
    }
    //else{
      // setDiscountInfo(discountInfo+productsList[i].slice('Discount_Name'))
   // }
  }


/********************************** 
 const getDiscountInfo = (discount_name) => {
    Axios.put(`http://localhost:3001/gettingdiscountinfo/${discount_name}`).then((response) => {
      setDiscountInfo(response.data) //in my response, look at status it should be 200 and my information is inside of data
    })
    console.log('discount')
    console.log(discountInfo)
  }

*******************************/
  useEffect(() => {
    getProductsOnSale();
   //////////////////////////////////////////////// getDiscountInfo();
  }, [])

  return (
    <div>

      {/*<h1>{ Object.keys(productsList).length}</h1>*/}
      <h1 id='category'>Bikes</h1>
      <HeadBikes list={productsList} />
      <h1 id='category'>Helmets</h1>
      <HeadHelmets list={productsList} />
      <h1 id='category'>Accessories</h1>
      <HeadAccessories list={productsList} />

      <div className='bikerelocate' id='bikerelocate'>
        BIKESSS
      </div>
      <div className='helmetsrelocate' id='helmetsrelocate'>
        Helmets
      </div>
      <div className='accessoriesrelocate' id='accessoriesrelocate'>
        Accessories
      </div>
    </div>
  )
}

export default Onsale



