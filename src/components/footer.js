import React from "react";
import { Container, Flex, Spacer, Box, Text, Divider } from '@chakra-ui/react';
import "./styles/footer.css";

const Footer = () => {
    return (
        <div>
            <Container className="footer-global-container" maxW={"7xl"}>
                <Divider orientation='horizontal' borderWidth={1} borderColor="black" marginBottom={200}/>

                <Flex>
                    <Box className="footer-link-wrapper">
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

                    <Box className="footer-copyright-wrapper">
                        <Text>© Copyright 2023</Text>
                    </Box>
                </Flex>
            </Container>
        </div>
    );
}
 
export default Footer;