import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  RadioGroup,
  Stack,
  IconButton,
  Button,
  useDisclosure,
} from '@chakra-ui/react'
import { useState } from 'react'
import {HiOutlineSearch} from 'react-icons/hi'

export function SearchBar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = useState('top')

  return (
    <>

      <IconButton 
      variant='none'
      size="lg"
      color="white"
      bg="transparent"
      onClick={onOpen} aria-label='Search database' icon={<HiOutlineSearch/>} />
        

      <Drawer placement="top" onClose={onClose} isOpen={isOpen} >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}