import React, { useEffect, useState } from "react";
import { Box, Container, Grid, GridItem, Image, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import '../styles/workgdesign.css';
import TypewriterComponent from "typewriter-effect";

const WorkGDesign = () => {
    // Automatically reset scroll to top
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [])
    

    // Set state to control image on hover
    const [onHover, setOnHover] = useState(false);
    const [imageSrc, setImageSrc] = useState('');

    const showOnHover = (event) => {
        setOnHover(true);
        event.target.classList.add('hovered');
        const source = event.currentTarget.getAttribute('src');
        setImageSrc(source);
    };

    const hideOnHover = (event) => {
        setOnHover(false);
        event.target.classList.remove('hovered');
    };
    
    return (
        <div>
            <Container className="workgdesign-global-container" maxW={"7xl"}>

            <Box color="white" className="workgdesign-title-wrapper">
                <TypewriterComponent
                    options={{
                        strings: 'Delight on my <b>most-popular </b>design over past few years.',
                        autoStart: true,
                        delay: 50
                    }}
                />
            </Box>

            <Tabs
                align="center"
                variant='soft-rounded'
                colorScheme='green'
                size={"md"}
            >
                <TabList
                    alignItems="center"
                    flexWrap={"wrap"}
                >
                    <Tab className="tab-header" color="white">All</Tab>
                    <Tab className="tab-header" color="white">Business & Branding</Tab>
                    <Tab className="tab-header" color="white">Streetwear</Tab>
                    <Tab className="tab-header" color="white">3D Design</Tab>
                </TabList>

                <TabPanels>
                    {/* Tab Panel: All */}
                    <TabPanel>
                        {/* First Grid */}
                        <Grid
                            templateRows='repeat(4, 1fr)'
                            templateColumns='3fr repeat(4, 1fr)'
                            gap={4}
                            className="grid-tab-all"
                        >
                            <GridItem gridArea="1 / 1 / 5 / 2" className="tab-all-div1" bg='whitesmoke'>
                                
                                { onHover && imageSrc.includes('IG Feeds_The King is Risen') && (
                                    <div className="overlay-text">
                                        <p>The King is Risen</p>
                                    </div>
                                )}

                                <Image
                                    loading="lazy"
                                    src="/images/IG Feeds_The King is Risen.jpg" className="grid-tab-all-image-1"
                                    width='100%'
                                    height='100%'
                                    objectFit='cover'
                                    onMouseOver={showOnHover}
                                    onMouseOut={hideOnHover}
                                />
                            </GridItem>

                            <GridItem gridArea="1 / 2 / 3 / 4" className="tab-all-div2" bg='whitesmoke'>

                                { onHover && imageSrc.includes('IG Feeds_ISOMAN Pack_V04') && (
                                    <div className="overlay-text">
                                        <p>AppleHerbs</p>
                                    </div>
                                )}

                                <Image
                                    loading="lazy"
                                    src="/images/IG Feeds_ISOMAN Pack_V04.jpg"
                                    className="grid-tab-all-image-g"
                                    onMouseOver={showOnHover}
                                    onMouseOut={hideOnHover}
                                />
                            </GridItem>

                            <GridItem gridArea="1 / 4 / 3 / 6" className="tab-all-div3" bg='whitesmoke'>

                                { onHover && imageSrc.includes('IG Feeds_Extended Grace') && (
                                    <div className="overlay-text">
                                        <p>Extended Grace</p>
                                    </div>
                                )}

                                <Image
                                    loading="lazy"
                                    src="/images/IG Feeds_Extended Grace.jpg"
                                    className="grid-tab-all-image-g"
                                    onMouseOver={showOnHover}
                                    onMouseOut={hideOnHover}
                                />
                            </GridItem>

                            <GridItem gridArea="3 / 2 / 5 / 4" className="tab-all-div4" bg='whitesmoke'>

                                { onHover && imageSrc.includes('IG Feeds_How to Get More Engagement_SLIDE-01') && (
                                    <div className="overlay-text">
                                        <p>Two Sisters Agency</p>
                                    </div>
                                )}

                                <Image
                                    loading="lazy"
                                    src="/images/IG Feeds_How to Get More Engagement_SLIDE-01.jpg"
                                    className="grid-tab-all-image-g"
                                    onMouseOver={showOnHover}
                                    onMouseOut={hideOnHover}
                                />
                            </GridItem>
                            
                            <GridItem gridArea="3 / 4 / 5 / 6" className="tab-all-div5" bg='smokewhite'>

                                { onHover && imageSrc.includes('IG Feeds_Custom Services_SLIDE-02') && (
                                    <div className="overlay-text">
                                        <p>Two Sisters Agency</p>
                                    </div>
                                )}

                                <Image
                                    loading="lazy"
                                    src="/images/IG Feeds_Custom Services_SLIDE-02.jpg"
                                    className="grid-tab-all-image-g"
                                    onMouseOver={showOnHover}
                                    onMouseOut={hideOnHover}
                                />
                            </GridItem>
                        </Grid>

                        {/* Second Grid */}
                        <Grid
                            templateRows='4fr 5fr 1fr 2fr'
                            templateColumns='repeat(4, 1fr)'
                            gap={4}
                            className="grid2-tab-all"
                        >
                            <GridItem gridArea="1 / 1 / 3 / 4" className="tab-all-div6" bg='smokewhite'>
                                <Image loading="lazy" src="/images/Render-05.jpg" width={'100%'} height={'100%'} objectFit="cover" />
                            </GridItem>

                            <GridItem gridArea="1 / 4 / 3 / 5" className="tab-all-div7" bg='smokewhite'>
                                <Image loading="lazy" src="/images/Poster Teaser 3_What Happened To The Crowns.jpg" width='100%' height='100%' objectFit="cover" />
                            </GridItem>

                            <GridItem gridArea="3 / 1 / 5 / 2" className="tab-all-div8" bg='smokewhite'>
                                <Image loading="lazy" src="/images/Day-08_SLIDE-01.jpg" />
                            </GridItem>

                            <GridItem gridArea="3 / 2 / 5 / 3" className="tab-all-div9" bg='smokewhite'>
                                <Image loading="lazy" src="/images/Day-22A.jpg" />
                            </GridItem>

                            <GridItem gridArea="3 / 3 / 5 / 4" className="tab-all-div10" bg='smokewhite'>
                                <Image loading="lazy" src="/images/IG Feeds_002_Revolution Bright_B_v01.jpg" />
                            </GridItem>

                            <GridItem gridArea="3 / 4 / 5 / 5" className="tab-all-div11" bg='smokewhite'>
                                <Image loading="lazy" src="/images/IG Feeds_Christmas Special Edition.jpg" />
                            </GridItem>

                        </Grid>
                    </TabPanel>

                    {/* Tab Panel: Business and branding */}
                    <TabPanel>
                        <Grid
                            templateRows='repeat (4, 1fr)'
                            templateColumns='repeat (3, 1fr)'
                            gap={4}
                            marginBottom={100}
                            className="grid-tab-business-branding"
                        >
                            <GridItem gridArea='1 / 1 / 3 / 2' bg='smokewhite'>
                                <Image loading="lazy" src="/images/IG Feeds_ISOMAN Pack_V04.jpg" />
                            </GridItem>

                            <GridItem gridArea='1 / 2 / 3 / 3' bg='smokewhite'>
                                <Image loading="lazy" src="/images/IG Feeds_Custom Services_SLIDE-02.jpg" />
                            </GridItem>

                            <GridItem gridArea='1 / 3 / 3 / 4' bg='smokewhite'>
                                <Image loading="lazy" src="/images/Day-08_SLIDE-01.jpg" />
                            </GridItem>

                            <GridItem gridArea='3 / 1 / 5 / 2' bg='smokewhite'>
                                <Image loading="lazy" src="/images/Day-22A.jpg" />
                            </GridItem>

                            <GridItem gridArea='3 / 2 / 5 / 3' bg='smokewhite'>
                                <Image loading="lazy" src="/images/IG Feeds_How to Get More Engagement_SLIDE-01.jpg" />
                            </GridItem>

                            <GridItem gridArea='3 / 3 / 5 / 4' bg='smokewhite'>
                                <Image loading="lazy" src="/images/IG Feeds_002_Revolution Bright_B_v01.jpg" />
                            </GridItem>
                        </Grid>
                    </TabPanel>

                    {/* Tab Panel: Streetwear */}
                    <TabPanel>
                        <Grid>
                            <GridItem>
                                <Image loading="lazy" src="/images/IG Feeds_Extended Grace.jpg" className="grid-tab-streetwear-image-1" />
                            </GridItem>
                        </Grid>
                    </TabPanel>

                    {/* Tab Panel: 3D Design */}
                    <TabPanel>
                        <Grid
                            templateRows='repeat (2, 1fr)'
                            templateColumns='repeat (4, 1fr)'
                            gap={4}
                            className="grid-tab-3d-design"
                        >
                            <GridItem gridArea='1 / 1 / 3 / 4'>
                                <Image loading="lazy" src="/images/Render-05.jpg" width={'100%'} height={'100%'} objectFit="cover" />
                            </GridItem>

                            <GridItem gridArea='1 / 4 / 3 / 5'>
                                <Image loading="lazy" src="/images/Poster Teaser 3_What Happened To The Crowns.jpg" width='100%' height='100%' objectFit="cover" />
                            </GridItem>
                        </Grid>
                    </TabPanel>
                </TabPanels>
            </Tabs>
            </Container>
        </div>
    );
}
 
export default WorkGDesign;