import React from "react";
import { Container, Flex, Spacer, Box, Text, Divider } from '@chakra-ui/react';

const Footer = () => {
    return (
        <div>
            <Container maxW={"7xl"} textAlign={"left"} padding={"100px 0"}>
                <Divider orientation='horizontal' borderWidth={1} borderColor="black" marginBottom={200}/>

                <Flex>
                    <Box display={"flex"} flexDirection={"column"} fontSize={52} fontWeight={400}>
                        <Box className="footer-link">
                            <a id="footer-link-instagram" href='https://www.instagram.com/yeftanma/#' target="_blank" rel="noreferrer">Instagram</a>
                        </Box>
                        
                        <Box className="footer-link">
                            <a id="footer-link-github" href='https://github.com/yeftanmaa' target="_blank" rel="noreferrer">Github</a>
                        </Box>
                        
                        <Box className="footer-link">
                            <a id="footer-link-read-cv" href='/read-cv'>Read CV</a>
                        </Box>
                    </Box>

                    <Spacer />

                    <Box display={"flex"} alignItems="flex-end" fontSize={17}>
                        <Text>© Copyright 2023</Text>
                    </Box>
                </Flex>
            </Container>
        </div>
    );
}
 
export default Footer;