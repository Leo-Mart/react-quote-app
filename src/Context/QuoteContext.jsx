import { createContext, useState } from 'react';

const QuoteContext = createContext();

function QuoteProvider({ children }) {
  const quotes = [
    {
      author: 'Oscar Wilde',
      quote: 'The truth is rarely pure and never simple.',
    },
    {
      author: 'Oscar Wilde',
      quote: 'I am not young enough to know everything.',
    },
    {
      author: 'Oscar Wilde',
      quote: 'Experience is merely the name men gave to their mistakes.',
    },
    {
      author: 'Delamain, Cyberpunk 2077',
      quote:
        "When you live among humans, it's essential to find a shared, fundamental point of understanding. Truth and Good are values proven to cause division, whereas beauty is universal.",
    },
    {
      author: 'Shakespeare, spoken by Macbeth',
      quote: `Tomorrow, and tomorrow, and tomorrow,
              Creeps in this petty pace from day to day,
              To the last syllable of recorded time;
              And all our yesterdays have lighted fools
              The way to dusty death. Out, out, brief candle!
              Life\'s but a walking shadow, a poor player,
              That struts and frets his hour upon the stage,
              And then is heard no more. It is a tale
              Told by an idiot, full of sound and fury,
              Signifying nothing.`,
    },
    {
      author: 'David Foster Wallace',
      quote: `None of this is about morality, or religion, or dogma, or big fancy questions of life after death. the capital-T Truth is about life before death.
              It is about making it to thirty, or maybe even fifty, without wanting to shoot yourself in the head.
              It is about the real value of a real education, which has nothing to do with grades or degrees and everything to do with simple awareness -- awareness of what is so real and essential, so hidden in plain sight all around us, that we have to keep reminding ourselves over and over:
              This is Water.
              This is Water.`,
    },
    {
      author: 'The Tragically Hip',
      quote: `Everything is bleak 
            It's the middle of the night
            You're all alone and
            The dummies might be right
            Outside, the darkness lurks.`,
    },
    {
      author: 'Marcel Proust',
      quote:
        'The real voyage of discovery consists not in seeking new landscapes, but in having new eyes',
    },
    {
      author: 'Marcel Proust',
      quote:
        'Remembrance of things past is not necessarily the remembrance of things as they were',
    },
    {
      author: 'Marcel Proust',
      quote:
        'Happines is beneficial for the body, but it is grief that develps the powers of the mind',
    },
    {
      author: 'Marcel Proust',
      quote:
        'Illnes is the doctor to whom we pay most heed; to kindness, to knowledge, we make promises only; pain we obey.',
    },
  ];

  const [quote, setQuote] = useState(quotes);

  return (
    <QuoteContext.Provider value={{ quote, setQuote }}>
      {children}
    </QuoteContext.Provider>
  );
}

export { QuoteContext, QuoteProvider };
