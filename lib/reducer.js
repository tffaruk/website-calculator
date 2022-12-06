// initial assign value
// export const template_amount = 450;
// export const page_amount = 30;

//  page amount calculation
const increasePageAmount = (id, increase) => {
  return (page_amount + Math.ceil(page_amount * increase)) * id;
};

// reducer template
export const reducer = (state, action) => {
  switch (action.type) {
    case "CUSTOMIZATION":
      return {
        ...state,
        category: {
          ...state.category,
          id: action.id,
          category: action.category,
          prize:
            state.category.id === action.id
              ? state.category.prize
              : action.prize + state.page.prize,
        },
        page: {
          ...state.page,
          prize: state.page.prize,
        },
      };
    case "DEVELOPMENT":
      return {
        ...state,
        category: {
          ...state.category,
          id: action.id,
          category: action.category,
          prize:
            state.category.id === action.id
              ? state.category.prize
              : action.prize + state.page.prize,
        },
      };
    case "PAGE":
      return {
        ...state,
        category: {
          ...state.category,
          prize: state.category.prize + action.prize,
        },
        page: {
          ...state.page,
          prize: action.custom ? action.prize : state.page.prize + action.prize,
        },
      };

    default:
      return state;
  }
};
