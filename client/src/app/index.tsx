import { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';

import { CREATE_USER } from '../graphql/mutations/user';
import { GET_ALL_USERS } from '../graphql/query/user';
import './index.css';

export type UserType = {
  id: string;
  username: string;
  age: number;
};

export const App = () => {
  const { data, loading, error, refetch } = useQuery<{
    getAllUsers: UserType[];
  }>(GET_ALL_USERS);
  const [newUser, { data: newUserData }] = useMutation(CREATE_USER);
  console.log(newUserData);

  const [users, setUsers] = useState<UserType[]>();
  const [username, setUsername] = useState<string>();
  const [age, setAge] = useState<any>();

  useEffect(() => {
    setUsers(data?.getAllUsers);
  }, [data]);

  const addUser = () => {
    newUser({
      variables: {
        input: {
          username,
          age,
        },
      },
    }).then((res) => {
      console.log(res.data);
      setUsername('');
      setAge(0);
    });
  };

  const getAll = () => {
    refetch();
  };
  return (
    <>
      <div className="app-wrapper">
        <form>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <div className="btns">
            <button onClick={addUser}>CreateUser</button>
            <button onClick={getAll}>GetUsers</button>
          </div>
        </form>
      </div>
      <div>
        {users &&
          users?.map((user) => (
            <div className="user" key={user.id}>
              {user.id}. {user.username}. {user.age}
            </div>
          ))}
      </div>
    </>
  );
};
