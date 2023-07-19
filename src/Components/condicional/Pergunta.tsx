import { useState } from "react";

interface PerguntaProps {
    texto: string;
    resposta: string;
}

export default function Pergunta(props: PerguntaProps){
    const [aberta, setAberta] = useState<boolean>(false);


    return (
        <div className={` flex flex-col flex-wrap max-w-sm
            border border-white rounded-md overflow-hidden
        `}>
            <div className="bg-zinc-700 p-5 cursor-pointer"
            onClick={()=> setAberta(!aberta)}>
                {props.texto}
            </div>
            {aberta && (
                <div className="p-5">
                    {props.resposta}
                </div>
            )}
        </div>
    )
}