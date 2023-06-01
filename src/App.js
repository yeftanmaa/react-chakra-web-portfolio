import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme/theme';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/routes/home';
import About from './components/routes/about';
import Work from './components/routes/work';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <Router>
          <Navbar />
          
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/work" element={<Work />} />
          </Routes>

          <Footer />
        </Router>
      </div>
    </ChakraProvider>
    
  );
}

export default App;
