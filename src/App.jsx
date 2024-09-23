
import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {CounterSlice} from './counter';

const App = () => {
    const dispatch = useDispatch();
    const { count } = useSelector(store => store.counter)
    
    const [inputValue, setInputValue] = useState('');
   

     function add(e) {
        setInputValue(e.target.value);
    }
    function incriment(e) {
        dispatch(CounterSlice.actions.incCount());
       
        
    }
    function decrement(e) {
        dispatch(CounterSlice.actions.decCount());
    }
    function recent(e) {
        dispatch(CounterSlice.actions.recentCount());
    }
   function addbutton(e) {
     dispatch(CounterSlice.actions.addd(Number(inputValue)));
   }
  
    return (
        <>
        <h2>Counter</h2>
        <div  className='counters'>
           <div className='inputfiled'> <input type="text" placeholder='Enter number' value={inputValue} onChange={add} />
            <button onClick={addbutton}>add</button></div>
          <h1>{count}</h1> 
            <div className='buttons'>
            <button onClick={incriment}>increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={recent}> recent</button></div>
        </div>
        </>
    )
}

export default App