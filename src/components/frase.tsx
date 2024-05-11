"use client";
import { useEffect, useState } from "react";

import { Reload } from "./reload";

interface FraseResponse {
  id: number;
  frase: string;
  tema: string;
  disco: string;
  video: string;
}

async function getApiFrases() {
  const res = await fetch("http://localhost:3000/data/db.json");
  const json = await res.json();
  const frases = json[Math.floor(Math.random() * json.length)];

  return frases;
}

export default function Frase() {
  const [data, setData] = useState<FraseResponse>({
    id: 0,
    frase: "",
    tema: "",
    disco: "",
    video: "",
  });
  

  const onHandler = async () => {
    const data = await getApiFrases();
    setData(data);
  };

  useEffect(() => {
    onHandler();
  }, []);


 
  return (
    <div className="backdrop-blur-sm rounded-lg bg-white/10 p-4">
      <h1 className="text-5xl font-bold text-center text-gray-300 drop-shadow-xl">
        Frases Redondos
      </h1>
      <button onClick={onHandler} className="text-blue-300 text-center">
        <Reload />
      </button>

      <pre className="text-2xl  text-blue-300 drop-shadow-xl tracking-wider text-pretty italic font-black">
        &#34;{data.frase} &#34;
      </pre>

      <pre className="text-xl font-extrabold  text-blue-300 drop-shadow-xl tracking-wider uppercase">
        {data.tema}
      </pre>

      <p className="text-lg font-extrabold  text-blue-300 drop-shadow-xl tracking-wider text-left">
        {data.disco}
      </p>
      <div className=" w-full aspect-w-16 aspect-h-9">
        <iframe
          width="780"
          height="560"
          src={data.video}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
}
