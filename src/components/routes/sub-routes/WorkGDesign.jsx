import React from "react";
import { Box, Container, Grid, GridItem, Image, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import '../../styles/workgdesign.css';
import TypewriterComponent from "typewriter-effect";

const WorkGDesign = () => {
    return (
        <div>
            <Container className="workgdesign-global-container" maxW={"7xl"}>

            <Box className="workgdesign-title-wrapper">
                <TypewriterComponent
                    options={{
                        strings: 'Delight on my most-popular design<br>over a few years.',
                        autoStart: true,
                        delay: 50
                    }}
                />
            </Box>

            <Tabs
                align="center"
                variant='soft-rounded'
                colorScheme='green'
            >
                <TabList>
                    <Tab className="tab-header">All</Tab>
                    <Tab className="tab-header">Business & Branding</Tab>
                    <Tab className="tab-header">Streetwear</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <Grid
                            templateRows='repeat(4, 1fr)'
                            templateColumns='3fr repeat(4, 1fr)'
                            gap={4}
                        >
                            <GridItem gridArea="1 / 1 / 5 / 2" className="div1" bg='papayawhip' w={'530px'}>
                                <Image src="/images/IG Feeds_The King is Risen.jpg" width={'100%'} height={'100%'} objectFit={"cover"} />
                            </GridItem>

                            <GridItem gridArea="1 / 2 / 3 / 4" className="div2" bg='papayawhip'>
                                <Image src="/images/IG Feeds_ISOMAN Pack_V04.jpg" />
                            </GridItem>

                            <GridItem gridArea="1 / 4 / 3 / 6" className="div3" bg='papayawhip'>
                            <Image src="/images/IG Feeds_Extended Grace.jpg" />
                            </GridItem>

                            <GridItem gridArea="3 / 2 / 5 / 4" className="div4" bg='papayawhip'>
                            <Image src="/images/IG Feeds_How to Get More Engagement_SLIDE-01.jpg" />
                            </GridItem>
                            
                            <GridItem gridArea="3 / 4 / 5 / 6" className="div5" bg='papayawhip'>
                            <Image src="/images/IG Feeds_Custom Services_SLIDE-02.jpg" />
                            </GridItem>
                        </Grid>
                    </TabPanel>

                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>

                    <TabPanel>
                        <p>three!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
            </Container>
        </div>
    );
}
 
export default WorkGDesign;