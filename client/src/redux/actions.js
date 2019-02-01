const addContract = (contract) => ({
  type: 'ADD_CONTRACT',
  contract
})

const addUser = (user) => ({
  type: 'ADD_USER',
  user
})

module.exports = {
  addContract,
  addUser
}