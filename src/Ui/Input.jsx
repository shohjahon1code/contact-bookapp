import React from "react";

const Input = (props) => {
  return (
    <input
      className={props.className}
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
      ref={props.ref}
    />
  );
};

export default Input;
