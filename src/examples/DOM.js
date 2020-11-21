import React, {useRef} from "react";
import Layout from "../components/Layout";

const DOM = () => {
  const inputRef = useRef(null)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputRef.current) {
      console.log('inputRef.current', inputRef.current.value);
      // const email = inputRef.current.target.value
      // alert(email)
    }
  }
  return (
    <Layout>
      <h2>Email subscribe example</h2>
      <br/>
      <form className="input-group mb-3" onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="email"
          required
          className="form-control"
          placeholder="Your email"
        />
        <button
          className="btn btn-outline-secondary"
          type="submit"
        >
          Button
        </button>
      </form>
    </Layout>
  );
};

export default DOM;
