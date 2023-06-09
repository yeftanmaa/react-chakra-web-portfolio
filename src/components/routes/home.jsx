import React from "react";
import { Container, Box, Text } from '@chakra-ui/react';
import '../styles/home.css';

const Home = () => {
    return (
        <div>
            <Container className="home-global-container" maxW={"7xl"}>
                <Box>
                    <Text className="home-title-wrapper" w={820}>
                        Jakarta-based Web Developer and Graphic Designer.<br></br><br></br>
                        My aim is to create lasting impressions through design and technology which I believe that design & technology can adds values faster than it costs.
                    </Text>
                </Box>
            </Container>
        </div>
    );
}
 
export default Home;