
import InputBox from "./Components/Inputbox"
import usecurrency from "./hooks/usecurrency"
import { useState} from "react"
function App() {
  const [amount, setAmount] = useState(0);
  const [from, setfrom] = useState("usd");
  const [to, setto] = useState("inr");
  const [convertedamount,setconvertedamount]=useState();

  const currencyinfo=usecurrency(from)
  const option=object.keys(currencyinfo);
  const swap=()=>{
    setfrom(to);
    setto(from);
    setconvertedamount(amount);
    setAmount(convertedamount);
  }
  const convert=()=>{
    const currencyinfo=usecurrency(from)
    const option=object.keys(currencyinfo);
    const convertedamount=amount*currencyinfo[to];
    setconvertedamount(convertedamount);
    setAmount(convertedamount);
  } 
  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('${BackgroundImage}')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                       convert();
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert 
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}
export default  App
