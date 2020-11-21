import React, { useRef, useState } from "react";
import Layout from "../components/Layout";

const UseStateVsUseRef = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  return (
    <Layout>
      <p>
        <code>useState</code> trigger rerendering, but <code>useRef</code> is
        not.
      </p>
      <h2>
        <code>useState</code>
      </h2>
      <div className="d-flex gap-4 align-items-center">
        <div className="fs-4">count: {count}</div>
        <button className="btn btn-dark" onClick={() => setCount((c) => c + 1)}>
          Increase
        </button>
      </div>
      <br />
      <br />
      <h2>
        <code>useRef</code>
      </h2>
      <div className="d-flex gap-4 align-items-center">
        <div className="fs-4">count: {countRef.current}</div>
        <button
          className="btn btn-dark"
          onClick={() => {
            countRef.current = countRef.current + 1;
          }}
        >
          Increase
        </button>
        <button
          className="btn btn-info"
          onClick={() => alert(countRef.current)}
        >
          Show countRef
        </button>
      </div>
    </Layout>
  );
};

export default UseStateVsUseRef;
