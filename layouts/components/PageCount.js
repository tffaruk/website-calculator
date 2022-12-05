import React, { useState } from "react";

const PageCount = ({ dispatch }) => {
  const [color, setColor] = useState(1);
  const handleDispatch = (id) => {
    setColor(id);
    dispatch({
      id,
      type: "PAGE",
    });
  };
  return (
    <div className="mt-4">
      <h2 className="h4 mb-2">Number of page</h2>
      <button
        className={` btn ${color === 1 && "btn-primary"}`}
        onClick={() => handleDispatch(1)}
      >
        page-1{" "}
      </button>
      <button
        className={` btn ${color === 2 && "btn-primary"}`}
        onClick={() => handleDispatch(2)}
      >
        page-2{" "}
      </button>
      <button
        className={` btn ${color === 3 && "btn-primary"}`}
        onClick={() => handleDispatch(3)}
      >
        page-3{" "}
      </button>
      <button
        className={` btn ${color === 4 && "btn-primary"}`}
        onClick={() => handleDispatch(4)}
      >
        page-4{" "}
      </button>
      <button
        className={` btn ${color === 5 && "btn-primary"}`}
        onClick={() => handleDispatch(5)}
      >
        page-5{" "}
      </button>
      <button
        className={` btn ${color === 6 && "btn-primary"}`}
        onClick={() => handleDispatch(6)}
      >
        page-6{" "}
      </button>
    </div>
  );
};

export default PageCount;
