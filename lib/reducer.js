//  page amount calculation
// const increasePageAmount = (id, increase) => {
//   return (page_amount + Math.ceil(page_amount * increase)) * id;
// };

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
        category: "customization",
        isCustomization: true,
        isDevelopment: false,
        custom: true,
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
        category: "development",
        isDevelopment: true,
        isCustomization: false,
        dev: true,
      };

    case "PROJECT_TYPE_DESIGN":
      return {
        ...state,
        development: {
          ...state.development,
          design: action.isDesign,
        },
      };
    case "PROJECT_TYPE_DEVELOPMENT":
      return {
        ...state,
        development: {
          ...state.development,
          development: action.isDevelopment,
        },
      };

    case "DEV_PAGE":
      return {
        ...state,
        development: {
          ...state.development,
          prize: action.custom
            ? state.development.prize +
              action.prize -
              state.development.page.prize
            : action.changeType
            ? !state.development.development && state.development.design
              ? state.development.prize +
                action.prize -
                state.development.page.prize -
                (state.development.content.prize + state.development.adon.prize)
              : state.development.prize +
                action.prize -
                state.development.page.prize
            : action.isActive
            ? state.development.prize - action.prize
            : state.development.prize + action.prize,
          page: {
            prize: action.custom
              ? action.prize
              : action.changeType
              ? action.prize
              : action.isActive
              ? state.development.page.prize - action.prize
              : //   : !state.development.design
                //   ? state.development.prize - action.prize
                state.development.page.prize + action.prize,
          },
          content: {
            ...state.development.content,
            prize:
              state.development.development && state.development.design
                ? state.development.content.prize
                : !state.development.development && state.development.design
                ? 0
                : state.development.content.prize,
          },
          adon: {
            ...state.development.adon,
            prize:
              state.development.development && state.development.design
                ? state.development.adon.prize
                : !state.development.development && state.development.design
                ? 0
                : state.development.adon.prize,
          },
        },
      };
    case "CUSTOMIZE_PAGE":
      return {
        ...state,
        customization: {
          ...state.customization,
          prize: action.custom
            ? state.customization.prize +
              action.prize -
              state.customization.page.prize
            : action.isActive
            ? state.customization.prize - action.prize
            : state.customization.prize + action.prize,

          page: {
            prize: action.custom
              ? action.prize
              : action.isActive
              ? state.customization.page.prize - action.prize
              : state.customization.page.prize + action.prize,
          },
        },
      };
    case "CONTENT":
      if (state.isDevelopment) {
        return {
          ...state,
          development: {
            ...state.development,
            prize: action.custom
              ? state.development.prize +
                action.prize -
                state.development.content.prize
              : action.isActive
              ? state.development.prize - action.prize
              : state.development.prize + action.prize,
            content: {
              ...state.development.content,
              prize: action.custom
                ? action.prize
                : action.isActive
                ? state.development.content.prize - action.prize
                : state.development.content.prize + action.prize,
            },
          },
          //   content:
        };
      }
      if (state.isCustomization) {
        return {
          ...state,
          customization: {
            ...state.customization,
            prize: action.custom
              ? state.customization.prize +
                action.prize -
                state.customization.content.prize
              : action.isActive
              ? state.customization.prize - action.prize
              : state.customization.prize + action.prize,

            content: {
              ...state.customization.content,
              prize: action.custom
                ? action.prize
                : action.isActive
                ? state.customization.content.prize - action.prize
                : state.customization.content.prize + action.prize,
            },
          },
        };
      }

    case "AD-ON":
      if (state.isDevelopment) {
        return {
          ...state,
          development: {
            ...state.development,
            prize: action.custom
              ? state.development.prize +
                action.prize -
                state.development.adon.prize
              : action.isActive
              ? state.development.prize - action.prize
              : state.development.prize + action.prize,
            adon: {
              ...state.development.adon,
              prize: action.custom
                ? action.prize
                : action.isActive
                ? state.development.adon.prize - action.prize
                : state.development.adon.prize + action.prize,
            },
          },
          //   adon:
        };
      }
      if (state.isCustomization) {
        return {
          ...state,
          customization: {
            ...state.customization,
            prize: action.custom
              ? state.customization.prize +
                action.prize -
                state.customization.adon.prize
              : action.isActive
              ? state.customization.prize - action.prize
              : state.customization.prize + action.prize,

            adon: {
              ...state.customization.adon,
              prize: action.custom
                ? action.prize
                : action.isActive
                ? state.customization.adon.prize - action.prize
                : state.customization.adon.prize + action.prize,
            },
          },
        };
      }
    default:
      return state;
  }
};
