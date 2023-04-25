import React from "react";
import { Container, Flex, Spacer, Box } from '@chakra-ui/react';
import "./styles/navbar.css";

const Navbar = () => {
    return (
        <div>
            <Container className="navbar-global-container" maxW={"7xl"}>
                <Flex>
                    <Box className="navbar-logo-wrapper">
                        <a href='/'>Johanes Yefta</a>
                    </Box>

                    <Spacer />

                    <Box className="navbar-links-wrapper">
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