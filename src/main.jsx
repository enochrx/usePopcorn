import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";
import StarRating from "./StarRating";

const CustomRating = () => {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating color="green" onSetRating={setMovieRating} maxRating={10} />
      <p>This movie is rated {movieRating} stars on Moviebox and iMDb</p>
    </div>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      message={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating maxRating={6} color="red" size={24} defaultRating={3} />
    <CustomRating />
  </StrictMode>
);
