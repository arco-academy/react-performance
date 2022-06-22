import React, { useEffect } from 'react';

import { ListItem, ListIcon } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";


export interface UserItemProps {
  name: string
  id: number
  handleClick: (name: string) => void
}

const UserItem: React.FC<UserItemProps> = ({ name, handleClick }) => {
  useEffect(() => {
    console.log("renderizou o item");
  });

  return (
    <ListItem cursor="pointer" onClick={() => handleClick(name)}>
      <ListIcon as={StarIcon} color="green.500" />
      {name}
    </ListItem>
  );
};

export default UserItem;