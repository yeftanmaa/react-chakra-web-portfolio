import 'animate.css';
import React from "react";
import { Container, Box, Text } from '@chakra-ui/react';
import '../styles/home.css';

const Home = () => {
    return (
        <div>
            <Container className="home-global-container" maxW={"7xl"}>
                <Box>
                    <Text color="white" className="home-title-wrapper animate__animated animate__fadeInUp animate__faster" minW={'auto'} maxW={940}>
                        Jakarta-based Web Developer and Graphic Designer.<br></br><br></br>
                        My aim is to create lasting impressions through design and technology which I believe that design & technology can add values faster than it costs.
                    </Text>
                </Box>
            </Container>
        </div>
    );
}
 
export default Home;