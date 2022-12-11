// reducer template
export const reducer = (state, action) => {
  switch (action.type) {
    // manage customization state
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
    // manage development state
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
    // chanage project type to design
    case "PROJECT_TYPE_DESIGN":
      return {
        ...state,
        development: {
          ...state.development,
          design: action.isDesign,
        },
      };
    // chanage project type to development
    case "PROJECT_TYPE_DEVELOPMENT":
      return {
        ...state,
        development: {
          ...state.development,
          development: action.isDevelopment,
        },
      };
    // pages state for developmetn
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
              : state.development.page.prize + action.prize,
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
    // pages state for theme customization
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
    // content state management  {ex: forsety,sanity}
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
    // ad-on state mangement {ex: form,seo..}
    case "AD-ON":
      // ad-on for development
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
        };
      }
      // ad-on for customization
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
