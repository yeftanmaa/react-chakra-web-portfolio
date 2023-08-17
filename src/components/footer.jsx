import React from "react";
import { Container, Flex, Spacer, Box, Text, Divider } from '@chakra-ui/react';
import { BsArrowUpShort } from 'react-icons/bs';
import { useInView } from "react-intersection-observer";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "./styles/footer.css";

const Footer = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    

    return (
        <div>
            <AnimationOnScroll animateIn="animate__fadeIn">
                <Container className="footer-global-container" maxW={"7xl"}>
                    <Divider
                        className={`animate__animated ${inView ? 'animate__slideInLeft animate__fast' : 'animate_outsideView'}`}
                        orientation='horizontal'
                        borderWidth={1}
                        borderColor="black"
                        marginBottom={150}
                        ref={ref}
                    />

                    <Flex
                        // className={`animate__animated ${inView ? 'animate__fadeIn animate__slow' : ''}`}
                        // ref={ref}
                    >
                        <Box
                            className="footer-link-wrapper"
                            ref={ref}
                        >
                            <Box className="footer-link">
                                <BsArrowUpShort className="icon" fontSize={90} color="#E06219" />
                                <span className="btn-icon"><a id="footer-link-instagram" href='https://www.instagram.com/yeftanma/#' target="_blank" rel="noreferrer">Instagram</a></span>
                            </Box>
                            
                            <Box className="footer-link">
                                <BsArrowUpShort className="icon" fontSize={90} color="#ee1280" />
                                <span className="btn-icon"><a id="footer-link-github" href='https://github.com/yeftanmaa' target="_blank" rel="noreferrer">Github</a></span>
                            </Box>
                            
                            <Box className="footer-link">
                                <BsArrowUpShort className="icon" fontSize={90} color="#0000C8" />
                                <span className="btn-icon"><a id="footer-link-read-cv" href='https://read.cv/yeftanma' target="_blank" rel="noreferrer">Read CV</a></span>
                            </Box>
                        </Box>

                        <Spacer />

                        <Box className="footer-copyright-wrapper">
                            <Text>© Copyright 2023</Text>
                        </Box>
                    </Flex>
                </Container>
            </AnimationOnScroll>
        </div>
    );
}
 
export default Footer;