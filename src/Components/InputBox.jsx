import { useId } from "react";
function InputBox({ label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDesable = false,
    currencyDisable = false,
    className = "" }) {
    const amountInputID = useId()
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex  ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputID} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputID}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDesable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    value={selectCurrency}
                    onChange={() => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none" >
                    {
                        currencyOptions.map((item) => (
                            <option key={item} value={item}>
                                {item}
                            </option>
                        ))
                    }
                </select>
            </div>
        </div>
    );
}

export default InputBox;

