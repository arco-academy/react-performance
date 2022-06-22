import React from 'react';

import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
} from "@chakra-ui/react";

interface ModalProps {
  userName: string;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = (props) => {
  const { userName, isOpen, onClose } = props;

return (
  <ChakraModal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>{userName}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          dictum interdum tellus ac ornare. Sed ut tempor libero, eu vehicula
          eros.
        </Text>
      </ModalBody>
    </ModalContent>
  </ChakraModal>
);
}

export default Modal;