import data from "config/data.json";
import React, { useEffect, useState } from "react";
import SectaionLayout from "./SectaionLayout";

const Content = ({ dispatch, state }) => {
  const [active, setActive] = useState([]);
  const [customPrize, setCustomPrize] = useState([]);
  const { content } = data;
  useEffect(() => {
    dispatch({
      type: "CONTENT",
      prize: customPrize.reduce((prev, curr) => prev + curr.prize, 0),
      custom: true,
    });
  }, [state.category]);

  const handleDispatch = (isActive, index, prize, element) => {
    // set prizes on custom
    if (customPrize.map((el) => el.name).includes(element.name)) {
      setCustomPrize(
        customPrize.filter((el) => el.name !== element.name)
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
    <SectaionLayout item="content" state={state} style="pt-16 px-12 pb-4">
      <h2 className=" mb-8"> Content management</h2>
      {content.map((el, i) => {
        const isActive = active.includes(i);

        return (
          <div className="mb-2 flex items-center" key={`content-${i}`}>
            <input
              id={el.name}
              type="checkbox"
              className=" h-6 w-6 rounded border-gray-300 text-primary ring-0 focus:ring-0 focus:ring-inherit"
              checked={isActive}
              onChange={() => handleDispatch(isActive, i, el.prize, el)}
            />
            <label htmlFor={el.name} className="h5 ml-2 capitalize">
              {" "}
              {el.name}
            </label>
          </div>
        );
      })}
    </SectaionLayout>
  );
};

export default Content;
