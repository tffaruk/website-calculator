import { pages } from "@lib/pages";
import React, { useEffect, useState } from "react";

const PageCount = ({ dispatch, state }) => {
  const [active, setActive] = useState([]);
  const [customPrize, setCustomPrize] = useState([]);
  // sum total
  // const totalValue = (params) => {
  //   const totalValue = customPrize.reduce(
  //     (prev, curr) => prev + curr[params],
  //     0
  //   );
  //   return totalValue;
  // };
  // dispatch for changing category
  // useEffect(() => {
  //   const dev_prize = totalValue("dev_prize");
  //   const customize_prize = totalValue("customize_prize");
  //   console.log(customize_prize);
  //   dispatch({
  //     type: "PAGE",
  //     changeCategory: true,
  //     changeType: false,
  //     prize: state.category.category
  //       ? state.category.category === "development"
  //         ? dev_prize
  //         : customize_prize
  //       : null,
  //   });
  // }, [state.category.category]);

  // disptach for changing project type
  // useEffect(() => {
  //   const devValue = customPrize.map((el) => el.dev_prize);
  //   const designValue = customPrize.map((el) => el.design_prize);
  //   const total = [...devValue, ...designValue].reduce(
  //     (prev, curr) => prev + curr,
  //     0
  //   );
  //   dispatch({
  //     type: "PAGE",
  //     prize:
  //       state.design && state.development
  //         ? total
  //         : !state.development && state.design
  //         ? totalValue("design_prize")
  //         : totalValue("dev_prize"),
  //     changeType: true,
  //     changeCategory: false,
  //   });
  // }, [state.design, state.development]);

  // dispatch pages value
  const handleDispatch = (isActive, index, prize, element) => {
    // set prizes on custom
    if (customPrize.map((el) => el.page).includes(element.page)) {
      setCustomPrize(customPrize.filter((el) => el.page !== element.page));
    } else {
      setCustomPrize([...customPrize, element]);
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
        const prize = state.isCustomization
          ? el.customize_prize
          : state.isDevelopment
          ? state.development.design && state.development.development
            ? el.dev_prize + el.design_prize
            : !state.development && state.design
            ? el.design_prize
            : el.dev_prize
          : el.dev_prize;

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
