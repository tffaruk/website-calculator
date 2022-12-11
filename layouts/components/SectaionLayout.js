import React from "react";

const SectaionLayout = ({ children, item, state, ...rest }) => {
  return (
    <div
      className={`shadow-[0px 0px 19px 0px #0000001a] z-0 mb-16 rounded-md  bg-[#ffffff0f] text-center `}
    >
      <div className={rest.style}>{children}</div>

      {state && item && (
        <div className="flex items-center justify-end border-t border-border px-4 pb-2">
          <h2 className="h5 mr-2 font-normal ">
            <span className=" capitalize">{item}</span> cost:
          </h2>
          <h3 className="h4 my-4 rounded-sm bg-secondary px-12 py-2 text-right text-primary ">
            $
            {state.isDevelopment && state.development[item].prize
              ? state.development[item].prize
              : state.isCustomization && state.customization[item].prize
              ? state.customization[item].prize
              : 0}
          </h3>
        </div>
      )}
    </div>
  );
};

export default SectaionLayout;
