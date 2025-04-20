import React, {useState, useEffect} from "react";
const LimtedTime = () => {
    const [count, setCount] = useState(1000);
    useEffect(() => {
        const timer = setInterval(() => {
            setCount((prevCount) => prevCount - 1);
        },1000);
        return () => clearInterval(timer);
    }, []);

return <>
<h1> You Have A Limited Time To Get 80% Of Any Purchage Hurry Up!</h1>
     <p>Countdown Start Now: {count}</p></>;
};

export default LimtedTime;