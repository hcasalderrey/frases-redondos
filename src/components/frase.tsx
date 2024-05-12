"use client";
import { Kablammo } from "next/font/google";
import { useEffect, useState } from "react";

import { Reload } from "./reload";


const kablammo = Kablammo({ subsets: ["latin"] });
interface FraseResponse {
  id: number;
  frase: string;
  tema: string;
  disco: string;
  video: string;
}

async function getApiFrases() {
  const res = await fetch("./data/db.json");
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
    <div className="backdrop-blur-sm  rounded-lg bg-white/50 p-4">
      <h1 className="text-5xl font-bold text-center text-gray-800 drop-shadow-xl" >
       <span className={kablammo.className}>Frases Redondos</span>  
      </h1>
      <button onClick={onHandler} className="text-gray-800 font-extrabold text-center hover:animate-pulse transition-all">
        <Reload />
      </button>

      <p className="text-2xl  text-blue-700 drop-shadow-xl tracking-wider text-pretty italic font-black">
        &#34;{data.frase} &#34;
      </p>

      <p className="flex justify-center  text-xl font-extrabold  text-orange-900 drop-shadow-xl tracking-wider uppercase m-2">
        {data.tema}
      </p>

      <p className="flex justify-end text-lg font-extrabold  text-blue-700  drop-shadow-xl tracking-wider m-2">
        {data.disco}
      </p>
      <div className="flex w-full aspect-video justify-center items-center">
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
