import React from 'react';

import Form from "../../components/Form";
import Button from "../../components/Button";
import Input from "../../components/Input";

import { Heading, Box, Text } from "@chakra-ui/react";
import { LockIcon, AtSignIcon } from "@chakra-ui/icons";

const SignIn: React.FC = () => {
  return (
    <Box p="6">
      <Heading color="black" fontSize="xl" mb="2">
        Entrar
      </Heading>
      <Text fontSize="md" color="gray.500" mb="8">
        Insira seus dados de acesso para começar
      </Text>

      <Form>
        <Input
          name="username"
          type="text"
          data-testid="email"
          iconLeft={<Box as={AtSignIcon} color="blue.500" size="18px" />}
          mb="5"
        />
        <Input
          name="password"
          placeholder="Digite sua senha"
          autoComplete="current-password"
          data-testid="password"
          iconLeft={<Box as={LockIcon} color="blue.500" size="21px" />}
        />
        <Button textTransform="uppercase" mb="6">
          Entrar
        </Button>
      </Form>
    </Box>
  );
}

export default SignIn;