import React, { useState } from "react";

const StarRating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);

  return (
    <div>
      {[...Array(totalStars)].map((star, index) => {
        const starValue = index + 1;
        return (
          <span
            key={index}
            onClick={() => setRating(starValue)}
            style={{
              cursor: "pointer",
              color: starValue <= rating ? "gold" : "gray",
            }}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Star Rating</h1>
      <StarRating />
    </div>
  );
};

export default App;
