import { users } from '../users/index.js';

const createUser = (input) => {
  const id = Date.now();
  return {
    id,
    ...input,
  };
};

export const root = {
  getAllUsers: () => {
    return users;
  },
  getUser: ({ id }) => {
    return users.find((user) => user.id == id);
  },
  createUser: ({ input }) => {
    const user = createUser(input);
    users.push(user);
    return user;
  },
};
