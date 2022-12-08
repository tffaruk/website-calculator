import { pages } from "@lib/pages";
import React, { useEffect, useState } from "react";

const PageCount = ({ dispatch, state }) => {
  const [active, setActive] = useState([]);
  const [customPrize, setCustomPrize] = useState([]);
  // sum total
  const totalValue = (params) => {
    const totalValue = customPrize.reduce(
      (prev, curr) => prev + curr[params],
      0
    );
    return totalValue;
  };
  const customize_prize = totalValue("customize_prize");
  const dev_prize = totalValue("dev_prize");

  useEffect(() => {
    dispatch({
      type: "DEV_PAGE",
      custom: true,
      prize: state.category ? dev_prize : null,
    });
  }, [state.dev, dev_prize]);

  useEffect(() => {
    dispatch({
      type: "CUSTOMIZE_PAGE",
      custom: true,
      prize: state.category ? customize_prize : null,
    });
  }, [state.custom, customize_prize]);

  let total = customPrize.reduce(
    (acc, curr) => (acc += curr.dev_prize + curr.design_prize),
    0
  );
  // disptach for changing project type
  useEffect(() => {
    dispatch({
      type: "DEV_PAGE",
      prize:
        state.development.design && state.development.development
          ? total
          : !state.development.development && state.development.design
          ? totalValue("design_prize")
          : totalValue("dev_prize"),
      changeType: true,
    });
  }, [state.development.design, state.development.development, total]);

  // dispatch pages value
  const handleDispatch = (isActive, index, prize, element) => {
    // set prizes on custom
    if (customPrize.map((el) => el.page).includes(element.page)) {
      setCustomPrize(customPrize.filter((el) => el.page !== element.page));
    } else {
      setCustomPrize(
        !state.development.design && state.development
          ? [...customPrize, element]
          : state.development.design
          ? [...customPrize, element]
          : []
      );
    }
    console.log(prize);
    // active button
    setActive(
      isActive
        ? active.filter((current) => current !== index)
        : [...active, index]
    );

    //  action dispatch
    dispatch({
      type: state.isDevelopment ? "DEV_PAGE" : "CUSTOMIZE_PAGE",
      prize: prize,
      isActive: isActive,
    });
  };

  return (
    <div className="mt-4">
      <h2 className="h4 mb-2"> pages</h2>
      {pages.map((el, i) => {
        const isActive = active.includes(i);

        // prize calculation for per page
        const prize = state.category
          ? state.isCustomization
            ? el.customize_prize
            : state.isDevelopment
            ? state.development.design && state.development.development
              ? el.dev_prize + el.design_prize
              : !state.development && state.design
              ? el.design_prize
              : el.dev_prize
            : el.dev_prize
          : null;
        // state.category.category
        //   ? state.category.category === "customization"
        //     ? el.customize_prize
        //     : state.design && state.development
        //     ? el.dev_prize + el.design_prize
        //     : !state.development && state.design
        //     ? el.design_prize
        //     : el.dev_prize
        //   : null;

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
