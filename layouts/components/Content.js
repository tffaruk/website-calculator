import { content } from "@lib/content";
import React, { useEffect, useState } from "react";

const Content = ({ dispatch, state }) => {
  const [active, setActive] = useState([]);
  const [customPrize, setCustomPrize] = useState([]);

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
    <div className="shadow-[0px 0px 19px 0px #0000001a] mb-16 rounded bg-[#ffffff0f] p-20 text-center">
      <h2 className=" mb-8"> Content management</h2>
      {content.map((el, i) => {
        const isActive = active.includes(i);
        // prize calculation for per page
        return (
          <div className="mb-2 flex items-center" key={`content-${i}`}>
            <input
              id={el.content}
              type="checkbox"
              className=" h-6 w-6 rounded border-gray-300 text-indigo-600 ring-0 focus:ring-0 focus:ring-inherit"
              checked={isActive}
              onChange={() => handleDispatch(isActive, i, el.prize, el)}
            />
            <label htmlFor={el.content} className="h5 ml-2">
              {" "}
              {el.content}
            </label>
          </div>
        );
      })}
      {state.isCustomization && state.customization.content.prize ? (
        <h2 className="h4 my-4 text-primary">
          Total:${state.customization.content.prize}
        </h2>
      ) : state.isDevelopment && state.development.content.prize ? (
        <h2 className="h4 my-4 text-primary">
          Total: ${state.development.content.prize}
        </h2>
      ) : null}
    </div>
  );
};

export default Content;
