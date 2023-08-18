import React from "react";
import { Container, Box, Text, Image, Card, CardBody, CardFooter, Heading, IconButton, Stack } from "@chakra-ui/react";
import '../styles/work.css';
import { AnimationOnScroll } from "react-animation-on-scroll";
import { motion } from "framer-motion";
import { BsArrowRightCircle } from 'react-icons/bs';
import { workExpData } from "../../json/workExpData";

const Work = () => {
    const animationVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 100 },
        visible: {
          opacity: 1,
          scale: 1,
          y: 0,
          transition: { type: 'spring', stiffness: 300, damping: 20 },
        },
    };
         

    return (
        <div>
            <Container className="work-global-container" maxW={"7xl"}>
                <Box className="animate__animated animate__fadeInUp animate__fast">
                    <Text className="work-title-wrapper" maxW={820}>
                    My experience over past years reached from mobility of
                    
                    <Text display="inline" bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text'> digital marketing</Text>,
                    
                    <Text display="inline" bgGradient='linear(to-r, red.500, yellow.500)' bgClip="text"> university web project</Text> and 
                    
                    <Text display="inline" bgGradient='linear-gradient(to right, #f953c7, #ff517e, #ff7a38, #dca600, #93c71b);' bgClip="text"> graphic design project.</Text>
                    </Text>
                </Box>

                <Stack direction={{ base: "column", md: "row" }} spacing={{ base: 2, md: 8 }} className="work-clients-wrapper">
                    
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={animationVariants}
                        transition={{ duration: 0.2 }}
                    >
                        <Box className="work-clients-image">
                            <Image src="/images/two-sisters.png" objectFit={"cover"} />
                        </Box>
                    </motion.div>
                    
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={animationVariants}
                        transition={{ duration: 0.7 }}
                    >
                        <Box className="work-clients-image">
                            <Image src="/images/khayalan-studio.png" objectFit={"cover"} />
                        </Box>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={animationVariants}
                        transition={{ duration: 1.2 }}
                    >
                        <Box width={100}>
                            <Image src="/images/ODA.png" objectFit={"cover"} />
                        </Box>
                    </motion.div>
                    
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={animationVariants}
                        transition={{ duration: 1.4 }}
                    >
                        <Box className="work-clients-image">
                            <Image src="/images/Demalia.png" objectFit={"cover"} />
                        </Box>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={animationVariants}
                        transition={{ duration: 1.7 }}
                    >
                        <Box className="work-clients-image">
                            <Image src="/images/Familist.png" objectFit={"cover"} />
                        </Box>
                    </motion.div>
                </Stack>

                {workExpData.map((data, key) => {
                    return (
                        <AnimationOnScroll initiallyVisible={false} animateOnce={true} animatePreScroll={false} animateIn="animate__fadeIn" offset={300}>
                            <Card key={key} boxShadow="none" marginBottom={150}>
                                <CardBody padding={0}>
                                    <Image src={data.imageSrc}/>
                                </CardBody>
                                <CardFooter flexDirection={{ base: "column", md: "row" }} padding={"45px 25px 45px 15px"} justifyContent="space-between">
                                    <Box>
                                        <Heading as="h1" fontWeight={400}>{data.title}</Heading>
                                    </Box>

                                    <Box justifyContent={{ base: "space-between", md: "flex-start"}} className="work-portfolio-details-wrapper">
                                        <Box>
                                            <Text className="work-portfolio-text-details">{data.date}</Text>
                                            <Text className="work-portfolio-text-details">{data.platform}</Text>
                                        </Box>
                                        <Box>
                                            <IconButton icon={<BsArrowRightCircle size={45}/>} variant="outline" border={0} />
                                        </Box>
                                    </Box>
                                </CardFooter>
                            </Card>
                        </AnimationOnScroll>
                    )
                })}
                
                <AnimationOnScroll initiallyVisible={false} animateOnce={true} animatePreScroll={false} animateIn="animate__fadeInUp">
                    <Box className="work-footer-local-container">
                        <Text className="work-footer-wrapper" maxW={720}>
                            <mark>Discover</mark> the <Text display={"inline"} bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text'>powerful tools</Text> and <Text display="inline" bgGradient='linear(to-r, red.500, yellow.500)' bgClip="text">cutting-edge technologies</Text> I've been using as a developer.
                        </Text>
                    </Box>    
                </AnimationOnScroll>
                

            </Container>
        </div>
    );
}
 
export default Work;