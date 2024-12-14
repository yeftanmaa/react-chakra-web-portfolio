import React from "react";
import { Box, Container, Text, Grid, Divider } from "@chakra-ui/react";
import '../styles/tech-tools.css';

const TechTools = () => {
    return (
        <div>
            <Container className="tech-tools-global-container" maxW={"7xl"}>
                <Box>
                    <Text color="white" className="title-wrapper animate__animated animate__fadeInUp animate__faster" mb={5} minW={'auto'}>
                    Main Skills
                    </Text>

                    <Grid
                        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
                        gap={6}
                        textColor="white"
                        opacity="0.6"
                        fontFamily="'IBM Plex Mono', monospace"
                    >
                        {/* Column 1 */}
                        <Box fontSize={18}>
                            <Text mb={5}>Frontend development,</Text>
                            <Text mb={5}>UI/UX Design,</Text>
                            <Text mb={5}>JavaScript, HTML, CSS, jQuery</Text>
                        </Box>

                        {/* Column 2 */}
                        <Box fontSize={18} w="300px">
                            <Text mb={5}>Java, Visual Basic, C#, C++, Python, Elixir</Text>
                            <Text>Graphic design, Brand design, 3D design</Text>
                        </Box>

                        {/* Column 3 */}
                        <Box fontSize={18} w="300px">
                            <Text mb={5}>Photoshop, Illustrator, Adobe XD, InDesign, Premiere Pro, Figma, Lightroom, Blender</Text>
                        </Box>
                    </Grid>

                    <Divider my={10} borderColor="white" opacity={0.2} borderWidth={1} />

                    <Text color="white" className="title-wrapper animate__animated animate__fadeInUp animate__faster" mb={5} minW={'auto'}>
                    Tools/<span style={{ fontSize: '30px' }}>years</span>
                    </Text>

                    <Grid
                        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
                        gap={6}
                        textColor="white"
                        opacity="0.8"
                        fontFamily="'IBM Plex Mono', monospace"
                    >
                        {/* Column 1 */}
                        <Box fontSize={18}>
                            <Text mb={2}>JavaScript/+3</Text>
                            <Text mb={2}>HTML/+5</Text>
                            <Text mb={2}>CSS/+5</Text>
                            <Text mb={2}>TypeScript/~1</Text>
                            <Text mb={2}>jQuery/+1</Text>
                        </Box>

                        {/* Column 2 */}
                        <Box fontSize={18} w="300px">
                            <Text mb={2}>React/+2</Text>
                            <Text mb={2}>Next.js/+1</Text>
                            <Text mb={2}>Node.js/+3</Text>
                            <Text mb={2}>Package Manager/+2</Text>
                            <Text mb={2}>.NET Framework/+4</Text>
                        </Box>

                        {/* Column 3 */}
                        <Box fontSize={18} w="300px">
                            <Text mb={2}>Adobe Photoshop/+5</Text>
                            <Text mb={2}>Adobe Illustrator/+5</Text>
                            <Text mb={2}>Premiere Pro/+7</Text>
                            <Text mb={2}>Blender/+3</Text>
                            <Text mb={2}>Figma/+3</Text>
                            <Text mb={2}>Adobe XD/+2</Text>
                        </Box>
                    </Grid>
                </Box>
            </Container>
        </div>
    );
}
 
export default TechTools;