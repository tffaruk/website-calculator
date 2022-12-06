import { pages } from "@lib/pages";
import React, { useEffect, useState } from "react";

const PageCount = ({ dispatch, state }) => {
  const [active, setActive] = useState([]);
  const [customPrize, setCustomPrize] = useState([]);

  // data disptach on change category
  useEffect(() => {
    const dev_prize = customPrize.reduce(
      (prev, curr) => prev + curr.dev_prize,
      0
    );
    const customize_prize = customPrize.reduce(
      (prev, curr) => prev + curr.customize_prize,
      0
    );

    dispatch({
      type: "PAGE",
      custom: true,
      prize: state.category.category
        ? state.category.category === "development"
          ? dev_prize
          : customize_prize
        : null,
    });
  }, [state.category.category]);

  // dispatch pages value
  const handleDispatch = (isActive, index, prize, element) => {
    // set prizes on custom
    if (customPrize.map((el) => el.id).includes(index)) {
      setCustomPrize(customPrize.filter((el) => el.id !== index));
    } else {
      setCustomPrize([...customPrize, element]);
    }

    // active button
    setActive(
      isActive
        ? active.filter((current) => current !== index)
        : [...active, index]
    );
    console.log(isActive ? null : prize);
    dispatch({
      prize: isActive ? null : prize,
      type: "PAGE",
    });
  };
  return (
    <div className="mt-4">
      <h2 className="h4 mb-2"> pages</h2>
      {pages.map((el, i) => {
        const isActive = active.includes(i);

        const prize = state.category.category
          ? state.category.category === "customization"
            ? el.customize_prize
            : el.dev_prize
          : null;
        return (
          <button
            key={`pages-${i}`}
            className={` btn  ${isActive && "btn-primary"}`}
            onClick={() => handleDispatch(isActive, i, prize, el)}
          >
            {el.page}
          </button>
        );
      })}
    </div>
  );
};

export default PageCount;
