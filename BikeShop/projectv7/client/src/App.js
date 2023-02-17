//import Navbar from './Navbar3'
//import Pricing from './pages/Products'
//import Home from './pages/Home'
//import About from './pages/About'
import Navbar from './Navbar'

import About from './pages/About'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Onsale from './pages/Onsale'
import Products from './pages/Products'
import SignIn from './pages/SignIn'
import Order from './pages/Order'
//import Login from './pages/Login'
//import Register from './pages/Register'


//import {useState} from 'react';
import {Route,Routes} from 'react-router-dom'
//import Axios from 'axios';


//import './css/signin.css';


/*
import './App.css';
import {useState} from 'react';
import Axios from 'axios';
import Comp from './Comp.js';

function App() {

  const [name,setName] = useState('');
  const [age,setAge] = useState(0);
  const [country,setCountry] = useState('');
  const [position,setPosition] = useState('');
  const [wage,setWage] = useState(0);

  const[employeeList,setEmployeeList] = useState([]);

  const[newWage,setNewWage] = useState(0);
  
  const addEmployee = () =>{
    //through the following post request, im sending the object created below to the link provided
    Axios.post('http://localhost:3001/create', { 
      name: name, 
      //the second name is the one created in the useState above
      //this whole thing(2nd parameter of axios.post) is an object called body
      //it will be used in the index.js in server when saying const name = req.body.name <-- this name is the one i just created inside of this object
      age: age,
      country: country, 
      position: position,
      wage: wage,
      //using .then below since its a promise
    }).then((console.log('success')))
    //hattayna create cz bl index.js bl server folder hattayna app.post('/create',(req,res)....
  }
  
  const getEmployees = () =>{
    Axios.get('http://localhost:3001/employees').then((response)=>{
      setEmployeeList(response.data);//in my response, look at status it should be 200 and my information is inside of data
    })
    console.log('employeeeeeeeeeeeeeeee')
    console.log(employeeList)
  }

  const updateEmployeeWage = (id) => {
    Axios.put('http://localhost:3001/update', { wage: newWage, id: id }).then(
      (response) => {
        setEmployeeList(
          employeeList.map((val) => {
            return val.employeeId == id
              ? {
                  employeeId: val.employeeId,
                  name: val.name,
                  country: val.country,
                  age: val.age,
                  position: val.position,
                  wage: newWage,
                }
              : val;
          })
        );
      }
    );
  };

  const deleteEmployee = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setEmployeeList(
        employeeList.filter((val) => {
          return val.employeeId != id
        })
      )
    })
  }


  return (
    <div className='App'>
      <Comp/>
      <div className='information'>
        <label>name</label>
        <input
          type='text'
          onChange={(event) => {
            setName(event.target.value)
          }}
        />
        <label>Age</label>
        <input
          type='number'
          onChange={(event) => {
            setAge(event.target.value)
          }}
        />
        <label>Country</label>
        <input
          type='text'
          onChange={(event) => {
            setCountry(event.target.value)
          }}
        />
        <label>Position</label>
        <input
          type='text'
          onChange={(event) => {
            setPosition(event.target.value)
          }}
        />
        <label>Wage (year):</label>
        <input
          type='number'
          onChange={(event) => {
            setWage(event.target.value)
          }}
        />
        <button onClick={addEmployee}>Add Employee</button>
      </div>

      <div className='employees'>
        
        <button onClick={getEmployees}>Show Employees</button>

        {employeeList.map((val,key) => {
          return <div className='employee'>
            <div>
              <h3>Name: {val.name}</h3>
              <h3>Age: {val.age}</h3>
              <h3>Country: {val.country}</h3>
              <h3>Position: {val.position}</h3>
              <h3>Wage: {val.wage}</h3>
            </div>
            <div>
              <input 
              type="text" 
              placeholder='2000...' 
              onChange={(event)=>{
                setNewWage(event.target.value);
              }}/>
              <button onClick={()=>{
                updateEmployeeWage(val.employeeId)
              }}> Update</button>
              <button onClick={()=>{
                deleteEmployee(val.employeeId)
              }}>Delete</button>
            </div>
            </div>;
        })}

      </div>
    </div>
  )
}

export default App;




*/ 


function App() {

  return (
    <div>
      <Navbar />
      <div className='container'>
        <Routes>
          {/*/////////////*/}
          <Route path='/order' element={<Order/>}></Route>
          {/*///////////////*/}
          <Route path='/home' element={<Home />}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route
            path='/products#bikerelocate'
            element={<Products loc='helmets' />}
          ></Route>
          <Route path='/onsale' element={<Onsale />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/SignIn' element={<SignIn />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App;
