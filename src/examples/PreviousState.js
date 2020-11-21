import React, { useEffect, useRef, useState } from "react";
import Layout from "../components/Layout";

const PreviousState = () => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    ref.current = count;
  }, [count]);

  const previousCount = ref.current;
  return (
    <Layout>
      <h1>PreviousState</h1>
      <p>Current count: {count}</p>
      <p>
        <button
          className="btn btn-dark mr-2"
          onClick={() => setCount((c) => c + 1)}
        >
          Increase
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            alert(`Previous : ${previousCount}`);
          }}
        >
          Show previous
        </button>
      </p>
      {ref.current > 0 && <p>Previous count: {ref.current}</p>}
    </Layout>
  );
};

export default PreviousState;
