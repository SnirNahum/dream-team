export const userService = {
  getUser,
}

async function getUser() {
  return Promise.resolve({
    name: 'Itachi Uchiha',
    coins: 100,
    moves: [],
  })
}
