import { is } from "date-fns/locale";
import React, { useEffect, useState } from "react";
import SectaionLayout from "./SectaionLayout";
const ProjectCategory = ({ dispatch, state }) => {
  const [development, setDevelopment] = useState(false);

  const [isDesign, setIsDesign] = useState(false);
  const [isDev, setIsDev] = useState(true);

  useEffect(() => {
    setIsDev(true);
    dispatch({
      type: "PROJECT_TYPE_DEVELOPMENT",
      isDevelopment: true,
    });
  }, [isDesign]);

  // check design
  const handleDesign = (value) => {
    setIsDesign(value);
    dispatch({
      type: "PROJECT_TYPE_DESIGN",
      isDesign: value,
    });
  };
  // check  development
  const handleDevelopment = (value) => {
    setIsDev(value);
    dispatch({
      type: "PROJECT_TYPE_DEVELOPMENT",
      isDevelopment: value,
    });
  };
  // themecustomization
  const handleCustomization = () => {
    setDevelopment(false);

    dispatch({
      id: 1,
      type: "CUSTOMIZATION",
      prize: 200,

      category: "customization",
    });
  };
  // development
  const handleDev = () => {
    setDevelopment(!development);
    setIsDev(state.development.development);
    setIsDesign(state.development.design);

    dispatch({
      id: 2,
      type: "DEVELOPMENT",
      prize: 400,

      category: "development",
    });
  };
  return (
    <>
      <SectaionLayout state={state} style="p-20">
        <h2 className=" mb-8">Project category</h2>
        <button
          className={` btn  rounded-sm border-primary ${
            state.isCustomization && "btn-primary"
          }`}
          onClick={handleCustomization}
        >
          Theme customization
        </button>
        <button
          className={` btn rounded-sm border-primary ${
            state.isDevelopment && "btn-primary"
          } ml-2`}
          onClick={handleDev}
        >
          Development
        </button>
      </SectaionLayout>
      {development && (
        <SectaionLayout state={state} style="p-20">
          <h2 className=" mb-2">Project Type</h2>
          <div className="flex items-center">
            <input
              id="development"
              type="checkbox"
              className=" h-6 w-6 rounded border-gray-300 text-indigo-600 ring-0 focus:ring-0 focus:ring-inherit"
              checked={isDev}
              onChange={() => handleDevelopment(isDesign ? !isDev : isDev)}
            />
            <label htmlFor="development " className="h4 ml-1">
              {" "}
              Only Development
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="design"
              type="checkbox"
              className=" h-6 w-6 rounded border-gray-300 text-indigo-600 ring-0 focus:ring-0 focus:ring-inherit"
              checked={isDesign}
              onChange={() => handleDesign(!isDesign)}
            />
            <label htmlFor="design" className="h4 ml-1">
              {" "}
              Design
            </label>
          </div>
        </SectaionLayout>
      )}
    </>
  );
};

export default ProjectCategory;
