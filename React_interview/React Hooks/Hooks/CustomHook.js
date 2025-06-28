import React, { useState, useEffect } from "react";

const CustomHook = (url) => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.log(err));
  }, []);

  return user;
};

export default CustomHook;
