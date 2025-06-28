import React, { useState } from "react";

const App = () => {
  const [currentTab, setCurrentTab] = useState("Tab1");
  return (
    <div className="container text-center mt-4">
      <h2>Coding</h2>
      <button
        onClick={() => setCurrentTab("Tab1")}
        style={{
          background: currentTab === "Tab1" ? "green" : "white",
          color: currentTab === "Tab1" ? "white" : "",
        }}
      >
        Tab1
      </button>
      <button
        onClick={() => setCurrentTab("Tab2")}
        style={{
          background: currentTab === "Tab2" ? "green" : "white",
          color: currentTab === "Tab2" ? "white" : "",
        }}
      >
        Tab2
      </button>
      <button
        onClick={() => setCurrentTab("Tab3")}
        style={{
          background: currentTab === "Tab3" ? "green" : "white",
          color: currentTab === "Tab3" ? "white" : "",
        }}
      >
        Tab3
      </button>
      <div className="mt-4">
        <div>
          {currentTab === "Tab1" && (
            <p>
              Tab1: - TabContent , and TabPane components along with any style
              of Nav allow you to quickly piece together your own Tabs component
              with additional markup needed
            </p>
          )}
        </div>
        <div>
          {currentTab === "Tab2" && (
            <p>
              Tab2: - This article takes a deep dive into constructing a React
              tab component that excels in performance and user experience
            </p>
          )}
        </div>
        <div>
          {currentTab === "Tab3" && (
            <p>
              Tab3: - TabContent , and TabPane components along with any style
              of Nav allow you to quickly piece together your own Tabs component
              with additional markup needed
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
