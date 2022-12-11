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

  //dispatch for  development
  useEffect(() => {
    dispatch({
      type: "DEV_PAGE",
      custom: true,
      prize: state.category ? dev_prize : null,
    });
  }, [state.dev, dev_prize]);

  // dispatch for theme customization
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
    <div className="shadow-[0px 0px 19px 0px #0000001a] mb-16 rounded bg-[#ffffff0f] p-20 text-center">
      <h2 className=" mb-8"> Select Pages</h2>
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

        return (
          <div className="mb-2 flex items-center" key={`pages-${i}`}>
            <input
              id={el.page}
              type="checkbox"
              className=" h-6 w-6 rounded border-gray-300 text-indigo-600 ring-0 focus:ring-0 focus:ring-inherit"
              checked={isActive}
              onChange={() => handleDispatch(isActive, i, prize, el)}
            />
            <label htmlFor={el.page} className="h5 ml-2">
              {" "}
              {el.page}
            </label>
          </div>
        );
      })}
      <h2 className="h4 my-4 text-primary">
        Total: $
        {state.isDevelopment && state.development.page.prize
          ? state.development.page.prize
          : state.isCustomization && state.customization.page.prize
          ? state.customization.page.prize
          : 0}
      </h2>
    </div>
  );
};

export default PageCount;
