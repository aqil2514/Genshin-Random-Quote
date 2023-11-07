import { Quotes as data } from "../Data";

export const randomQuote = (max) => {
  const random = Math.floor(Math.random() * max);
  const result = {
    author: data[random].charName,
    img: data[random].img[0],
    quote: data[random].quotes[0],
  };

  return result;
};
