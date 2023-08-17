import { Container, Text, Box, Image, TableContainer, Table, Tbody, Tr, Td } from "@chakra-ui/react";
import React from "react";
import '../styles/about.css';
import { AnimationOnScroll } from "react-animation-on-scroll";

const About = () => {
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
                        <Image src="/images/photo.jpg" alt='Johanes Yefta' w={"100%"} h={"100%"} />
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
                                    <Tr className="table-first-row">
                                    <Td padding={"50px 0"} borderBottom={"2px solid black"}>2022-today</Td>
                                    <Td fontWeight={500} borderBottom={"2px solid black"}>Demalia</Td>
                                    <Td borderBottom={"2px solid black"}>Web Developer</Td>
                                    </Tr>
                                    <Tr>
                                    <Td padding={"50px 0"} borderBottom={"2px solid black"}>2022</Td>
                                    <Td fontWeight={500} borderBottom={"2px solid black"}>Sagara Foundation</Td>
                                    <Td borderBottom={"2px solid black"}>Front-end Specialist</Td>
                                    </Tr>
                                    <Tr>
                                    <Td padding={"50px 0"} borderBottom={"2px solid black"}>2021</Td>
                                    <Td fontWeight={500} borderBottom={"2px solid black"}>Two Sisters Agency</Td>
                                    <Td borderBottom={"2px solid black"}>Graphic Designer</Td>
                                    </Tr>
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