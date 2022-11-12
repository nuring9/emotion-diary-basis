import React, { useState, useEffect } from "react";

const Lifecycle = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("Mount!");
  }, []); // 처음 mount인 상태일때

  useEffect(() => {
    console.log("Update!");
  }); // 페이지가 리렌더링 될때 (항상 업데이트 될때)

  useEffect(() => {
    console.log(`count is update:  ${count}`);
    if (count > 5) {
      alert("count가 5를 넘었습니다 따라서 1로 초기화 합니다");
      setCount(1);
    }
  }, [count]); // count가 update 될때

  useEffect(() => {
    console.log(`text is update:  ${text}`);
  }, [text]); // text가 update 될때

  return (
    <div style={{ padding: 10 }}>
      <div>
        {count}
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div>
    </div>
  );
};

export default Lifecycle;
