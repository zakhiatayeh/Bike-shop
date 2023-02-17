//import './products.css'
import Axios from 'axios'

import React from 'react'
//import ReactDom from 'react-dom'

function HeadAccessories({ list }) {
  const addToCart = (product_id) => {
    Axios.post('http://localhost:3001/addToCart', {
      Product_ID: product_id,
    }).then(console.log('adddddddddddddddded to cartrtttttttttttt'))
  }

  return (
    <section className='itemsList'>
      {list.map((accessory) => {
        //console.log(accessory.Product_ID)
        if (
          accessory.Category_Name === 'accessories' &&
          accessory.Discount_Name === null
        ) {
          //to only show accessorys
          return (
            <article className='item' onMouseOver={() => console.log('sup')}>
              <div>
                <img src={accessory.img_link} alt='accessory' />
                <h2>{accessory.Product_Name}</h2>
                <h4>{accessory.Product_description}</h4>
                <h3>{accessory.price} $</h3>
              </div>
              <button type='button'>reference example</button>
              <button
                type='button'
                onClick={() => {
                  addToCart(accessory.Product_ID)
                }}
              >
                Add to Cart
              </button>
            </article>
          )
        } else if (
          accessory.Category_Name === 'accessories' &&
          accessory.Discount_name !== null &&
          accessory.is_active == 1
        ) {
          //item is on sale
          //console.log(accessory);
          //console.log(accessory.Category_ID);
          //console.log(accessory);
          return (
            <article className='item' onMouseOver={() => console.log('sup')}>
              <div>
                <img src={accessory.img_link} alt='accessory' />
                <h2>{accessory.Product_Name}</h2>
                <h4>{accessory.Product_description}</h4>

                <div class='flex-container'>
                  <div class='flex-child green'>
                    <h3 className='discountedprice'>
                      <del>{accessory.price}$</del>
                    </h3>
                  </div>
                  <div class='flex-child magenta'>
                    <h3>
                      {accessory.price -
                        (accessory.price * accessory.Discount_Percentage) / 100}
                      $
                    </h3>
                  </div>
                </div>
              </div>
              <button type='button'>reference example</button>
              <button
                type='button'
                onClick={() => {
                  addToCart(accessory.Product_ID)
                }}
              >
                Add to Cart
              </button>
            </article>
          )
        } else if (
          accessory.Category_Name === 'accessories' &&
          accessory.Discount_name !== null &&
          accessory.is_active == 0
        ) {
          //item is on sale
          //console.log(accessory);
          //console.log(accessory.Category_ID);
          //console.log(accessory);
          return (
            <article className='item' onMouseOver={() => console.log('sup')}>
              <div>
                <img src={accessory.img_link} alt='accessory' />
                <h2>{accessory.Product_Name}</h2>
                <h4>{accessory.Product_description}</h4>
                <h3>{accessory.price} $</h3>
              </div>
              <button type='button'>reference example</button>
              <button
                type='button'
                onClick={() => {
                  addToCart(accessory.Product_ID)
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

export default HeadAccessories
