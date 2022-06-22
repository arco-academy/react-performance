import React, { useState, useEffect } from "react";

import axios from 'axios';

import Input from "../../components/Input";
import Modal from "../../components/Modal";

import UserList from "./components/UserList";
import { UserItemProps } from "./components/UserItem";

import { Heading, Box, useDisclosure } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const List: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [users, setUsers] = useState([] as UserItemProps[]);
  const [userDetail, setUserDetail] = useState('');

  const getUser = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    setUsers(response.data)
  }

  useEffect(() => {
    getUser();
  }, [getUser]);

  const handleUserDetail = (name: string) => {
    setUserDetail(name);
    onOpen();
  }
  
  const handleCloseModal = () => {
    onClose();
    setUserDetail('');
  }

  return (
    <>
      <Box p="6">
        <Heading color="black" fontSize="xl" mb="5">
          Listagem de usuários
        </Heading>

        <Input
          placeholder="Buscar usuário"
          type="text"
          iconLeft={<Box as={SearchIcon} color="blue.500" size="18px" />}
          mb="5"
        />

        <UserList users={users} handleClick={handleUserDetail} />
      </Box>
      <Modal isOpen={isOpen} userName={userDetail} onClose={handleCloseModal} />
    </>
  );
};

export default List;
