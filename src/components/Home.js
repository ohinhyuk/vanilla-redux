import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators, add } from "../store";
import ToDo from "./ToDo";

function Home({ toDos, addToDo }) {
  console.log(toDos, addToDo);
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    setText("");
    addToDo(text);
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      {toDos.map((toDo) => (
        <ToDo {...toDo} />
      ))}
    </>
  );
}

function mapStateToProps(state, ownProps) {
  return { toDos: state };
}

function mapDispatchToProps(dispatch, ownProps) {
  console.log("whatthe..", ownProps.id);
  return {
    addToDo: (text) => dispatch(add(text)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
