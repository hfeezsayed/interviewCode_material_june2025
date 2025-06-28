import {
  useState,
} from "react";
import "./App.css";

function App() {
  const [modal, setModal] = useState(false);
  return (
    <>
      <div className={modal ? "onDiv" : ""}>
        <div>
          <button
            onClick={() => setModal(true)}
            style={{ display: modal ? "none" : "" }}
          >
            Modal
          </button>
          <p>
            Filler text is text that shares some characteristics of a real
            written text, but is random or otherwise generated. It may be used
            to display a sample of fonts, generate text for testing, or to spoof
            an e-mail spam filter.
          </p>
        </div>
        <div>
          {modal && (
            <div className="modal">
              <button onClick={() => setModal(false)}>close</button>
              <div className="modal-header">
                <h2>Modal </h2>
              </div>
              <div className="modal-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
