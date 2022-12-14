import data from "config/data.json";
import React, { useEffect, useState } from "react";
import SectaionLayout from "./SectaionLayout";

const PageCount = ({ dispatch, state }) => {
  const [active, setActive] = useState([]);
  const [customPrize, setCustomPrize] = useState([]);
  const { pages } = data;
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
  // useEffect(() => {
  //   if (!state.development.development) {
  //     dispatch({
  //       type: "DESIGN",
  //       prize: totalValue("design_prize"),
  //     });
  //   }
  // }, [state.development.development]);
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

  // dispatch page value
  const handleDispatch = (isActive, index, prize, element) => {
    // set prizes on custom
    if (customPrize.map((el) => el.name).includes(element.name)) {
      setCustomPrize(customPrize.filter((el) => el.name !== element.name));
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
    <SectaionLayout item="page" state={state} style="pt-16 px-12 pb-4">
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
              id={el.name}
              type="checkbox"
              className=" h-6 w-6 rounded border-gray-300 text-primary ring-0 focus:ring-0 focus:ring-inherit"
              checked={isActive}
              onChange={() => handleDispatch(isActive, i, prize, el)}
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

export default PageCount;
