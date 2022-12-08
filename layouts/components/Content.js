import { content } from "@lib/content";
import React, { useEffect, useState } from "react";

const Content = ({ dispatch, state }) => {
  const [active, setActive] = useState([]);
  const [customPrize, setCustomPrize] = useState([]);
  console.log(customPrize.reduce((prev, curr) => prev + curr.prize, 0));
  useEffect(() => {
    dispatch({
      type: "CONTENT",
      prize: customPrize.reduce((prev, curr) => prev + curr.prize, 0),
      custom: true,
    });
  }, [state.category]);

  const handleDispatch = (isActive, index, prize, element) => {
    // set prizes on custom
    if (customPrize.map((el) => el.content).includes(element.content)) {
      setCustomPrize(
        customPrize.filter((el) => el.content !== element.content)
      );
    } else {
      setCustomPrize([...customPrize, element]);
    }
    // active button
    setActive(
      isActive
        ? active.filter((current) => current !== index)
        : [...active, index]
    );

    //  action dispatch
    dispatch({
      type: "CONTENT",
      prize: prize,
      isActive: isActive,
    });
  };
  return (
    <div className="mt-4">
      <h2 className="h4 mb-2"> pages</h2>
      {content.map((el, i) => {
        const isActive = active.includes(i);
        // prize calculation for per page
        return (
          <button
            key={`pages-${i}`}
            className={` btn  ${isActive && "btn-primary"}`}
            onClick={() => handleDispatch(isActive, i, el.prize, el)}
          >
            {el.content}
          </button>
        );
      })}
    </div>
  );
};

export default Content;
