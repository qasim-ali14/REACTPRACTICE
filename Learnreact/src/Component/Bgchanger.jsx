import { useState } from "react";

function Bgchanger(){
  const [color,setcolor]=useState("olive");
  return(
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}>
    <div className="fixed flex flex-wrap justify-center bottom-14
     -inset-x-0 px-2"> 
     <div className="fixed flex flex-wrap justify-center gap-3
     shadow-lg bg-white px-3 py-2 rounded-3xl ">
      <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-red-600"
       onClick={()=>setcolor("red")}>red</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-blue-700"
      onClick={()=>setcolor("blue")}>blue</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-green-700"
      onClick={()=>setcolor("green")}>green</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-pink-600"
      onClick={()=>setcolor("pink")}>pink</button>
        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
     style={{backgroundColor:"black"}}  onClick={()=>setcolor("black")}>black</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-yellow-700"
      onClick={()=>setcolor("yellow")}>yelllow</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"brown"}}
      onClick={()=>setcolor("brown")}>brown</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-red-600"
       style={{backgroundColor:color}}>live color chnager</button>


     </div>



    </div>
    </div>
  );
}
export default Bgchanger;