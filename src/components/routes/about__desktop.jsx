import { Container, Text, Box, Image, TableContainer, Table, Tbody, Tr, Td, useColorMode } from "@chakra-ui/react";
import React from "react";
import '../styles/about.css';
import { AnimationOnScroll } from "react-animation-on-scroll";
import { aboutTableData } from "../../json/aboutTableData";

const About = () => {
    const { colorMode } = useColorMode();

    // Check if the current color mode is dark or light
    const toColor = colorMode === "dark" ? "white" : "black";

    return (
        <div>
            <Container className="about-global-container" maxW={"7xl"}>
                <Box maxW={900}>
                    <Text className="about-title-text animate__animated animate__fadeInUp animate__fast">
                        Currently hustling and brainstorming at a Spain-based digital marketing company.
                    </Text>
                </Box>
                
                <AnimationOnScroll initiallyVisible={false} animateOnce={true} animatePreScroll={false} animateIn="animate__fadeIn">
                    <Box className="about-image-wrapper">
                        <Image loading="lazy" src="/images/photo.jpg" alt='Profile Photo: Johanes Yefta' w={"100%"} h={"100%"} />
                    </Box>
                </AnimationOnScroll>

                <AnimationOnScroll initiallyVisible={false} animateOnce={true} animatePreScroll={false} animateIn="animate__fadeInUp">
                    <Box className="about-title-wrapper" maxW={750}>
                        <Text className="about-title-text">
                            I enjoy finding creative ways to streamline my belongings and keep my workspace tidy and functional.
                        </Text>
                    </Box>
                </AnimationOnScroll>
                
                <AnimationOnScroll duration={1} initiallyVisible={false} animateOnce={true} animatePreScroll={false} animateIn="animate__zoomIn">
                    <Box>
                        <TableContainer>
                            <Table>
                                <Tbody className="table-body" fontSize={24}>
                                    {aboutTableData.map((data, key) => {
                                        return (
                                            <Tr key={key} borderTop={`2px solid ${toColor}`} className="table-first-row">
                                                <Td padding={"50px 0"} borderBottom={`2px solid ${toColor}`}>{data.year}</Td>
                                                <Td fontWeight={500} borderBottom={`2px solid ${toColor}`}>{data.company}</Td>
                                                <Td borderBottom={`2px solid ${toColor}`}>{data.role}</Td>
                                            </Tr>
                                        )
                                    })}
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </Box>
                </AnimationOnScroll>

                <AnimationOnScroll initiallyVisible={false} animateOnce={true} animatePreScroll={false} animateIn="animate__fadeInUp">
                    <Box className="about-education-wrapper" maxW={750}>
                        <Text className="about-title-text">
                            Pursued a Bachelor's degree in Computer Science, with a graduation date set for 2023.
                        </Text>
                    </Box>
                </AnimationOnScroll>

            </Container>
        </div>
    );
}
 
export default About;