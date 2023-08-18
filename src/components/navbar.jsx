import React from "react";
import { Container, Stack, Spacer, Box, Switch, useColorMode } from '@chakra-ui/react';
import "./styles/navbar.css";
import 'animate.css';
import ContactForm from "./modals/contact-form";

const Navbar = () => {

    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <div>
            <Container className="navbar-global-container animate__animated animate__fadeIn" maxW={"7xl"}>
                <Stack direction={{ base: "column", md: "row" }} spacing={{ base: 0, md: 8 }}>
                    <Box className="navbar-logo-wrapper">
                        <a href='/'>Johanes Yefta</a>
                    </Box>

                    <Spacer />

                    <Box className="navbar-links-wrapper">
                        <a href="/about">About</a>
                        <a href="/work">Work</a>
                        <ContactForm />
                        <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} size="md" />
                    </Box>
                </Stack>
            </Container>

            
        </div>
    );
}
 
export default Navbar;