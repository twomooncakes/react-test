import React, { useState, useEffect } from 'react';
import CompA from './CompA';
import CompB from './CompB';
import css from './Task8.module.css';
import { useCounterCtx } from './CounterContext';

function Task8() {
    const counterCtx = useCounterCtx();
    const [counter, setCounter] = useState(counterCtx.counter);

    useEffect(() => {
        setCounter(counterCtx.counter);
    }, [counterCtx.counter])

    return (
        <div className={css.container}>
            <h3 style={{position: 'absolute', left: '0'}}>Task 8</h3>
            <h4 className={css.counter}>counter: {counter}</h4>
            <div className={css['message-wrapper']}>
                {counterCtx.over100Message && <p className={`${css.child} ${css.error}`}>Didinti nebegalima</p>}
            </div>
            
            <CompA />
            <CompB />
        </div>
    );
}

export default Task8;

/* Task 8
task-8 aplanke rasite kelis komponetus. Task8 komponente, turi būti atvaizduojami
šie kompoentai: CompA (viduje turi <h2>CompA</h2> ir CompA1 (su tekstu <h3>CompA1</h3>)) 
ir CompB (viduje turi <h2>CompB</h2>).

Task8 komponentų medis
- CompA
-- CompA1
- CompB

Task8 viduje bus sukurtas Counter state'as, kuri bus galima valdyti iš CompA1 ir CompB
State'as bus valdomas su mygtkais, kurie leis state'ą padidinti 10 taškų arba pamažinti 10.
State'ui pasiekus 100, bus draudžiama didinti state'ą ir pasirodys pranešimas "Didinti nebegalima"

Pastaba: naudokite useState, useContext (Context API).

*/
