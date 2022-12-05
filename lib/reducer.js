// initial assign value
export const template_amount = 450;
export const page_amount = 30;

//  page amount calculation
const increasePageAmount = (id, increase) => {
  return (page_amount + Math.ceil(page_amount * increase)) * id;
};

// reducer template
export const reducer = (state, action) => {
  switch (action.type) {
    case "INITIAL":
      return {
        ...state,
        template: {
          ...state.template,
          amount: template_amount,
          id: action.id,
        },

        page: {
          ...state.page,
          amount: page_amount * state.page.pageId,
        },
      };
    case "STAGE-1":
      return {
        ...state,
        template: {
          ...state.template,
          amount:
            state.template.id === action.id
              ? state.template.amount
              : Math.ceil(template_amount * action.increase),
          id: action.id,
        },
        page: {
          ...state.page,
          amount: increasePageAmount(state.page.pageId, 0.5),
        },
      };

    case "STAGE-2":
      return {
        ...state,
        template: {
          ...state.template,
          amount:
            state.template.id === action.id
              ? state.template.amount
              : Math.ceil(template_amount * action.increase),
          id: action.id,
        },
        page: {
          ...state.page,
          amount: increasePageAmount(state.page.pageId, 1),
        },
      };
    case "STAGE-3":
      return {
        ...state,
        template: {
          ...state.template,
          amount:
            state.template.id === action.id
              ? state.template.amount
              : Math.ceil(template_amount * action.increase),
          id: action.id,
        },
        page: {
          ...state.page,
          amount: increasePageAmount(state.page.pageId, 1.5),
        },
      };
    case "STAGE-4":
      return {
        ...state,
        template: {
          ...state.template,
          amount:
            state.template.id === action.id
              ? state.template.amount
              : Math.ceil(template_amount * action.increase),
          id: action.id,
        },
        page: {
          ...state.page,
          amount: increasePageAmount(state.page.pageId, 2),
        },
      };
    case "STAGE-5":
      return {
        ...state,
        template: {
          ...state.template,
          amount:
            state.template.id === action.id
              ? state.template.amount
              : Math.ceil(template_amount * action.increase),
          id: action.id,
        },
        page: {
          ...state.page,
          amount: increasePageAmount(state.page.pageId, 2.5),
        },
      };
    //   page action
    case "PAGE":
      return {
        ...state,
        template: {
          ...state.template,
          amount:
            state.page.pageId === action.id
              ? state.template.amount
              : state.page.pageId - action.id > 0
              ? state.template.amount -
                state.page.amount * (state.page.pageId - action.id)
              : action.id - state.page.pageId > 1
              ? state.template.amount +
                state.page.amount * (action.id - state.page.pageId)
              : state.page.pageId - action.id > 1
              ? state.template.amount +
                state.page.amount * (state.page.pageId - action.id)
              : state.template.amount + state.page.amount,
        },
        page: {
          ...state.page,
          pageId:
            state.page.pageId === action.id ? state.page.pageId : action.id,
        },
      };

    default:
      return state;
  }
};
