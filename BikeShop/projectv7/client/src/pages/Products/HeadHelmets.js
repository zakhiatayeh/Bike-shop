//import './products.css'
import Axios from 'axios'

import React from 'react'
//import ReactDom from 'react-dom'

function HeadHelmets({ list }) {
  //const toReturn = list.map((helmet) => (<helmet key={helmet.Product_ID} helmet={helmet} />))
  const addToCart = (product_id) => {
    Axios.post('http://localhost:3001/addToCart', {
      Product_ID: product_id,
    }).then(console.log('adddddddddddddddded to cartrtttttttttttt'))
  }
  return (
    <section className='itemsList'>
      {list.map((helmet) => {
        console.log(helmet)
        if (helmet.Category_Name === 'helmets' && helmet.Discount_Name === null) {
          //to only show helmets
          return (
            <article className='item' onMouseOver={() => console.log('sup')}>
              <div>
                <img src={helmet.img_link} alt='helmet' />
                <h2>{helmet.Product_Name}</h2>
                <h4>{helmet.Product_description}</h4>
                <h3>{helmet.price} $</h3>
              </div>
              <button type='button'>reference example</button>
              <button
                type='button'
                onClick={() => {
                  addToCart(helmet.Product_ID)
                }}
              >
                Add to Cart
              </button>
            </article>
          )
        } else if (
          helmet.Category_Name === 'helmets' &&
          helmet.Discount_name !== null &&
          helmet.is_active == 1
        ) {
          //item is on sale
          //console.log(helmet);
          //console.log(helmet.Category_ID);
          //console.log(helmet);
          return (
            <article className='item' onMouseOver={() => console.log('sup')}>
              <div>
                <img src={helmet.img_link} alt='helmet' />
                <h2>{helmet.Product_Name}</h2>
                <h4>{helmet.Product_description}</h4>

                <div class='flex-container'>
                  <div class='flex-child green'>
                    <h3 className='discountedprice'>
                      <del>{helmet.price}$</del>
                    </h3>
                  </div>
                  <div class='flex-child magenta'>
                    <h3>
                      {helmet.price -
                        (helmet.price * helmet.Discount_Percentage) / 100}
                      $
                    </h3>
                  </div>
                </div>
              </div>
              <button type='button'>reference example</button>
              <button
                type='button'
                onClick={() => {
                  addToCart(helmet.Product_ID)
                }}
              >
                Add to Cart
              </button>
            </article>
          )
        } else if (
          helmet.Category_Name === 'helmets' &&
          helmet.Discount_name !== null &&
          helmet.is_active == 0
        ) {
          //item is on sale
          //console.log(helmet);
          //console.log(helmet.Category_ID);
          //console.log(helmet);
          return (
            <article className='item' onMouseOver={() => console.log('sup')}>
              <div>
                <img src={helmet.img_link} alt='helmet' />
                <h2>{helmet.Product_Name}</h2>
                <h4>{helmet.Product_description}</h4>
                <h3>{helmet.price} $</h3>
              </div>
              <button type='button'>reference example</button>
              <button
                type='button'
                onClick={() => {
                  addToCart(helmet.Product_ID)
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

export default HeadHelmets
