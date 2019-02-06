const initState = {
  contractList: {
    result: [],
    loading: true
  },
  contractPage: {
    result: [],
    loading: true
  }
}

const pages = (state = initState, action) => {
  if (!action.data || !action.data.result) return state;

  switch (action.type) {

    case 'GET_ALL_PENDING':
      return {
        ...state,
        contractList: {
          ...state.contractList,
          loading: true,
        }
      };

    case 'GET_ALL_SUCCESS':
      return {
        ...state, contractList: {
          ...state.contractList,
          loading: false,
          result: [...state.contractList.result, ...action.data.result]
        }
      };

    case 'POST_NEG_SUCCESS':
    return {
      ...state, contractList: {
        ...state.contractList,
        loading: false,
        result: [ ...state.contractList.result, ...action.data.result ]
      }
    };

    case 'GET_ONE_PENDING':
      return {
        ...state,
        contractPage: {
          ...state.contractPage,
          loading: true,
        }
      };

    case 'GET_ONE_SUCCESS':
      return {
        ...state, contractPage: {
          ...state.contractPage,
          loading: false,
          result: action.data.result
        }
      };

    default: return state;

  }

}

export default pages;
