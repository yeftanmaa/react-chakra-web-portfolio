import React from "react";
import { Container, Flex, Spacer, Box } from '@chakra-ui/react';

const Navbar = () => {
    return (
        <div>
            <Container maxW={"7xl"} padding={"60px 0"}>
                <Flex>
                    <Box display={"flex"} alignItems={"center"} fontSize={22} fontWeight={400}>
                        <a href='/'>Johanes Yefta</a>
                    </Box>

                    <Spacer />

                    <Box display={"flex"} alignItems={"center"} gap={10} fontSize={19} fontWeight={400}>
                        <a href="/about">About</a>
                        <a href="/work">Work</a>
                        <a href="/contact">Contact</a>
                    </Box>
                </Flex>
            </Container>
        </div>
    );
}
 
export default Navbar;