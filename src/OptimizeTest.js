import React, { useState, useEffect } from "react";

const CounterA = React.memo(({ count }) => {
  useEffect(() => {
    console.log(`CounterA Update - count: ${count}`);
  });
  return <div>{count}</div>;
});

const CounterB = ({ obj }) => {
  useEffect(() => {
    console.log(`ConterB Update - count: ${obj.count}`);
  });
  return <div>{obj.count}</div>;
};

const areEqual = (prevprops, nextprops) => {
  if (prevprops.obj.count === nextprops.obj.count) {
    return true;
  }
  return false;
};

/*
const areEqual = (prevprops, nextprops) => {
 return prevprops.obj.count === nextprops.obj.count;
};
위의 const areEqual을 이렇게 축약하여 사용할 수도 있다. 
*/

const MemoizedCounterB = React.memo(CounterB, areEqual);

const OptimizeTest = () => {
  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({
    count: 1,
  });

  return (
    <div style={{ padding: 50 }}>
      <div>
        <h2>Counter A</h2>
        <CounterA count={count} />
        <button onClick={() => setCount(count)}>A button</button>
      </div>
      <div>
        <h2>Counter B</h2>
        <MemoizedCounterB obj={obj} />
        <button onClick={() => setObj({ count: obj.count })}>B button</button>
      </div>
    </div>
  );
};

export default OptimizeTest;
