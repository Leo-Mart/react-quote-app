import { useContext, useEffect, useState } from 'react';
import { QuoteContext } from '../Context/QuoteContext';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa6';
import { motion, AnimatePresence } from 'framer-motion';

const QuoteBox = () => {
  const { quote, setQuote } = useContext(QuoteContext);
  let random = Math.floor(Math.random() * quote.length);
  const [currentQuote, setCurrentQuote] = useState(quote[random]);

  const randomQuote = () => {
    random = Math.floor(Math.random() * quote.length);
    setCurrentQuote(quote[random]);
  };

  const variants = {
    show: {
      opacity: 1,
      transition: {
        ease: 'easeIn',
        duration: 1.5,
      },
    },
    hide: {
      opacity: 0,
    },
  };
  return (
    <div className="quotebox">
      <motion.div
        key={currentQuote.quote}
        variants={variants}
        animate={'show'}
        initial="hide"
      >
        <div className="quote-text">
          <FaQuoteLeft />
          <span className="text">{currentQuote.quote}</span>
          <FaQuoteRight />
        </div>
      </motion.div>

      <motion.div
        key={currentQuote.author}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeIn', duration: 1.5 }}
      >
        <div className="quote-author">
          <span className="author">{currentQuote.author}</span>
        </div>
      </motion.div>
      <div className="btn-container">
        <button onClick={randomQuote} className="btn new-quote-btn">
          New Quote
        </button>
      </div>
    </div>
  );
};

export default QuoteBox;
