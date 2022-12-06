import React, { useState } from "react";
const ProjectCategory = ({ dispatch }) => {
  const [development, setDevelopment] = useState(false);
  const [color, setColor] = useState();

  // themecustomization
  const handleCustomization = (id) => {
    setDevelopment(false);
    setColor(id);
    dispatch({
      id: id,
      type: "CUSTOMIZATION",
      prize: 200,
      category: "customization",
    });
  };
  // development
  const handleDev = (id) => {
    setDevelopment(!development);
    setColor(id);
    dispatch({
      id: id,
      type: "DEVELOPMENT",
      prize: 400,
      category: "development",
    });
  };
  return (
    <section>
      <div className="mb-8">
        <h2 className="h3 mb-2">Project category</h2>
        <button
          className={` btn ${color === 1 && "btn-primary"}`}
          onClick={() => handleCustomization(1)}
        >
          Theme customization
        </button>
        <button
          className={` btn ${color === 2 && "btn-primary"} ml-2`}
          onClick={() => handleDev(2)}
        >
          Development
        </button>
      </div>
      {development && (
        <div>
          <h3 className="h3 mb-2">Project Type</h3>
          <div className="inline-flex items-center">
            <input
              id="development"
              type="checkbox"
              className=" h-6 w-6 rounded border-gray-300 text-indigo-600 ring-0 focus:ring-0 focus:ring-inherit"
            />
            <label htmlFor="development " className="h4 ml-1">
              {" "}
              Only Development
            </label>
          </div>
          <div className="inline-flex items-center">
            <input
              id="design"
              type="checkbox"
              className="ml-3 h-6 w-6 rounded border-gray-300 text-indigo-600 ring-0 focus:ring-0 focus:ring-inherit"
            />
            <label htmlFor="design" className="h4 ml-1">
              {" "}
              Design
            </label>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectCategory;
