import React from 'react';
import { useCounterCtx } from './CounterContext';

function CompB() {
    const counterCtx = useCounterCtx();
    return (
        <div>
            <h4>CompB</h4>
            <button onClick={counterCtx.increaseCounter}>+10</button>
            <button onClick={counterCtx.decreaseCounter}>-10</button>
        </div>
    );
}

export default CompB;
