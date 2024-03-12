import { useState } from 'react';
import QuoteBox from './Components/QuoteBox';
import { QuoteContext, QuoteProvider } from './Context/QuoteContext';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <QuoteProvider>
        <QuoteBox />
        <Footer />
      </QuoteProvider>
    </>
  );
}

export default App;
