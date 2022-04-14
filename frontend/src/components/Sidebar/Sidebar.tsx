import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  Avatar,
} from '@chakra-ui/react'
import { useRef } from 'react'

export function SideBar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  // const btnRef = useRef()

  return (
    <>
      <Avatar 

      // ref={btnRef} 
      cursor="pointer" 
      name="Victor Hugo" colorScheme='teal' boxShadow="md" size="60px"onClick={onOpen}>
        
      </Avatar>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        // finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          {/* <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder='Type here...' />
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button> */}
          {/* </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    </>
  )
}