import React, { useRef } from "react";

function Form(props) {
  const searchItem = useRef("");

  const submitFn = (e) => {
    e.preventDefault();
    props.submitFn(searchItem);
  };

  return (
    <form onSubmit={submitFn}>
        Enter Search:
        <input type="text" ref={searchItem} placeholder="text here"/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
