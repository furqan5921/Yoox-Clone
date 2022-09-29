import { Flex, Box, Select, Button, HStack, Portal ,MenuButton,MenuList,MenuItem,Menu} from '@chakra-ui/react';
import React from 'react';

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  
} from '@chakra-ui/react';
import { EmailIcon,ChevronDownIcon, UnlockIcon } from '@chakra-ui/icons';
const Navbar = () => {
  return (
    <Box
      width={'100%'}
      margin={'auto'}
      display="flex"
      justifyContent="space-evenly"
      alignItems={'center'}
    >
      <Box display={'flex'} gap={'20px'}>
        <Box>
        <Menu bg={"white"} >
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Country
  </MenuButton>
  <Box bg={"white"}>
  <MenuList>
    <MenuItem><Box display={"flex"} flexDirection={"column"}>
        <Button  border={"none"}>India</Button>
        <Button  border={"none"}>China</Button>
        <Button  border={"none"}>Usa</Button>
        <Button  border={"none"}>UK</Button>
        <Button  border={"none"}>Canada</Button>
        <Button  border={"none"}></Button>
        <Button  border={"none"}></Button>
        <Button  border={"none"}></Button>
        <Button  border={"none"}></Button>
        <Button  border={"none"}></Button>
        <Button  border={"none"}></Button>
        </Box></MenuItem>
  </MenuList>
  </Box>
</Menu>
        </Box>

        <Box>
          <Popover>
            <PopoverTrigger>
              <Button>Trigger</Button>
            </PopoverTrigger>
            <Portal>
              <PopoverContent>
                <PopoverArrow />
                <PopoverHeader>Header</PopoverHeader>
                <PopoverCloseButton />
                <PopoverBody>
                  <Button colorScheme="blue">Button</Button>
                </PopoverBody>
                <PopoverFooter>This is the footer</PopoverFooter>
              </PopoverContent>
            </Portal>
          </Popover>
        </Box>
      </Box>

      <Box display={"flex"} gap="20px">
        <Box>
          <Button size="lg" >
            Register
          </Button>
        </Box>

        <Box>
          <Popover>
            <PopoverTrigger>
              <Button>Login</Button>
            </PopoverTrigger>
            <Portal>
              <PopoverContent>
                <PopoverArrow />
                <PopoverHeader>Header</PopoverHeader>
                <PopoverCloseButton />
                <PopoverBody>
                  <Button colorScheme="blue">Button</Button>
                </PopoverBody>
                <PopoverFooter>This is the footer</PopoverFooter>
              </PopoverContent>
            </Portal>
          </Popover>
        </Box>
      </Box>
    </Box>
  );
};


export default Navbar;

{
  /* <HStack>
                <Select p="7px">
                    <option value="india">INDIA</option>
                    <option value="usa">USA</option>
                    <option value="uk">UK</option>
                    <option value="chinese">CHINESE</option>
                    <option value="japanese">JAPANESE</option>
                </Select>
                <Button>Customer Care</Button>
                </HStack>
                <HStack>
                    <Button>Register</Button>
                    <Button>Login</Button>
                </HStack> */
}
