//import './products.css'
import Axios from 'axios'

import React from 'react'
//import ReactDom from 'react-dom'

function HeadBike({list}) {
  //const toReturn = list.map((bike) => (<Bike key={bike.Product_ID} bike={bike} />))
  //')
  const addToCart = (product_id) => {
    Axios.post('http://localhost:3001/addToCart', {
      Product_ID: product_id,
    }).then(console.log('adddddddddddddddded to cartrtttttttttttt'))
  }


  console.log("listttttttttttttttttttttttttttttttttt"+list)
  return (
    <section className='itemsList'>
      {list.map((bike)=>{
        console.log(bike);
        if (bike.Category_Name === 'bikes' && bike.Discount_Name === null) {
          //to only show bikes
          return (
            <article className='item' onMouseOver={() => console.log('sup')}>
              <div>
                <img src={bike.img_link} alt='Bike' />
                <h2>{bike.Product_Name}</h2>
                <h4>{bike.Product_description}</h4>
                <h3>{bike.price} $</h3>
              </div>
              <button type='button'>reference example</button>
              <button
                type='button'
                onClick={() => {
                  addToCart(bike.Product_ID)
                }}
              >
                Add to Cart
              </button>
            </article>
          )
        } else if (
          bike.Category_Name === 'bikes' &&
          bike.Discount_name !== null &&
          bike.is_active == 1
        ) {
          //item is on sale
          //console.log(bike);
          //console.log(bike.Category_ID);
          //console.log(bike);
          return (
            <article className='item' onMouseOver={() => console.log('sup')}>
              <div>
                <img src={bike.img_link} alt='bike' />
                <h2>{bike.Product_Name}</h2>
                <h4>{bike.Product_description}</h4>

                <div class='flex-container'>
                  <div class='flex-child green'>
                    <h3 className='discountedprice'>
                      <del>{bike.price}$</del>
                    </h3>
                  </div>
                  <div class='flex-child magenta'>
                    <h3>
                      {bike.price -
                        (bike.price * bike.Discount_Percentage) / 100}
                      $
                    </h3>
                  </div>
                </div>
              </div>
              <button type='button'>reference example</button>
              <button
                type='button'
                onClick={() => {
                  addToCart(bike.Product_ID)
                }}
              >
                Add to Cart
              </button>
            </article>
          )
        } else if (
          bike.Category_Name === 'bikes' &&
          bike.Discount_name !== null &&
          bike.is_active == 0
        ) {
          //item is on sale
          console.log(bike)
          //console.log(bike.Category_ID);
          //console.log(bike);
          return (
            <article className='item' onMouseOver={() => console.log('sup')}>
              <div>
                <img src={bike.img_link} alt='Bike' />
                <h2>{bike.Product_Name}</h2>
                <h4>{bike.Product_description}</h4>
                <h3>{bike.price} $</h3>
              </div>
              <button type='button'>reference example</button>
              <button
                type='button'
                onClick={() => {
                  addToCart(bike.Product_ID)
                }}
              >
                Add to Cart
              </button>
            </article>
          )
        }
      })}
    </section>
  )
}
 

export default HeadBike




