import axios from "axios";
import {useEffect, useState} from "react";
const array =[
  {
    id:"1",
    num: '2341567890',
    email: 'akar098@gmail.com',
    password:'@12345678#'
  }
]

export default function Sign() {
 
  useEffect(()=>{    

  let a =   axios.post('https://670e4b65073307b4ee464347.mockapi.io/Uaersapi',
      {
        id:"1",
        num: '2341567890',
        email: 'akar098@gmail.com',
        password:'@12345678#'
      },
      {
        id:"1",
        num: '2342563896',
        email: 'kural5590@gmail.com ',
        password:'@145678#'
      }
    )
    
         .then(res => console.log(res))
         .catch(err => console.log(err));
      
  },[])

   
  return (
    <div></div>
  );
}