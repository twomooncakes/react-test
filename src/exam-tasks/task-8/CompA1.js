import React from 'react';
import { useCounterCtx } from './CounterContext';

function CompA1() {
    const counterCtx = useCounterCtx();
    return (
        <div>
            <h5>CompA1</h5>
            <button onClick={counterCtx.increaseCounter}>+10</button>
            <button onClick={counterCtx.decreaseCounter}>-10</button>
        </div>
    );
}

export default CompA1;
