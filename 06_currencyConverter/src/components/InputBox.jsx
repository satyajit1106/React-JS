import React,{useId} from "react";


function InputBox({ 
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOption=[],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
    const amountInputId = useId() // just give the unique id
   
    return (
        // additionally we take the css from the usee if he need to provide some special css in className so we wrote the css inside the js tag

        // we can use htmlfor to generate uniqueId for each currency using the useId hook, if we get problem in the loops in react then we all are recommended to use useId hook
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>

                <input
                // we can generate id using some other method but here using the useId hook we generate the unique value
                    id = {amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled = {amountDisable}
                    value = {amount}

                    // we use && to check if onAmountChange exists or not if yes then we take the value "e.target.value" takes the value in Number formate
                    onChange={ (e)=> onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value = {selectCurrency}
                    disabled = {currencyDisable}

                    // we use && to check if onCurrencyChange exists or not if yes then we take the value "e.target.value" takes the value in string formate
                    onChange={(e)=> e.onCurrencyChange && onCurrencyChange(e.target.value)}
                >
    
                {currencyOption.map( (currency) => (
                    // when we iterate using loop in JSX, we need to pass a unique key referance you can take id's if getting data from the database
                    <option key={currency} value={currency}>
                        {currency}
                    </option>
                ))}
            
                </select>
            </div>
        </div>
    );
}

// if we have more than one component like Input, search, etc can come so we make a js file for this special case and import all those component there and then export them
// export default InputBox;
