import React from "react";

import {
  Input as ChakraInput,
  FormControl,
  InputGroup,
  InputProps,
  InputLeftElement,
  useTheme,
} from "@chakra-ui/react";


interface InputAddIcons extends InputProps {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  label?: string;
}

const Input: React.FC<InputAddIcons> = ({ name, mb, iconLeft, ...rest }) => {
  return (
    <FormControl mb={mb}>
      <InputGroup display="flex" flexDir="column">
        {iconLeft && (
          <InputLeftElement children={iconLeft} width="3rem" height="3rem" />
        )}
        <ChakraInput
          rounded="md"
          height="3rem"
          backgroundColor="gray.200"
          borderWidth="1px"
          borderColor="gray.400"
          _placeholder={{
            color: "#7A7A7A",
            fontSize: "14px",
          }}
          _hover={{
            borderColor: "blue.500",
          }}
          _focus={{
            borderColor: "blue.500",
          }}
          errorBorderColor="red.300"
          {...rest}
        />
      </InputGroup>
    </FormControl>
  );
};

export default Input;
