import React from "react";
import { Container, Box, Text, HStack, Image, Card, CardBody, CardFooter, Heading, IconButton } from "@chakra-ui/react";
import '../styles/work.css';
import { BsArrowRightCircle } from 'react-icons/bs';

const Work = () => {
    return (
        <div>
            <Container className="work-global-container" maxW={"7xl"}>
                <Box>
                    <Text className="work-title-wrapper" maxW={820}>
                    My experience over past years reached from mobility of digital marketing, university web project and graphic design project.
                    </Text>
                </Box>

                <HStack className="work-clients-wrapper">
                    <Box className="work-clients-image">
                        <Image src="/images/two-sisters.png" objectFit={"cover"} />
                    </Box>
                    <Box className="work-clients-image">
                        <Image src="/images/khayalan-studio.png" objectFit={"cover"} />
                    </Box>
                    <Box width={100}>
                        <Image src="/images/ODA.png" objectFit={"cover"} />
                    </Box>
                    <Box className="work-clients-image">
                        <Image src="/images/Demalia.png" objectFit={"cover"} />
                    </Box>
                    <Box className="work-clients-image">
                        <Image src="/images/Familist.png" objectFit={"cover"} />
                    </Box>
                </HStack>

                <Card boxShadow="none" marginBottom={250}>
                    <CardBody padding={0}>
                        <Image src="/images/portfolio_two-sisters.jpg"/>
                    </CardBody>
                    <CardFooter padding={"45px 0"} justifyContent="space-between">
                        <Box>
                            <Heading as="h1" fontWeight={300}>Business – Branding & Images</Heading>
                        </Box>

                        <Box className="work-portfolio-details-wrapper">
                            <Box>
                                <Text className="work-portfolio-text-details">2021 – today</Text>
                                <Text className="work-portfolio-text-details">Instagram (Android & iOS)</Text>
                            </Box>
                            <Box>
                                <IconButton icon={<BsArrowRightCircle size={45}/>} variant="outline" border={0} />
                            </Box>
                        </Box>
                    </CardFooter>
                </Card>

                <Card boxShadow="none">
                    <CardBody padding={0}>
                        <Image src="/images/portfolio_sagara-project.jpg"/>
                    </CardBody>
                    <CardFooter padding={"45px 0"} justifyContent="space-between">
                        <Box>
                            <Heading as="h1" fontWeight={300}>Sagara Foundation Project</Heading>
                        </Box>

                        <Box className="work-portfolio-details-wrapper">
                            <Box>
                                <Text className="work-portfolio-text-details">Mar 2022 – Jun 2022</Text>
                                <Text className="work-portfolio-text-details"> Mobile & Desktop</Text>
                            </Box>
                            <Box>
                                <IconButton icon={<BsArrowRightCircle size={45}/>} variant="outline" border={0} />
                            </Box>
                        </Box>
                    </CardFooter>
                </Card>
            </Container>
        </div>
    );
}
 
export default Work;