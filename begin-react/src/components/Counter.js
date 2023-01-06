import React,{ useState } from 'react';

const Counter = () => {
    const [number, setNumber] = useState(0);
    const onIncrease = () => {
        console.log('+1');
        setNumber(number+1);
        console.log(number);
    }
    const onDecrease = () => {
        console.log('-1');
        setNumber(number-1);
        console.log(number);
    }
    return (
        <div>
            <h2>{number}</h2>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
};

export default Counter;