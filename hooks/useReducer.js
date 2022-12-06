import { useReducer } from "react";
import { reducer } from "@lib/reducer";

const ProductReducer = () => {
  const initialState = {
    category: {
      prize: null,
      category: "",
    },
    page: {
      prize: null,
    },
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return {
    state,
    dispatch,
  };
};

export default ProductReducer;
