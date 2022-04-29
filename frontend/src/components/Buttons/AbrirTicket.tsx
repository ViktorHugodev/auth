import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Text,
  Textarea
} from "@chakra-ui/react";

export function AbrirTicket({message}: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button variant="link" onClick={onOpen} color="white" textDecoration="underline">
        Abrir ticket
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="gray.dash">
          <ModalHeader>Ticket do modal</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              {message}
            </Text>
            <Textarea placeholder="Digite aqui" />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Fechar
            </Button>
            <Button variant="ghost">botao</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
