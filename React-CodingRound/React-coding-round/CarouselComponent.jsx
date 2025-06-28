import { useState } from "react";
import "./App.css";
import banner1 from "./assets/banner_kids.png";
import banner2 from "./assets/banner_mens.png";
import banner3 from "./assets/banner_women.png";

const Carousel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const prevHandle = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };
  const nextHandle = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  useEffect(() => {
    const interval = setTimeout(() => {
      nextHandle();
    }, 2000);
    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <div className="main">
      <img src={images[currentImage]} alt="banner" style={{ width: "100%" }} />
      <div className="control">
        <span
          className={currentImage === 0 ? "control-active" : "control-inactive"}
        ></span>
        <span
          className={currentImage === 1 ? "control-active" : "control-inactive"}
        ></span>
        <span
          className={currentImage === 2 ? "control-active" : "control-inactive"}
        ></span>
      </div>
      <div style={{ textAlign: "center" }}>
        <button onClick={prevHandle}>prev</button>
        <button onClick={nextHandle}>next</button>
      </div>
    </div>
  );
};

function App() {
  const images = [banner1, banner2, banner3];
  return (
    <div className="main">
      <Carousel images={images} />
    </div>
  );
}

export default App;

// .main {
//   position: relative;
// }

// .control {
//   width: 100px;
//   height: 15px;
//   padding: 3px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: absolute;
//   left: 45%;
//   bottom: 13%;
// }

// .control-active {
//   display: inline-block;
//   width: 5px;
//   height: 5px;
//   padding: 5px;
//   margin: 4px;
//   border-radius: 50%;
//   background-color: green;
//   text-align: center;
// }

// .control-inactive {
//   display: inline-block;
//   width: 5px;
//   height: 5px;
//   padding: 5px;
//   margin: 4px;
//   border-radius: 50%;
//   background-color: #00000047;
// }
