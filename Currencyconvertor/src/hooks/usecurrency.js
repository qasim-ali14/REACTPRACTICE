import React from 'react'
import { useState,useEffect } from 'react'
 function usecurrency(currency) {
   const [data,setdata]=useState({});
   useEffect(()=>{
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
    .then((res)=> res.json)
    .then((res)=>  setdata(res[currency]))  ;
    console.log(data);
   
},[currency])
console.log(data);
  return data;
}
export default usecurrency
