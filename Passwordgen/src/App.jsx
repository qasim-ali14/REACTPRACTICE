 import React, { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  //use ref is used to take any reference.
  let passwordref=useRef(null);
  const [password, setPassword] = useState('');
  //if one function run again and again,then use callback hook let us to cache a function
  //in memory in re-renders of function.
  //it is responsible of memoize and chache in the memory when it dependency change

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*_+";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length +1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed,setPassword]);
  const copyintoclipboard=useCallback(()=>{
    passwordref.current?.select();
    window.navigator.clipboard.writeText(password)

  },)
   //now if we want to render this function whenever page load for this if we defined function here it does not allow us ,because in react does not allow us rendering according to us
   //but it render through any state hook any other method
   //so to do this " use effect hook" comes in
//we use this hook to run whenever dependancy change.
  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="w-full h-screen duration-200">
      <div className="flex flex-wrap justify-center align-center mr-60 ml-60 py-4 rounded-lg overflow-hidden my-7 mb-19 shadow-4 px-2" style={{ backgroundColor: 'brown' }}>
        <h2 className='text-white text-center font-bold'>PASSWORD GENERATOR</h2>
        <div className="flex flex-wrap justify-center align-center mr-60 ml-60 py-4 rounded-lg overflow-hidden my-7 mb-19 shadow-4">
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3 rounded-full'
            placeholder='password'
            readOnly
            ref={passwordref}
          />
          <button onClick={copyintoclipboard}  className='outline-none text-white bg-black mt-2 py-1 px-3 rounded-full shrink-0'>COPY</button>
        </div>
        <div>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              className="shadow appearance-none cursor-pointer border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              min="8"
              max="100"
            />
            <label htmlFor="">Length: {length}</label>
          </div>
          <div>
            <input
              type="checkbox"
              checked={numAllowed}
              id='numberallowed'
              onChange={() => setNumAllowed(prev => !prev)}
            />
            <label htmlFor="numberallowed">Number</label>
          </div>
          <div>
            <input
              type="checkbox"
              checked={charAllowed}
              id='charallowed'
              onChange={() => setCharAllowed(prev => !prev)}
            />
            <label htmlFor="charallowed">Character</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
