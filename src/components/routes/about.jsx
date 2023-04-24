import { Container, Text, Box, Image } from "@chakra-ui/react";
import React from "react";

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

                <Box maxW={700} marginTop={250}>
                    <Text fontSize={34} fontWeight={300}>
                        I enjoy finding creative ways to streamline my belongings and keep my workspace tidy and functional.
                    </Text>
                </Box>
            </Container>
        </div>
    );
}
 
export default About;