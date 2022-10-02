import { Box,Flex, Image, Text } from "@chakra-ui/react";
import "./BfS.css"

export default function BfS({bottom,left,bottomTwo,leftTwo,height}){

    return(
    <Flex m="auto" width="90%" mt="2%" >
            <Box>
                <Image src="https://www.yoox.com/images/yoox80/banners/6769_2_DA_NewArrivals_HL.jpg?634485886601286852#width=430&height=600" position="relative" width="100%" height="95%" />
                <Box className="texts" position="absolute" bottom={bottom} left={left}> 
                    <Text fontSize="2xl">ASTRO-INSPIRED ACCESSORIES</Text>
                    <Flex gap="1rem">
                        <Text display="inline-block" borderBottom="1px" ><b>DISCOVER MORE</b></Text>
                        <Text display="inline-block" borderBottom="1px" ><b>SHOP NOW</b></Text>
                    </Flex>
                </Box>
            </Box>
            <Box>
                <Image src="https://www.yoox.com/images/yoox80/banners/5460_1_Myar_HL_W.jpg?634485886601286852#width=430&height=600" position="relative" width="100%"  height="95%" />
                    <Box className="textsTwo" position="absolute" bottom={bottomTwo} left={leftTwo} height={height}> 
                        <Text fontSize="2xl"  >JUST LOVE YOURSELF</Text>
                        <Text fontSize="sm"  >Share your pride</Text>
                        <Flex gap="1rem" >
                            <Text display="inline-block" borderBottom="1px"><b>SHOP NOW</b></Text>
                            <Text display="inline-block" borderBottom="1px"><b>RIGHT THIS WAY</b></Text>
                        </Flex>
                    </Box>
                </Box>
        </Flex>
    )
}