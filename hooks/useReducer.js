import { useReducer } from "react";
import { reducer, page_amount, template_amount } from "@lib/reducer";

const ProductReducer = () => {
  const initialState = {
    template: {
      id: 1,
      amount: template_amount,
    },
    page: {
      amount: page_amount,
      pageId: 1,
    },
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return {
    state,
    dispatch,
  };
};

export default ProductReducer;
