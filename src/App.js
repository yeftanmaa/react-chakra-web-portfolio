import './App.css';
import { ChakraProvider, Container, Flex, Spacer, Box, Button, Text, Divider } from '@chakra-ui/react';
import theme from './theme/theme';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <Container maxW={"6xl"} padding={"60px 0"}>
          <Flex>
            <Box display={"flex"} alignItems={"center"} fontSize={22} fontWeight={400}>
              {/* eslint-disable-next-line */}
              <a href='#'>Johanes Yefta</a>
            </Box>
            <Spacer />
            <Box display={"flex"} alignItems={"center"} gap={7}>
              <Button colorScheme='black' variant='ghost' fontSize={19} fontWeight={400}>About</Button>
              <Button colorScheme='black' variant='ghost' fontSize={19} fontWeight={400}>Work</Button>
              <Button colorScheme='black' variant='ghost' fontSize={19} fontWeight={400}>Contact</Button>
            </Box>
          </Flex>
        </Container>

        <Container maxW={"6xl"} textAlign={"left"} padding={"100px 0"}>
          <Box>
            <Text fontSize={34} w={820} fontWeight={300}>
              Jakarta-based Web Developer and Graphic Designer. <br></br><br></br>
              My aim is to create lasting impressions through design and technology which I believe that design & technology can adds values faster than it costs.
            </Text>
          </Box>
        </Container>

        <Container maxW={"6xl"} textAlign={"left"} padding={"100px 0"}>
          <Divider orientation='horizontal' borderWidth={1} borderColor="black" marginBottom={150}/>

          <Flex>
            <Box display={"flex"} flexDirection={"column"} fontSize={45} fontWeight={400}>
              <a href='https://www.instagram.com/yeftanma/#'>Instagram</a>
              <a href='https://github.com/yeftanmaa'>Github</a>
              {/* eslint-disable-next-line */}
              <a href='#'>Read CV</a>
            </Box>
            <Spacer />
            <Box display={"flex"} alignItems="flex-end" fontSize={20}>
              <Text>© Copyright 2023</Text>
            </Box>
          </Flex>
        </Container>


      </div>
    </ChakraProvider>
    
  );
}

export default App;
