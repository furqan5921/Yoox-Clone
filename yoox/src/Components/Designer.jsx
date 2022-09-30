import React from 'react'
import { Box, Img } from '@chakra-ui/react'
const Designer = () => {
  return (
    <Box h={"500px"} border={"1px solid red"} display={"flex"} justifyContent={"center"}>
        <Box border={"1px solid teal"} position={"absolute"} left={"200px"}  w={"300px"}><Img src={"https://www.yoox.com/images/yoox80/banners/6950_3_HL_DM_ROW.png?634485886601286852#width=430&height=600"}></Img></Box>
        <Box bg={"white"} zIndex={10} border={"1px solid teal"} w={"350px"} bottom={"20px"} position={"relative"}>456</Box>
        <Box border={"1px solid teal"} position={"absolute"} right={"280px"} w={"300px"}><Img src={"https://www.yoox.com/images/yoox80/banners/6769_1_SpotOn95_HL_ROWHK_W_28Sep.gif?634485886601286852#width=430&height=600"}></Img></Box>
    </Box>
  )
}

export default Designer
