import React, { useState } from "react";

const App = () => {
  const countries = [
    { name: "India", value: "IN", cities: ["Delhi", "India"] },
    { name: "Pakistan", value: "PK", cities: ["Lahore", "Karachi"] },
    { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chittodh"] },
  ];
  const [country, setCountry] = useState({ name: "", value: "", cities: [] });
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-4">
            <select
              value={country}
              onChange={(e) => {
                setCountry(e.target.value);
              }}
            >
              {countries.map((item, index) => {
                return (
                  <option value={index} key={index}>
                    {item.name}
                  </option>
                );
              })}
            </select>

            <select value={country}>
              {countries[country]?.cities.map((item, index) => {
                return <option value={index}>{item}</option>;
              })}
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
