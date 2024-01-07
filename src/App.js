import React from 'react';
import Navbar from "./components/Navbar";
import Gallery from './components/Gallery';
import VideoBackground from './components/VideoBackground';
import { ThemeProvider } from '@mui/material/styles';
import { 
  GlobalStyles, 
  } from '@mui/material';
import theme from './style/theme'
import globalStyles from './style/globalStyles'


function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles styles={globalStyles} />
        <div className="App">
          <Navbar />
          <VideoBackground />
          <Gallery />
        </div>
    </ThemeProvider>
  );
}

export default App;
