import { useReducer } from "react";
import { reducer } from "@lib/reducer";

const ProductReducer = () => {
  // initial state
  const initialState = {
    // customization state
    customization: {
      prize: null,
      page: {
        prize: null,
      },
      content: {
        prize: null,
      },
      addons: {
        prize: null,
      },
    },
    // development state
    development: {
      prize: null,
      page: {
        prize: null,
      },
      content: {
        prize: null,
      },
      addons: {
        prize: null,
      },
      design: false,
      development: true,
    },
    design: {
      prize: null,
      page: {
        prize: null,
      },
    },
    // default state
    isDevelopment: false,
    isCustomization: false,
    dev: false,
    custom: false,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return {
    state,
    dispatch,
  };
};

export default ProductReducer;
