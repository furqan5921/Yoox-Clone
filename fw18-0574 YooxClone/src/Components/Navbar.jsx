import { Box, Button, Heading, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Text } from '@chakra-ui/react'
import React from 'react'
import { ChevronDownIcon } from '@chakra-ui/icons';
const Navbar = () => {
  return (
    <Box>
      <Box display={"flex"} flexDirection={"row"} >
        <Box>
        <Popover >
  <PopoverTrigger>
    <Button rightIcon={<ChevronDownIcon/>}>India</Button>
  </PopoverTrigger>
  <PopoverContent display={"flex"}>
    {/* <PopoverArrow /> */}
    {/*  */}
    <PopoverHeader>
      <Box display={"flex"} flexDirection={"row"}>
       <Box >
        <Heading>Shop In</Heading>
        <Text fontSize='xs'>By changing the location, delivery options of that location will apply and all items will be removed from your Shopping Bag.</Text>
        
       </Box>
       <Box><PopoverCloseButton /></Box>
       </Box>
      </PopoverHeader>
    <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
  </PopoverContent>
</Popover>
        </Box>
        <Box></Box>
      </Box>
      <Box></Box>
    </Box>
  )
}

export default Navbar
