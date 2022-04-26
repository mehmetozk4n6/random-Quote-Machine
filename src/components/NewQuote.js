import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getColor, getRandom, changeColor } from "../redux/quoteSlice";

function NewQuote(props) {
  const dispatch = useDispatch();
  const currentColor = useSelector(changeColor);

  const handleClick = () => {
    dispatch(getRandom());
    dispatch(getColor());
  };
  return (
    <div className="d-flex justify-content-center mt-4">
      <button
        className={`btn btn-outline-${currentColor}`}
        id="new-quote"
        onClick={handleClick}
      >
        New Quote
      </button>
    </div>
  );
}

export default NewQuote;
