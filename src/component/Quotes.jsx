import { randomQuote } from "../utils/functions";
import { Quotes as data } from "../Data";
import { useState, useRef } from "react";
import { useEffect } from "react";

export default function Quotes() {
  const [dataQuote, setDataQuote] = useState("");
  const img = useRef(null);
  const copy = useRef(null);

  useEffect(() => {
    imageChange();
  }, [dataQuote]);

  function imageChange() {
    const bgStyle = img.current.style;
    bgStyle.backgroundImage = `url(${dataQuote.img})`;
  }

  function handlerGenerate() {
    const dataQuote = randomQuote(data.length);

    setDataQuote(dataQuote);
  }

  function copyHandler() {
    const copyText = copy.current.innerText;

    navigator.clipboard.writeText(copyText);
  }

  return (
    <section ref={img} className="w-full h-full p-5 bg-fixed bg-center bg-cover min-h-screen transition-all duration-1000 bg-black">
      <div className="w-1/2 h-1/2 mx-auto bg-gradient-to-t from-white px-4 py-5">
        <figure>
          <img src={dataQuote.img} className="block mx-auto w-96 object-cover" alt="" />
          <figcaption className="text-center">{dataQuote.author}</figcaption>
        </figure>
        <article ref={copy} className="mt-2">
          <p>
            {dataQuote.quote}. <span>~{dataQuote.author}</span>
          </p>
        </article>
        <div className="flex mt-3">
          <button className="text-white mx-auto bg-emerald-800 font-bold px-4 py-2 hover:bg-cyan-600 hover:text-white transition-all duration-500 rounded-2xl" onClick={copyHandler}>
            Copy Quotes
          </button>
          <button className="text-white mx-auto bg-emerald-800 font-bold px-4 py-2 hover:bg-cyan-600 hover:text-white transition-all duration-500 rounded-2xl" onClick={handlerGenerate}>
            Generate
          </button>
        </div>
      </div>
    </section>
  );
}
