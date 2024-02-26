
import { useState } from "react";
import "./App.css"
function State() {
  //mostly react changes value and propagaate value in user interface.
                //for that we used hook.
                //it changes states in multiple places in UI.
                //we have to make changes in four places here in jsx so react matches those changes with
    //main dom and apply these  all changes into them.
         let [vari,setvari]=useState(10);   
    let fun=()=>{// actually setfunction it takes value in batches so first i will
      //consider this is one time value after applying callback ,here basically setfunction take a callback as a parameter,so by using this and precounter
      //value we can take previous counter value and increase into other,so i will increase 4 times
  setvari(precounter=> precounter+1);
  setvari(precounter=> precounter+1);
  setvari(precounter=> precounter+1);
  setvari(precounter=> precounter+1);
  }
  let funn=()=>{
    setvari(vari-1);
   
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
