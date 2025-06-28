import React, { useState } from "react";
function App() {
  const [message, setMessage] = useState("");
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems((prev) => {
      return [...prev, message];
    });
    setMessage("");
  };
  return (
    <>
      <div className="container p-5">
        {items.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
        <div>
          <textarea
            rows={3}
            placeholder="type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <br />
          <button onClick={handleSubmit} className="btn btn-success">
            sent
          </button>
        </div>
      </div>
    </>
  );
}
export default App;
