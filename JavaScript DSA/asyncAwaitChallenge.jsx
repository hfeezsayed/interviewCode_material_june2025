import React from "react";

function App() {
  //Await can we used with any Non Promise value so this non promise value like 1
  // it will warp in promise.resolve() and after resolve we will get 1.
  // Whatever code use after await, that code will add in a microtask queue and will run the next
  // cycle of event loop thats the reason we will get 2 and then 1

  (async function () {
    const data = await 1;
    console.log(data); //bcoz it will store
  })();
  console.log(2);

  return (
    <div className="container m-4 text-center">
      <h1>JavaScript Coding</h1>
    </div>
  );
}

export default App;
