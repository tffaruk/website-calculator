import React, { useState } from "react";

const TemplateCount = ({ dispatch }) => {
  const [color, setColor] = useState(1);
  const handleDispatch = (id, increase, type) => {
    setColor(id);
    dispatch({
      id,
      increase,
      type,
    });
  };

  return (
    <div className="template mt-3 ">
      <h2 className="h4 mb-2">Template type</h2>
      <button
        className={` btn ${color === 1 && "btn-primary"}`}
        onClick={() => handleDispatch(1, 1, "INITIAL")}
      >
        initial stage{" "}
      </button>
      <button
        className={` btn ${color === 2 && "btn-primary"}`}
        onClick={() => handleDispatch(2, 2.5, "STAGE-1")}
      >
        stage-1{" "}
      </button>
      <button
        className={` btn ${color === 3 && "btn-primary"}`}
        onClick={() => handleDispatch(3, 3.5, "STAGE-2")}
      >
        stage-2{" "}
      </button>
      <button
        className={` btn ${color === 4 && "btn-primary"}`}
        onClick={() => handleDispatch(4, 4.5, "STAGE-3")}
      >
        stage-3{" "}
      </button>
      <button
        className={` btn ${color === 5 && "btn-primary"}`}
        onClick={() => handleDispatch(5, 6.5, "STAGE-4")}
      >
        stage-4{" "}
      </button>
      <button
        className={` btn ${color === 6 && "btn-primary"}`}
        onClick={() => handleDispatch(6, 9, "STAGE-5")}
      >
        final stage{" "}
      </button>
    </div>
  );
};

export default TemplateCount;
