import React, { useState } from "react";
import { Container, Box, Text, Image, Heading, Stack, Tag, TagLabel, Link, Flex } from "@chakra-ui/react";
import '../styles/work.css';
import { BsArrowUpShort } from 'react-icons/bs';
import { AnimationOnScroll } from "react-animation-on-scroll";
import { motion } from "framer-motion";
import { workExpData } from "../../json/workExpData";
import { clientData } from "../../json/clientData";

const Work = () => {
    const animationVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 100 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 20
            },
        },
    };

    const redirectBasedOnTitle = (title, live, github) => {
        if (live === "" && github === "") {
            return "abc"; 
        }
    
        if (title.toLowerCase().includes('branding')) {
            return '/work/graphic-design';
        } else {
            return live === "" ? github : live;
        }
    };

    const getTarget = (title, live, github) => {
        if (title.toLowerCase().includes('branding')) {
            return "_self";
        }
        return live !== "" || github !== "" ? "_blank" : "_self";
    };
       

    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div>
            <Container className="work-global-container" maxW={"7xl"}>
                <Box className="animate__animated animate__fadeInUp animate__fast">
                    <Text color="white" className="work-title-wrapper" maxW={820}>
                    My experience over past years reached from mobility of
                    
                    <Text display="inline" bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text'> digital marketing</Text>,
                    
                    <Text display="inline" bgGradient='linear(to-r, red.500, yellow.500)' bgClip="text"> university web project</Text> and 
                    
                    <Text display="inline" bgGradient='linear-gradient(to right, #f953c7, #ff517e, #ff7a38, #dca600, #93c71b);' bgClip="text"> graphic design project.</Text>
                    </Text>
                </Box>

                <Stack direction={{ base: "column", md: "row" }} spacing={{ base: 2, md: 0 }} className="work-clients-wrapper">

                    {clientData.map((data, key) => {
                        return (
                            <motion.div
                                key={key}
                                initial="hidden"
                                animate="visible"
                                variants={{
                                    ...animationVariants,
                                    visible: {
                                        ...animationVariants.visible,
                                        // Set the opacity transition duration dynamically
                                        transition: {
                                            ...animationVariants.visible.transition,
                                            opacity: {
                                                duration: data.duration, // Use the duration from clientData
                                            },
                                        },
                                    },
                                }}
                            >
                                <Box className="work-clients-image">
                                    <Image loading="lazy" src={data.imageSrc} objectFit="cover" alt={data.alt} />
                                </Box>
                            </motion.div>
                        )
                    })}
                </Stack>

                {workExpData.map((data, key) => {
                    return (
                        <AnimationOnScroll initiallyVisible={false} animateOnce={true} animatePreScroll={false} animateIn="animate__fadeIn" offset={300}>
                                <Link
                                    className={`project-item-link ${hoveredIndex !== null && hoveredIndex !== key ? 'hovered' : ''}`}
                                    display="flex"
                                    flexDirection={["column", "column", "row"]}
                                    gap={8}
                                    mx={4}
                                    href={redirectBasedOnTitle(data.title, data.live, data.github)}
                                    target={getTarget(data.title, data.live, data.github)}
                                    onMouseEnter={() => setHoveredIndex(key)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                >
                                    <Box cursor="pointer">
                                        <Image 
                                            loading="lazy" 
                                            src={data.imageSrc} 
                                            alt={data.alt} 
                                            maxW={["auto", "auto", "350px"]} 
                                            borderRadius="xl"
                                        />
                                    </Box>

                                    <Box>
                                        <Flex align="center">
                                            <Heading
                                                className="work-heading"
                                                color="white"
                                                as="h2"
                                                fontWeight={400}
                                                fontSize={["lg", "30px"]}
                                                mb={2}
                                            >
                                                {data.title}
                                            </Heading>
                                            
                                            <BsArrowUpShort
                                                className="icon-work"
                                                fontSize={42}
                                                color="white"
                                            />
                                        </Flex>
                                        <Text 
                                            color="whiteAlpha.700" 
                                            className="work-description" 
                                            fontSize={["sm", "md"]}
                                        >
                                            {data.description}
                                        </Text>

                                        <Box mt={5}>
                                            {data.tags.map((tagName, index) => {
                                                return (
                                                    <Tag
                                                        key={index}
                                                        className="tag-color"
                                                        size="lg"
                                                        variant="solid"
                                                        borderRadius="full"
                                                        fontSize={16}
                                                        px={5}
                                                        py={2}
                                                        mr={4}
                                                        mb={4}
                                                    >
                                                        <TagLabel color="#ABFFD9" fontWeight={300}>{tagName}</TagLabel>
                                                    </Tag>
                                                )
                                            })}
                                        </Box>
                                    </Box>
                                </Link>
                        </AnimationOnScroll>
                    )
                })}
                
                <AnimationOnScroll initiallyVisible={false} animateOnce={true} animatePreScroll={false} animateIn="animate__fadeInUp">
                    <Box className="work-footer-local-container">
                        <Text color="white" className="work-footer-wrapper" maxW={720}>
                            <a href="/tech-tools"><mark className="discover-link">Discover</mark></a> the <Text display={"inline"} bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text'>powerful tools</Text> and <Text display="inline" bgGradient='linear(to-r, red.500, yellow.500)' bgClip="text">cutting-edge technologies</Text> I've been using as a developer.
                        </Text>
                    </Box>    
                </AnimationOnScroll>
                

            </Container>
        </div>
    );
}
 
export default Work;