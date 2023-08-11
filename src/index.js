const { createStore, combineReducers } = require("redux");

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const ADD = "ADD";
const MINUS = "MINUS";
const CONCAT = "CONCAT";

number.innerText = 0;

const toDoReducer = (state = [], action) => {
  switch (action.type) {
    case CONCAT:
      return state.concat(action.text);
    default:
      return state;
  }
};

const countReducer = (state = 0, action) => {
  switch (action.type) {
    case ADD:
      return state + 1;
    case MINUS:
      return state - 1;
    default:
      return state;
  }
};
const reducer = combineReducers({
  countReducer,
  toDoReducer,
});

const countStore = createStore(reducer, {
  countReducer: 0,
  toDoReducer: ["HELLO"],
});

console.log(countStore.getState());

const onChange = () => {
  number.innerText = countStore.getState().countReducer;
  console.log(countStore.getState());
};

countStore.subscribe(onChange);

add.addEventListener("click", () =>
  countStore.dispatch({ type: CONCAT, text: "HELLO" })
);
minus.addEventListener("click", () => countStore.dispatch({ type: MINUS }));
