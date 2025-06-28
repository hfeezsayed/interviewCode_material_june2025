import React, { useReducer } from "react";

{
  /* <h6>What is useReducer Hook?</h6>
 <p>
 It is used to manage state in our react application. useReducer is
 based on the concept of reducers, it is similar to how state updates
 work in Redux. Use Reducer used when we have lot of state and methods
 to handle. It takes two arguments (reducer, intialState).
</p>        */
}

const initialState = {
  user: { name: "", age: 0 },
  loading: false,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "USER_UPDATE": {
      return { ...state, user: { ...state.user, ...action.payload } };
    }
    case "LOADING": {
      return { ...state, loading: action.payload };
    }
    case "ERROR": {
      return { ...state, error: action.payload };
    }
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div style={{ margin: "30px", textAlign: "center" }}>
      <h1>UseReducer</h1>
      <p>Name: {state.user.name}</p>
      <p>Age: {state.user.age}</p>
      <button
        onClick={() =>
          dispatch({ type: "USER_UPDATE", payload: { name: "Salim", age: 30 } })
        }
      >
        update user
      </button>
    </div>
  );
}

export default App;
