import "./App.css"
// import Card from "./Component/Card"
import "./State"
import State from "./State";
function App(){
  return(
    <>
    <h2 className="bg-green-400 text-white p-6 size-19 mb-4" >   tailwind css</h2>
     <State/>
    {/* <Card username="Qasim" btn="click me" />
    <Card username="ALI" btn="visit me"/>
    <Card username="SAJJAD" />//In card.jsx file we give default value in case if value not given then will be displayed.
     */}


          </>
  );
}
export default App;