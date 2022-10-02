import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Button } from "react-bootstrap";
import "./BackgPic.css"

export default function BackgPic(){

    return(
    <Box className="MainPic">
        <Image src="https://www.yoox.com/images/yoox80/banners/6824_14_OurChoices_W_Main.jpg?634485886601286852#width=1380&height=637" position="relative" width="90%"/>
        <Box className="text">
            <Flex direction="column" >
            <Text fontSize="2xl"><b>THE NEW STYLE GALLERY</b></Text>
            <h2>Outfit ideas from our stylists</h2>
            </Flex>
           <Button>Shop Now</Button>
        </Box>    
    </Box>
    )
}