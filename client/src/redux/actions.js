const addContract = (contract) => ({
  type: 'ADD_CONTRACT',
  contract
})

const signUp = (user) => ({
  type: 'SIGN_UP',
  user
})

const login = (api)  =>({
  type: 'LOGIN',
  api
})

const token = (authToken) => ({
  type: 'TOKEN',
  authToken
})

const getAll = (api) => ({
  type: 'GET_ALL',
  api
})



module.exports = {
  addContract,
  signUp,
  login,
  token,
  getAll
}