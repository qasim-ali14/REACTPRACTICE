import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';

function Passgen() {


    const [length,setlength]=useState(8);
    const [numallowed,setNumallowed]=useState(true);
    const [charallowed,setcharallwed]=useState(true);
    const [password,setpassword]=useState(null);
    const passwordref=useRef();
    const passwordgenerator=useCallback(()=>{
    let pass='';
    let str={
        ABCDEFGHIJKLMNOPQRSTUVWXYZ
    }
    if(numallowed) str+="123456789";
    if(charallowed) str+="!@#$%^&*()_+|!~";
    for(let i=1;i<=length;i++){
      const char=Math.floor(Math.random * str.length+1);
       pass +=charAT(char);
    }
    setpassword(pass);


    },[numallowed,charallowed,length,setpassword])
    const copypassword=useCallback(()=>{
      passwordref.current?.select();
      window.navigator.clipboard.writeText(password)
    })

  useEffect(()=>{
  passwordgenerator();
  },[charallowed,numallowed,length,setpassword])

  return (
    <div>
        <input type="password"
        value={password}
        placeholder='password'
        readOnly
        ref={passwordref}
        
        />
        <button onClick={copypassword}>COPY </button>
      <input
       type="range"
       value={length}
       onChange={()=>{setlength(e.target.value)}}
       
      />
      <label htmlFor="">length:{length}</label>
      <input type="checkbox"
       checked={numallowed}
       id='numallowed'
       onChange={()=>{
        setNumallowed((prev)=> !prev)
       }}
      />
      <label htmlFor="">number</label>
      <input type="checkbox"
      checked={charallowed}
      id="charallowed"
      onchange={()=>{
        setcharallowed((prev)=> !prev)
      }}
      
      />
      <label htmlFor="">character</label>
    </div>
  )
}

export default Passgen
