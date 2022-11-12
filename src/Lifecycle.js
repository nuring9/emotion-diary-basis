import React, { useState, useEffect } from "react";

const UnmountTest = () => {
  useEffect(() => {
    console.log("Mount!");
    return () => {
      //return을 사용하여 Unmount 시점에서 실행되게 됨.
      console.log("Unmount!");
    };
  }, []);

  return <div>Unmount Testing component</div>;
};

const Lifecycle = () => {
  const [isVisible, setIsvisible] = useState(false);
  const toggle = () => setIsvisible(!isVisible);

  return (
    <div stayle={{ padding: 20 }}>
      <button onClick={toggle}>ON/OFF</button>
      {isVisible && <UnmountTest />}
    </div>
  );
};

export default Lifecycle;
