import React, { useState } from "react";

function Tabs({ tabs }) {
  const [activeTabs, setActiveTabs] = useState(0);
  return (
    <>
      <div>
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={index === activeTabs ? "active" : ""}
            onClick={() => setActiveTabs(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">{tabs[activeTabs].content}</div>
    </>
  );
}

function App() {
  const tabs = [
    {
      label: "Tab1",
      content: <div>Content Tab1</div>,
    },
    {
      label: "Tab2",
      content: <div>Content Tab2</div>,
    },
    {
      label: "Tab3",
      content: <div>Content Tab3</div>,
    },
  ];
  return (
    <div className="container m-4 text-center">
      <h1>Tabs menu</h1>
      <Tabs tabs={tabs} />
    </div>
  );
}

export default App;
