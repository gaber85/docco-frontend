const initState = {
  contractList: {
    result: [],
    loading: true
  },
  currentContract: {
    result: [],
    loading: true
  },
  profile: {},
  counterParty: {}
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
          result: action.data.result
        }
      };
    case 'GET_CONTRACT_PENDING':
      return {
        ...state,
        contractList: {
          ...state.counterParty,
          loading: true,
        }
      };

    case 'GET_CONTRACT_SUCCESS':
      return {
        ...state, contractList: {
          ...state.currentContract,
          loading: false,
          result: action.data.result
        }
      };
    case 'GET_PARTY_PENDING':
      return {
        ...state,
        counterparty: {
          ...state.counterparty,
          loading: true,
        }
      };

    case 'GET_PARTY_SUCCESS':
      return {
        ...state, counterparty: {
          ...state.counterparty,
          loading: false,
          result: action.data.result
        }
      };

    default: return state;

  }

}

export default pages;