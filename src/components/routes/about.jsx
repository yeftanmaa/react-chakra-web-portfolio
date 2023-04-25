import { Container, Text, Box, Image, TableContainer, Table, Tbody, Tr, Td } from "@chakra-ui/react";
import React from "react";
import '../styles/about.css';

const About = () => {
    return (
        <div>
            <Container className="about-global-container" maxW={"7xl"}>
                <Box maxW={700}>
                    <Text className="about-title-text">
                        Currently hustling and brainstorming at a Spain-based digital marketing company.
                    </Text>
                </Box>

                <Box className="about-image-wrapper">
                    <Image src="/images/photo.jpg" alt='Johanes Yefta' w={"100%"} h={"100%"} />
                </Box>

                <Box className="about-title-wrapper" maxW={700}>
                    <Text className="about-title-text">
                        I enjoy finding creative ways to streamline my belongings and keep my workspace tidy and functional.
                    </Text>
                </Box>

                <Box>
                    <TableContainer>
                        <Table>
                            <Tbody className="table-body" fontSize={24}>
                                <Tr>
                                   <Td className="table-data">2022-today</Td>
                                   <Td className="table-data" fontWeight={500}>Demalia</Td>
                                   <Td className="table-data">Web Developer</Td>
                                </Tr>
                                <Tr>
                                   <Td className="table-data">2022</Td>
                                   <Td className="table-data" fontWeight={500}>Sagara Foundation</Td>
                                   <Td className="table-data">Front-end Specialist</Td>
                                </Tr>
                                <Tr>
                                   <Td className="table-data">2021</Td>
                                   <Td className="table-data" fontWeight={500}>Two Sisters Agency</Td>
                                   <Td className="table-data">Graphic Designer</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Box>
            </Container>
        </div>
    );
}
 
export default About;