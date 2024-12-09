import { motionData } from './json/motionData';

import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/react';
import theme from './theme/theme';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './components/notFound';
import Home from './components/routes/home';
import About from './components/routes/about__desktop';
import MobileAbout from './components/routes/about__mobile';
import Work from './components/routes/work';
import Navbar from './components/navbar';
import Footer from './components/footer';
import WorkGDesign from './components/routes/__work-design';
import Fun from './components/routes/tech-tools';

function App() {
  const isApiRoute = window.location.pathname.startsWith('/api/');
  const [isMobile] = useMediaQuery('(max-width: 767px)');

  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <video autoPlay muted loop id='bg-motion'>
          <source src={motionData.imageSrc} type='video/mp4'></source>
        </video>
        <Router>
          {!isApiRoute && <Navbar />} {/* Only render Navbar if it's not an API route */}
          
          <Routes>
            {/* <Route path="*" element={<NotFound />} /> */}
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={isMobile ? <MobileAbout /> : <About />} />
            <Route exact path="/work" element={<Work />} />
            <Route exact path="/mobile-about" element={<MobileAbout />} />
            <Route exact path="/work/graphic-design" element={<WorkGDesign />} />
            <Route exact path="/fun" element={<Fun />} />
          </Routes>

          {!isApiRoute && <Footer />} {/* Only render Footer if it's not an API route */}
        </Router>
      </div>
    </ChakraProvider>
    
  );
}

export default App;
