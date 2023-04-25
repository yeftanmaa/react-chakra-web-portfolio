import { Container, Text, Box, Image, TableContainer, Table, Tbody, Tr, Td } from "@chakra-ui/react";
import React from "react";
import '../styles/about.css';

const About = () => {
    return (
        <div>
            <Container maxW={"7xl"} textAlign={"left"} padding={"100px 0"}>
                <Box maxW={700}>
                    <Text fontSize={34} fontWeight={300}>
                        Currently hustling and brainstorming at a Spain-based digital marketing company.
                    </Text>
                </Box>

                <Box margin={"130px 0"}>
                    <Image src="/images/photo.jpg" alt='Johanes Yefta' width={"100%"} height={"100%"} />
                </Box>

                <Box maxW={700} marginTop={200} marginBottom={200}>
                    <Text fontSize={34} fontWeight={300}>
                        I enjoy finding creative ways to streamline my belongings and keep my workspace tidy and functional.
                    </Text>
                </Box>

                <Box>
                    <TableContainer>
                        <Table>
                            <Tbody fontSize={24}>
                                <Tr>
                                   <Td className="table-data">2022-today</Td>
                                   <Td className="table-data" fontWeight={500}>Demalia</Td>
                                   <Td className="table-data">Web Developer</Td>
                                </Tr>
                                <Tr paddingTop={30}>
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