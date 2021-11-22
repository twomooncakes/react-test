import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';

export const CounterContext = React.createContext({
    counter: 0,
    increaseCounter: () => {},
    decreaseCounter: () => {},
});

function CounterProvider({ children }) {
    const [counter, setCounter] = useState(0);

    const increaseCounter = () => {
        if(counter >= 100) {
            toast.error('Didinti nebegalima');
            return;
        }
        setCounter(counter + 10);
    };

    const decreaseCounter = () => {
        setCounter(counter - 10);
    };

    const counterCtx = {
        counter: counter,
        increaseCounter: increaseCounter,
        decreaseCounter: decreaseCounter,
    };
    return (
        <CounterContext.Provider value={counterCtx}>
            {children}
        </CounterContext.Provider>
    );
}

export default CounterProvider;

export function useCounterCtx() {
    return useContext(CounterContext);
}