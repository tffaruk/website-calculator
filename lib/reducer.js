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
        customization: {
          ...state.customization,
          id: action.id,
          prize:
            state.customization.id === action.id
              ? state.customization.prize
              : action.prize + state.customization.page.prize,
          page: {
            ...state.customization.page,
            prize: state.customization.page.prize,
          },
        },
        isCustomization: true,
        isDevelopment: false,
      };
    case "DEVELOPMENT":
      return {
        ...state,
        development: {
          ...state.development,
          id: action.id,

          prize:
            state.development.id === action.id
              ? state.development.prize
              : action.prize + state.development.page.prize,
        },
        isDevelopment: true,
        isCustomization: false,
      };

    // case "PROJECT_TYPE_DESIGN":
    //   return {
    //     ...state,
    //     design: action.isDesign,
    //   };
    // case "PROJECT_TYPE_DEVELOPMENT":
    //   return {
    //     ...state,
    //     development: action.isDevelopment,
    //   };
    case "DEV_PAGE":
      //   return {
      //     ...state,
      //     category: {
      //       ...state.category,
      //       prize: action.custom
      //         ? state.category.prize + action.prize - state.page.prize
      //         : action.isActive
      //         ? state.category.prize - action.prize
      //         : state.category.prize + action.prize,
      //     },
      //     page: {
      //       ...state.page,
      //       prize: action.changeCategory
      //         ? action.prize
      //         : action.changeType
      //         ? action.prize
      //         : action.isActive
      //         ? state.page.prize - action.prize
      //         : state.page.prize + action.prize,
      //     },
      //   };
      return {
        ...state,
        development: {
          ...state.development,
          prize: action.prize + state.development.prize,
          page: {
            ...state.development.page,
          },
        },
      };
    case "CUSTOMIZE_PAGE":
      return {
        ...state,
        customization: {
          ...state.customization,
        },
      };
    default:
      return state;
  }
};
