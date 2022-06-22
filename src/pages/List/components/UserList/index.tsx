import React from 'react';
import UserItem, { UserItemProps } from '../UserItem';

import { List } from '@chakra-ui/react'

interface UserListProps {
  users: UserItemProps[];
  handleClick: (name: string) => void;
} 

const UserList: React.FC<UserListProps> = ({ users, ...rest }) => {
  return (
    <List spacing={3}>
      {users.map((user) => (
        <UserItem key={user.id} {...user} {...rest} />
      ))}
    </List>
  );
};

export default UserList;