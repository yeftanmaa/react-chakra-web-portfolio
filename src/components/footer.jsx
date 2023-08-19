import React from "react";
import { Container, Spacer, Box, Text, Divider, Stack, useColorMode, Image, Switch } from '@chakra-ui/react';
import { BsArrowUpShort } from 'react-icons/bs';
import { useInView } from "react-intersection-observer";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "./styles/footer.css";

const Footer = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    
    const currentYear = new Date().getFullYear();
    const { colorMode, toggleColorMode } = useColorMode();

    // Smooth color switching animation 
    const styleEl = document.createElement('style');
    const cssText = document.createTextNode(
      'html * { transition: color, background-color 0.3s ease-out!important }',
    );
    styleEl.appendChild(cssText);
    document.head.appendChild(styleEl);
    setTimeout(() => {
      document.head.removeChild(styleEl);
    }, 300);

    // Check if the current color mode is dark or light
    const toColor = colorMode === "dark" ? "white" : "black";

    return (
        <div>
            <AnimationOnScroll animateIn="animate__fadeIn">
                <Container className="footer-global-container" maxW={"7xl"}>
                    <Divider
                        className={`animate__animated ${inView ? 'animate__slideInLeft animate__fast' : 'animate_outsideView'}`}
                        orientation='horizontal'
                        borderWidth={1}
                        borderColor={toColor}
                        marginBottom={150}
                        ref={ref}
                    />

                    <Stack direction={{ base: "column", md: "row" }} spacing={{ base: 2, md: 8 }}>
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
                            <Box display="flex" gap={2}>
                                <Image src="/icons/light-mode-icon.svg" />
                                <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} size="lg" />
                                <Image src="/icons/dark-mode-icon.svg" />
                            </Box>
                            <Text>© Copyright {currentYear}</Text>
                        </Box>
                    </Stack>
                </Container>
            </AnimationOnScroll>
        </div>
    );
}
 
export default Footer;