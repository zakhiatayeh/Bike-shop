//everytime you make changes to your nodejs, you have to run it again
//to run again, write in the terminal node index.js

const express = require('express') //now we have an instance of the express libary
const app = express()
const mysql = require('mysql')

const bcrypt = require('bcrypt')
const saltRounds = 10

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')

const cors = require('cors')
app.use(
  cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST'],
    credentials: true,
  })
) //just a standard

app.use(
  session({
    key: 'userId',
    secret: 'Jude',
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24, //this is in s and we want 24 hours
    },
  })
)
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.json()) //probably standard too, just to parse json

const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: 'password',
  database: 'project',
})
app.post('/register', (req, res) => {
  const email = req.body.email
  const pass = req.body.pass
  const first_name = req.body.first_name
  const last_name = req.body.last_name
  const userName = req.body.userName
  const Phone = req.body.Phone
  bcrypt.hash(pass, saltRounds, (err, hash) => {
    if (err) {
      console.log(err)
    }
    db.query(
      'INSERT INTO user (email,passcode,first_name,last_name,phone,username) VALUES (?,?,?,?,?,?)',
      [email, hash, first_name, last_name, Phone, userName],
      (err, result) => {
        if (err) {
          console.log(err)
        } else {
          res.send('values Inserted') //sending a message to our request to know that things worked
        }
      }
    )
  })
})
app.get('/login', (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user })
  } else {
    res.send({ loggedIn: false, user: req.session.user });
  }
})
//////////////////////////////////jude new below/////lah lah
/*
app.post('/create', (req, res) => {
  const name = req.body.name
  const age = req.body.age
  const country = req.body.country
  const position = req.body.position
  const wage = req.body.wage

  db.query(
    'INSERT INTO employees (name,age,country,position,wage) VALUES (?,?,?,?,?)',
    [name, age, country, position, wage],
    (err, result) => {
      if (err) {
        console.log(err)
      } else {
        res.send('values Inserted') //sending a message to our request to know that things worked
      }
    }
  )
  //err,result are what we will be done once the statement is done
})*/
///////////////////////////////////////////////////////////////////////////////////////////
app.post('/productselection', (req, res) => {
  const userid=req.body.userid;
  db.query(
    'Select * from product_selection NATURAL JOIN PRODUCT P LEFT JOIN product_discount D ON P.Discount_Name = D.Discount_Name where user_id=?;',userid,
    (err, result) => {
      if (err) {
        console.log(err)
      } else {
        //console.log('greeaat sucess')
        console.log('slection: '+userid)
        console.log('sleectioon:::::::::::::::' + result)
        res.send(result) //to send the data that we got from our query
      }
    }
  )
})

/////////////////////////////////jude new above
app.post('/login', (req, res) => {
  const email = req.body.email
  const pass = req.body.pass

  db.query('SELECT * from user where email = ? ', email, (err, result) => {
    if (err) {
      res.send({ err: err })
    }

    if (result.length > 0) {
      bcrypt.compare(pass, result[0].passcode, (error, response) => {
        if (response) {
          req.session.user = result // creating a session
         // req.session.save();
          console.log(req.session.user)
          res.send(result)
        } else {
          res.send({ message: 'wrong email password combination' })
        }
      })
    } else {
      res.send({ message: 'User does not exist' })
    }
  })
})

//insert into database
//req if you want to request something from the front end
//res if you want to send something to the front end

/*
app.post('/create', (req, res) => {
  const name = req.body.name
  const age = req.body.age
  const country = req.body.country
  const position = req.body.position
  const wage = req.body.wage

  db.query(
    'INSERT INTO employees (name,age,country,position,wage) VALUES (?,?,?,?,?)',
    [name, age, country, position, wage],
    (err, result) => {
      if (err) {
        console.log(err)
      } else {
        res.send('values Inserted') //sending a message to our request to know that things worked
      }
    }
  )
  //err,result are what we will be done once the statement is done
})
*/

app.get('/gettingproductsonsale', (req, res) => {
  db.query(
    'SELECT * FROM product_discount, product, product_category WHERE PRODUCT.DISCOUNT_NAME = PRODUCT_DISCOUNT.DISCOUNT_NAME AND PRODUCT_CATEGORY.category_id = PRODUCT.category_id AND product_discount.is_active=1',
    (err, result) => {
      if (err) {
        console.log(err)
      } else {
        //console.log('greeaat sucess')
        console.log('result:::::::::::::::' + result)
        res.send(result) //to send the data that we got from our query
      }
    }
  )
})
app.get('/gettingproducts', (req, res) => {
  db.query(
    'SELECT * FROM product_discount D  RIGHT JOIN product P  ON (D.Discount_Name = P.Discount_Name) JOIN product_category C ON (P.category_id = C.category_id)',
    (err, result) => {
      if (err) {
        console.log(err)
      } else {
        //console.log('greeaat sucess')
        console.log('result:::::::::::::::' + result)
        res.send(result) //to send the data that we got from our query
      }
    }
  )
})
//Anthonyyyyyyyyyyyyyyyyyyyyyyyyyyy EDIT:
app.get('/gettingCartItems', (req, res) => {
  db.query(//'SELECT * FROM product_selection S NATURAL JOIN product P ',
 
    //correct? 
    'SELECT * FROM product_selection S natural JOIN product P WHERE user_id = 1 ',
  //jude 'SELECT * FROM product_discount D RIGHT JOIN product P ON D.Discount_Name = P.Discount_name',
 
    //myq 'SELECT img_link from product, product_selection WHERE product.product_id = product_selection.product_id GROUP BY user_id HAVING user_id = 1',
    (err, result) => {
      if (err) {
        console.log(err)
      } else {
        //console.log('greeaat sucess')
        console.log('result:------------' + result)
        res.send(result) //to send the data that we got from our query
      }
    }
  )
})
/*
app.put('/update', (req, res) => {
  const id = req.body.id
  const wage = req.body.wage
  db.query(
    'UPDATE employees SET wage= ? WHERE employeeId = ?',
    [wage, id],
    (err, result) => {
      if (err) {
        console.log(err)
      } else {
        res.send(result)
      }
    }
    )
  })
  */

/*
 app.put('/gettingDiscountInfo/:discount_name', (req, res) => {
   const discount_name = req.params.discount_name
   //const wage = req.body.wage
   db.query(
     'SELECT * FROM product_discount WHERE Discount_Name IN ?',
     [discount_name],
     (err, result) => {
       if (err) {
         console.log(err)
        } else {
          res.send(result)
          console.log('gettinnnnnnnnnnnnnnnnnnnnnnnnnnnn');
          console.log("result:::::::::::::::"+result);
        }
      }
      )
    })
*/

/*
app.delete('/delete/:id', (req, res) => {
  const id = req.params.id
  db.query('DELETE FROM employees WHERE employeeId = ?', id, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result)
    }
  })
})
*/


//added on 12 december add to cart
app.post('/addToCart', (req, res) => {
  const productID = req.body.Product_ID
  //const userID = req.body.User_ID
  //const cartID = req.body.Cart_ID

  db.query(
    'INSERT INTO PRODUCT_SELECTION VALUES(3,?,1)',
    [productID],
    (err, result) => {
      if (err) {
        console.log(err)
      } else {
        res.send('product added to cart')
      }
    }
  )
})
app.delete('/deleteCartItem/:Product_ID', (req, res) => {
  const Product_ID = req.params.Product_ID;
  console.log('d')
  db.query('DELETE FROM product_selection WHERE User_ID=3 AND Product_ID=?',Product_ID,
    (err, result) => {
      if (err) {
        console.log(err)
      } else {
        res.send(result)
      }
    }
  )
})

app.listen(3001, () => {
  console.log('your server is running on port 3001')
}) //start our app
