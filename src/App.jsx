import Child1 from './Child1'

import { useDispatch } from 'react-redux';
import {CounterSlice} from './counter';

const App = () => {
    const dispatch = useDispatch();

    function incriment(e) {
        dispatch(CounterSlice.actions.incCount());
       
        
    }
    function decrement(e) {
        dispatch(CounterSlice.actions.decCount());
    }
    function recent(e) {
        dispatch(CounterSlice.actions.recentCount());
    }

  
    return (
        <>
        <h2>Counter</h2>
        <div  className='counters'>
            <Child1 />
            <div className='buttons'>
            <button onClick={incriment}>increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={recent}> recent</button></div>
        </div>
        </>
    )
}

export default App