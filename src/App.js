import React from 'react';

import { AboutUs, Chef, ComingSoon, Entertain, FindUs, Footer, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <ComingSoon/>
    <Intro />
    <Laurels />
    <Entertain />
    <FindUs />
    <Footer />
  </div>
);

export default App;