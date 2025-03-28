import { Container, Text, Box, Image, Divider, useColorMode } from "@chakra-ui/react";
import React from "react";
import '../styles/about.css';
import { AnimationOnScroll } from "react-animation-on-scroll";
import { aboutTableData } from "../../json/aboutTableData";

const MobileAbout = () => {
    const { colorMode } = useColorMode();

    // Check if the current color mode is dark or light
    const toColor = colorMode === "dark" ? "white" : "white";

    return (
        <div>
            <Container className="about-global-container" maxW={"7xl"}>
                <Box maxW={900}>
                    <Text color="white" className="about-title-text animate__animated animate__fadeInUp animate__fast">
                        Currently hustling and brainstorming at a Spain-based digital marketing company.
                    </Text>
                </Box>
                
                <AnimationOnScroll initiallyVisible={false} animateOnce={true} animatePreScroll={false} animateIn="animate__fadeIn">
                    <Box className="about-image-wrapper">
                        <Image loading="lazy" src="/images/photo.jpg" alt='Johanes Yefta' w={"100%"} h={"100%"} />
                    </Box>
                </AnimationOnScroll>

                <AnimationOnScroll initiallyVisible={false} animateOnce={true} animatePreScroll={false} animateIn="animate__fadeInUp">
                    <Box className="about-title-wrapper" maxW={750}>
                        <Text color="white" className="about-title-text">
                            I enjoy finding creative ways to streamline my belongings and keep my workspace tidy and functional.
                        </Text>
                    </Box>
                </AnimationOnScroll>
                
                <AnimationOnScroll duration={1} initiallyVisible={false} animateOnce={true} animatePreScroll={false} animateIn="animate__zoomIn">
                    {aboutTableData.map((data, key) => {
                        return (
                            <Box key={key}>
                                <Divider
                                    orientation='horizontal'
                                    borderWidth={1}
                                    borderColor={toColor}
                                />

                                <Box marginY={25} fontSize={23} lineHeight={2}>
                                    <Text color="white">{data.year}</Text>
                                    <Text color="white" fontWeight={500}>{data.company}</Text>
                                    <Text color="white">{data.role}</Text>
                                </Box>
                                
                            </Box>
                            
                            )
                        })}
                        
                        <Divider
                            orientation='horizontal'
                            borderWidth={1}
                            borderColor={toColor}
                        />
                </AnimationOnScroll>

                <AnimationOnScroll initiallyVisible={false} animateOnce={true} animatePreScroll={false} animateIn="animate__fadeInUp">
                    <Box className="about-education-wrapper" maxW={750}>
                        <Text color="white" className="about-title-text">
                            Pursued a Bachelor's degree in Computer Science, with a graduation date set on 2023.
                        </Text>
                    </Box>
                </AnimationOnScroll>

            </Container>
        </div>
    );
}
 
export default MobileAbout;