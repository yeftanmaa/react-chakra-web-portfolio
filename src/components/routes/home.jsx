import React from "react";
import { Container, Box, Text } from '@chakra-ui/react';
import '../styles/home.css';

const Home = () => {
    return (
        <div>
            <Container maxW={"7xl"} textAlign={"left"} padding={"160px 0"}>
                <Box>
                    <Text fontSize={34} w={820} fontWeight={300}>
                        Jakarta-based Web Developer and Graphic Designer.<br></br><br></br>
                        My aim is to create lasting impressions through design and technology which I believe that design & technology can adds values faster than it costs.
                    </Text>
                </Box>
            </Container>
        </div>
    );
}
 
export default Home;