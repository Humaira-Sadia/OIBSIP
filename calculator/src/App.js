import { useState } from 'react';

function App() {

  const [result, setResult] = useState("");

  const clickHandler = (event) => {
    setResult(result.concat(event.target.value))
  }

  const clearDisplay = () => {
    setResult("");
  }

  const calculate = () => {
    try{
      setResult(eval(result).toString())
    }
    catch(error){
      setResult("".concat("Invalid Syntax..."))
    }
  }

  const cancel = () => {
    setResult(result.slice(0, result.length - 1))
  }

  return (
    <div className="main-body">
      <div className="input-feild">
        <input type='text' id='answer' value={result} />
      </div>
      <div className="buttons">
        <input type='button' className='clear orange' value='Clear' onClick={clearDisplay} />
        <input type='button' className='keypad orange' value='AC' onClick={cancel} />
        <input type='button' className='keypad orange' value='/' onClick={clickHandler} />
        <input type='button' className='keypad' value='7' onClick={clickHandler} />
        <input type='button' className='keypad' value='8' onClick={clickHandler} />
        <input type='button' className='keypad' value='9' onClick={clickHandler} />
        <input type='button' className='keypad orange' value='*' onClick={clickHandler} />
        <input type='button' className='keypad' value='4' onClick={clickHandler} />
        <input type='button' className='keypad' value='5' onClick={clickHandler} />
        <input type='button' className='keypad' value='6' onClick={clickHandler} />
        <input type='button' className='keypad orange' value='-' onClick={clickHandler} />
        <input type='button' className='keypad' value='1' onClick={clickHandler} />
        <input type='button' className='keypad' value='2' onClick={clickHandler} />
        <input type='button' className='keypad' value='3' onClick={clickHandler} />
        <input type='button' className='keypad orange' value='+' onClick={clickHandler} />
        <input type='button' className='keypad' value='.' onClick={clickHandler} />
        <input type='button' className='keypad' value='0' onClick={clickHandler} />
        <input type='button' className='calculate orange' value='=' onClick={calculate} />
      </div>
    </div>    
  );
}

export default App;
