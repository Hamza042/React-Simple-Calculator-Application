import React, { useState } from 'react';
import './App.css';

const App = () => {
    const [result, setResult] = useState("");

    const hanldeClick = (e) => {
        setResult(result.concat(e.target.name));

    }
    const clear = () => {
        setResult("");
    }
    const backspace = () => {
        setResult(result.slice(0, -1));
    }
    const calculate = () => {
        setResult(eval(result).toString());
    }
    return (
        <div className="container">
         <form>
            <input type="text" value={result} />
         </form>
         <div className="keypad">
            <button className="highlight" onClick={clear} id="clear">Clear</button>
            <button className="highlight" onClick={backspace} id="backspace">C</button>
            <button className="highlight" name="/" onClick={hanldeClick}>&divide;</button>
            <button name="7" onClick={hanldeClick}>7</button>
            <button name="8" onClick={hanldeClick}>8</button>
            <button name="9" onClick={hanldeClick}>9</button>
            <button className="highlight" name="*" onClick={hanldeClick}>&times;</button>
            <button name="4" onClick={hanldeClick}>4</button>
            <button name="5" onClick={hanldeClick}>5</button>
            <button name="6" onClick={hanldeClick}>6</button>
            <button className="highlight" name="-" onClick={hanldeClick}>&ndash;</button>
            <button name="1" onClick={hanldeClick}>1</button>
            <button name="2" onClick={hanldeClick}>2</button>
            <button name="3" onClick={hanldeClick}>3</button>
            <button className="highlight" name="+" onClick={hanldeClick}>+</button>
            <button name="0" onClick={hanldeClick}>0</button>
            <button className="highlight" name="." onClick={hanldeClick}>.</button>
            <button className="highlight" onClick={calculate} id="result">=</button>
         </div>
                 </div>
    );
}
export default App;