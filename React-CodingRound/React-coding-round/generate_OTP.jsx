import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  //in React way
  const [otp, setOtp] = useState(0);

  useEffect(() => {
    const x = setInterval(() => {
      setOtp(Math.floor(1000 + Math.random() * 9000));
    }, 1000);
    return () => clearInterval(x);
  }, []);

  //in vanilla JS
  // const generateOTP = () => {
  //   return Math.floor(1000 + Math.random() * 9000);
  // };
  // console.log("result", generateOTP());

  return (
    <div className="text-center progress-bar">
      <h2>OTP {otp}</h2>
    </div>
  );
}

export default App;
