
import { useState } from "react";
import "./App.css"
function State() {
  //mostly react changes value and propagaate value in user interface.
                //for that we used hook.
                //it changes states in multiple places in UI.
                //we have to make changes in four places here in jsx so react matches those changes with
    //main dom and apply these  all changes into them.
         let [vari,setvari]=useState(10);   
    let fun=()=>{
  if(vari>=20){
    setvari(
    vari-10
    )
  }
  else{
  setvari(
  vari+1
  )
  }
  }
  let funn=()=>{
    if(vari<=1){
      setvari(
      vari+9
      )
    }
    else{
    setvari(
    vari-1
    )
  }
   
  } 

  return (
    <>
     <h2>chai with react {vari}</h2>
     <button onClick={fun}> value:{vari}</button>
     <br/>
    
<button onClick={funn}>
  decrement:{vari}
  </button> 
  <p> footer:{vari}</p>
     </>
  
  )
}

export default State
