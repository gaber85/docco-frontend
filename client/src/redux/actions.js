const addContract = (contract) => ({
  type: 'ADD_CONTRACT',
  contract
})

const signUp = (user) => ({
  type: 'SIGN_UP',
  user
})

const login = (api) => ({
  type: 'LOGIN',
  api
})

const getAll = (api) => ({
  type: 'GET_ALL',
  api
})

const getOne = (api) => ({
  type: 'GET_ONE',
  api
});

const postNeg = () => ({
  type: 'POST_NEG',
  api: {
    route: 'parties'
  }
});

const getUser = api => ({
  type:'GET_USER',
  api
})






export {
  addContract,
  signUp,
  login,
  getAll,
  postNeg,
  getOne,
  getUser
}
