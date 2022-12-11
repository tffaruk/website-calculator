import { adon } from "@lib/utils/ad-on";
import React, { useEffect, useState } from "react";
import SectaionLayout from "./SectaionLayout";

const Adon = ({ state, dispatch }) => {
  const [active, setActive] = useState([]);
  const [customPrize, setCustomPrize] = useState([]);

  useEffect(() => {
    dispatch({
      type: "AD-ON",
      prize: customPrize.reduce((prev, curr) => prev + curr.prize, 0),
      custom: true,
    });
  }, [state.category]);

  const handleDispatch = (isActive, index, prize, element) => {
    // set prizes on custom
    if (customPrize.map((el) => el.adon).includes(element.adon)) {
      setCustomPrize(customPrize.filter((el) => el.adon !== element.adon));
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
      type: "AD-ON",
      prize: prize,
      isActive: isActive,
    });
  };
  return (
    <SectaionLayout item="adon" state={state} style="pt-16 px-12 pb-4">
      <h2 className=" mb-8"> Website Ad-on</h2>
      {adon.map((el, i) => {
        const isActive = active.includes(i);
        // prize calculation for per page
        return (
          <div className="mb-2 flex items-center" key={`content-${i}`}>
            <input
              id={el.adon}
              type="checkbox"
              className=" h-6 w-6 rounded border-gray-300 text-indigo-600 ring-0 focus:ring-0 focus:ring-inherit"
              checked={isActive}
              onChange={() => handleDispatch(isActive, i, el.prize, el)}
            />
            <label htmlFor={el.adon} className="h5 ml-2 capitalize">
              {" "}
              {el.adon}
            </label>
          </div>
        );
      })}

      {/* <h2 className="h4 my-4 text-primary">
        Total: $
        {state.isDevelopment && state.development.adon.prize
          ? state.development.adon.prize
          : state.isCustomization && state.customization.adon.prize
          ? state.customization.adon.prize
          : 0}
      </h2> */}
    </SectaionLayout>
  );
};

export default Adon;
