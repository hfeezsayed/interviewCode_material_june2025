import React from "react";

const Hooks = () => {
  return (
    <div className="container">
      <div className="mb-2">
        <h6>What is hooks?</h6>
        <p>
          The hooks are the functions to use some react features in functional
          component.
        </p>
      </div>
      <div className="mb-2">
        <h6>What is State?</h6>
        <p>State is nothing but just a variable for the component.</p>
      </div>
      <div className="mb-2">
        <h6>What is useState Hook?</h6>
        <p>
          It is a function to add state in your function component. It holds the
          state.
        </p>
      </div>
      <div className="mb-2">
        <h6>What is useEffect Hook?</h6>
        <p>
          UseEffect is used to perform side effects in your components. It takes
          two arguments. It is the combination of three life cycle methods
          <br />
          <i>1. ComponentDidMount</i>
          <i>2. ComponentDidUpdate</i>
          <i>3. ComponentWillUnmount</i>
        </p>
        <p>When the useEffect use? Look below: </p>
        <ol>
          <li>Fatching API</li>
          <li>Updating DOM document and window</li>
          <li>Timer function</li>
        </ol>
        <p>
          <strong>Syntax:</strong>-- useEffect(callback, dependencies)
          dependencies means array of variable and its optional.
        </p>
        <p>There are three variations of useEffect. Look below: </p>
        <ol>
          <li>useEffect without dependencies. It will run continously.</li>
          <li>useEffect with empty array. (It will run only the first time)</li>
          <li>useEffect with variable</li>
        </ol>
      </div>
      <div className="mb-2">
        <h6>What is useContext Hook?</h6>
        <p>
          useContext Hook is used to manage global data in react application.
        </p>
        <h6>How to create context?</h6>
        <ol>
          <li>Create the context</li>
          <li>Provide the context</li>
          <li>Consuming the context</li>
        </ol>
      </div>
      <div className="mb-2">
        <h6>What is useRef Hook?</h6>
        <p>
          It allow us to access a DOM element directly and It is also used for
          creating the mutable variables which will not be re-render the
          components.
        </p>
      </div>
      <div className="mb-2">
        <h6>What is useReducer Hook?</h6>
        <p>
          It is used to manage state in our react application. useReducer is
          based on the concept of reducers, it is similar to how state updates
          work in Redux. Use Reducer used when we have lot of state and methods
          to handle. It takes two arguments (reducer, intialState).
        </p>
      </div>
      <div className="mb-2">
        <h6>What is useLayoutEffect Hook?</h6>
        <p>
          useLayoutEffect hook works exactly the same as useEffect with same
          syntax. so the difference between useEffect and useLayoutEffect is
          that useEffect hooks run after the DOM is printed on the browser. But
          useLayoutEffect hooks run before the DOM is printed on the browser.
        </p>
      </div>
      <div className="mb-2">
        <h6>What is useMemo Hook?</h6>
        <p>
          useMemo hooks is used to apply Memoization in react. Memoization means
          it is a technique for improving the performance of code. and it will
          prevent the re-rendering. It will not every time render and it will
          take value from catche to improve the performance. useCallback and
          useMemo both are used for better performance and store the value and
          function in catche.
        </p>
      </div>
      <div className="mb-2">
        <h6>What is useCallback Hook?</h6>
        <p>
          useCallback is used to return a memoized function. It is also used for
          preventing functions from re-created on re-rendering.
        </p>
      </div>
      <div className="mb-2">
        <h6>What is Custom Hook?</h6>
        <p>
          Custom hook is basically a reusable function. Simply we can say that
          custom hooks are your own hooks that you careate for your own use and
          you can use them multiple times in your project.
        </p>
      </div>
      <div className="mb-2">
        <h6>What is recursive function?</h6>
        <p>
          Recursion is a technique used to solve computer problems by creating a
          function that calls itself until your program achieves the desired
          result.
        </p>
      </div>
      <div className="mb-2">
        <h6>Why is console log showing two times?</h6>
        <p>
          React prints your console.log() statements twice when your App
          component is wrapped in a StrictMode component in your index.js file.
          One way to resolve the issue is to remove the StrictMode wrapper.
        </p>
      </div>
    </div>
  );
};

export default Hooks;
