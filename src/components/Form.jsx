import React, { Children, useReducer, useRef, useState } from "react";
import Button from "../Ui/Button";
import Input from "../Ui/Input";

const textReducer = (state, action) => {
  if (action.type === "USER_TEXT") {
    return { value: action.value };
  }
};

const relationReducer = (state, action) => {
  if (action.type === "USER_RELATION") {
    return { value: action.value };
  }
};

const numberReducer = (state, action) => {
  if (action.type === "USER_NUMBER") {
    return { value: action.value };
  }
};

const Form = ({ onCallback }) => {
  const [textState, dispatchText] = useReducer(textReducer, {
    value: "",
  });

  const [relationState, dispatchRelation] = useReducer(relationReducer, {
    value: "",
  });
  const [numberState, dispatchNumber] = useReducer(numberReducer, {
    value: "",
  });

  const textChangeHandler = (e) => {
    dispatchText({ type: "USER_TEXT", value: e.target.value });
  };

  const relationChangeHandler = (e) => {
    dispatchRelation({ type: "USER_RELATION", value: e.target.value });
  };

  const numberChangeHandler = (e) => {
    dispatchNumber({ type: "USER_NUMBER", value: e.target.value });
  };

  const addDataHandler = (e) => {
    e.preventDefault();
    const newData = {
      id: Math.random().toString(),
      text: textState.value,
      tel: numberState.value,
      relation: relationState.value,
    };
    if (
      textState.value === "" ||
      relationState.value === "" ||
      numberState.value === ""
    ) {
      return;
    }

    onCallback(newData);

    textState.value = "";
    relationState.value = "";
    numberState.value = "";
  };

  return (
    <form
      style={{ height: "230px" }}
      className="form-control w-50 d-flex flex-column justify-content-center mx-2 mt-4"
    >
      <h2 className="text-dark">New Contact form</h2>
      <Input
        type="text"
        placeholder="Name"
        className="form-control mb-2"
        value={textState.value}
        onChange={textChangeHandler}
      />
      <Input
        type="text"
        placeholder="Relationship"
        className="form-control mb-2"
        value={relationState.value}
        onChange={relationChangeHandler}
      />
      <Input
        type="number"
        placeholder="Phone"
        className="form-control mb-2"
        value={numberState.value}
        onChange={numberChangeHandler}
      />
      <Button onClick={addDataHandler} className="btn-info">
        Add Contact
      </Button>
    </form>
  );
};

export default Form;
