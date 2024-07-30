import { useState } from "react"
import {Input} from "./components"
import useCurrencyInfo from "./hooks/useCurrencyInfo"

function App() {

  const [amount, setAmount] = useState(0)
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  // swap two variable 
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  // this will give us the final result after mul, we can find these key values in the currencyInfo and to what currency we want to convert we mul our number with
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])

  }
  function App() {
    
    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/27025494/pexels-photo-27025494/free-photo-of-a-bridge-over-the-water-with-a-sign-that-says-it-s-a-bridge.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                      // here when form is called it goes somewhere in the browser so we stop it's default operation a
                        onSubmit={(e) => {
                          e.preventDefault();
                          convert() 
                        }}
                    >
                        <div className="w-full mb-1">
                            <Input
                              label="From"
                              currencyOption = {options} 
                              amount = {amount}
                              onCurrencyChange = {(currency)=>{
                                setAmount(amount)
                              }}
                              selectCurrency = {from}
                            />
                        </div>

                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                // to swap we use onClick property
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <Input
                              label="To"
                              currencyOption = {options} 
                              amount = {amount}
                              onCurrencyChange = {(currency)=>{
                                setAmount(amount)
                              }}
                              selectCurrency = {to}
                              amountDisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase} to {to.toUpperCase}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
  }
}

export default App
