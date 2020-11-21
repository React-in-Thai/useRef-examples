import React, {useEffect, useRef, useState} from "react";
import Layout from "../components/Layout";

function useInterval(callback, delay) {
  const callbackRef = useRef(callback)
  useEffect(() => {
    callbackRef.current = callback
  }, [callback])
  useEffect(() => {
    const id = setInterval(() => callbackRef.current(), delay);

    return () => clearInterval(id);
  }, [delay]);
}

const randomNumber = () => Math.floor(Math.random() * 1000);

const SetInterval = () => {
  const [delay, setDelay] = useState(1000);
  const [count, setCount] = useState(0);
  useInterval(() => {
    console.log(count)
    setCount(count + 2)
  }, 1000);
  return (
    <Layout>
      <h1>Interval</h1>
      <div className="border-1 border-info border rounded p-4 mb-4">
        <p>
          The number will be increased by 1 every{" "}
          <input
            style={{ width: 80 }}
            value={delay}
            type="number"
            onChange={(e) => setDelay(Number(e.target.value))}
          />
          ms.
        </p>
        <div className="fs-4">{count}</div>
        <div className="mt-4">
          <button
            className="btn btn-dark"
            onClick={() => setCount(randomNumber())}
          >
            Random count
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default SetInterval;
