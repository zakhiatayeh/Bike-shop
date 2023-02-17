import React from 'react'
import './Products.js'
import CartItems from './CartItems.js'
import HeadBikes from './Products/HeadBikes.js'
import HeadHelmets from './Products/HeadHelmets.js'
import HeadAccessories from './Products/HeadAccessories'
import './Products/products.css'
import { Link } from 'react-router-dom'
//import Order from'./Order.js'

import { useState, useEffect } from 'react'
import Axios from 'axios'

/*const Cart = (props) => {
  const [cartList, setCartList] = useState([])

  const getCartItems = () => {
    Axios.get('http://localhost:3001/gettingCartItems').then((response) => {
      setCartList(response.data) //in my response, look at status it should be 200 and my information is inside of data
    })
    console.log('CARTITEMSHERE')
    console.log(cartList)
  }

  useEffect(() => {
    getCartItems()
  },[])
    
  return (
    <div> 
      <h1 id='bill'>Cart</h1>
      <CartItems list={cartList} /> 
      
    </div>
  )
}
export default Cart
*/

const Cart = (props) => {
  const [list, setList] = useState([])
  var total = 0

  const [currentUser, setcurrentUser] = useState('')

  Axios.defaults.withCredentials = true
  const getUser = () => {
    Axios.get('http://localhost:3001/login').then(
      (response) => {
        // if (response.data.loggedIn == true) {
        //console.log(response.data.user_ID+'ggggggg');
        setcurrentUser(response.data.user[0].user_ID)
        console.log(response.data.user[0].user_ID)
        console.log(currentUser)
      } //the part above is to get the current user
      //}
    )

    console.log('hello')
  } //iyyem aam bi bayno l items iyyem la2 cz eza bt chouf bl console iyyem fi sleectioon:::::::::::::::[object Object],[object Object]
  //w iyyem sleectioon:::::::::::::::
  const getCartItems = () => {
    Axios.post('http://localhost:3001/productselection', {
      userid: currentUser, //currentuser
    }).then((response) => {
      console.log('zakhia' + currentUser);
      //userid=3 lezem aamela automatic
      setList(response.data) //in my response, look at status it should be 200 and my information is inside of data
      //console.log(response.data+'yzshoo')
    })
    //console.log('proooooducttttttttt')
    //console.log(list[0]+'qwerty')
  }

  useEffect(() => {
    getUser();
    getCartItems();
  }, [])
  const orderCart = () => {
    //gput cart items in order
    //empty current cart id
  }
  const deleteCartItem = (Product_ID)=>{// also add later specific userid
  //  Axios.delete(`http://localhost:3001/deleteCartItem/${Product_ID}`).then((response) => {
  //    console.log('just deleted item');
      //setEmployeeList(
     //   employeeList.filter((val) => {
     //     return val.employeeId != id
     //   })
      //)
   // })
  }

  return (
    <div>
      <h1>{currentUser}</h1>
      
      {
        //total=0;
        list.map((item) => {
          if (
            item.Discount_Name === null ||
            (item.Discount_Name !== null && item.isactive === 0)
          ) {
            total += item.price;
            return (
              <article className='item' onMouseOver={() => console.log('sup')}>
                <div>
                  {/*<h1>{item.Cart_ID}</h1>*/}
                  <img src={item.img_link} alt='Bike' />
                  <h2>{item.Product_Name}</h2>

                  <h4>{item.Product_description}</h4>
                  <h3>{item.price} $</h3>
                </div>
                <button type='button'>Minus</button>
                <button type='button'>Plus</button>

                <button
                  type='button'
                  onClick={() => {
                    deleteCartItem(item.Product_ID);
                  }}
                >
                  {' '}
                </button>
                  <img className='trashCan' src={require('../pictures/trash.png')} alt='trashcan' />
              </article>
            )
          } else if (item.Discount_Name !== null && item.is_active == 1) {
            total += item.price - (item.price * item.Discount_Percentage) / 100
            return (
              <article className='item' onMouseOver={() => console.log('sup')}>
                <div>
                  {/*<h1>f</h1>*/}
                  <img src={item.img_link} alt='item' />
                  <h2>{item.Product_Name}</h2>
                  <h4>{item.Product_description}</h4>

                  <div class='flex-container'>
                    <div class='flex-child green'>
                      <h3 className='discountedprice'>
                        <del>{item.price}$</del>
                      </h3>
                    </div>
                    <div class='flex-child magenta'>
                      <h3>
                        {item.price -
                          (item.price * item.Discount_Percentage) / 100}
                        $
                      </h3>
                    </div>
                  </div>
                </div>
                <button type='button'>Minus</button>
                <button type='button'>Plus</button>
                <button
                  type='button'
                  onClick={() => {deleteCartItem(item.Product_ID)}}>
                  <img src='' alt='delete button' />
                </button>
              </article>
            )
          }
        })
      }
      <h1>total: {total}</h1>
      <button
        onClick={() => {
          orderCart() //lamma tekbos order, l echya li lezem taamela btaamela bi ordercart
        }}
      >
        <Link to='/order'>Order</Link>
      </button>
    </div>
  )
}

export default Cart
