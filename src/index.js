import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


function Hello() {
  return (
    //  <App />
   <div>
     <App />
   </div>
  
    );
}

ReactDOM.render(<Hello />, document.getElementById('root'));

// const express = require("express");
// const mysql= require("mysql");

// const app= express();
// app.use(express.json());

// const db= mysql.createConnection(
//   {
//     $conn= mysqli_connect('localhost','timetable', 'timetable','timetable');
// if(!$conn){
//     echo 'cannot connect to database';
//     exit;
// }
    
//     // user:"react",
//     // host:"localhost",
//     // password: "react",
//     // database: "react",

//   }
// );

// app.listen(3001, () =>{
//   console.log("running server");
// });