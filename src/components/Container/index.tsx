import React from "react";

import { Box } from '@chakra-ui/react'


import { Container } from "./styles";

const Auth: React.FC<any> = ({ children }) => {

  return (
    <Container>
      <Box
        background="white"
        width="100%"
        minWidth="200px"
        borderWidth="1px"
        rounded="md"
        shadow="md"
        mt="2.1875rem"
        maxWidth="25.9375rem"
      >
        {children}
      </Box>
    </Container>
  );
};

export default Auth;
