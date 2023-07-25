import { useState } from "react";
import Pergunta from "./Pergunta";

export default function Faq(){
    const [ativo, setAtivo] = useState<Number>(-1);

    function alternarVisibilidade(indices: number){
        if(ativo === indices){
            setAtivo(-1);
        }else{
            setAtivo(indices);
        }
    }

    return (
        <div className="flex flex-col gap-2 flex-wrap w-[90%] md:w-3/5">
            <Pergunta 
                indice={0}
                aberta={ativo===0}
                texto="Quem descobriu o Brasil?" 
                resposta="Mussum Ipsum, cacilds vidis litro abertis. Si num tem leite então bota uma pinga" 
                alternarVisibilidade={alternarVisibilidade}
            />
            <Pergunta 
                indice={1}
                aberta={ativo === 1}
                texto="O que é TypeScript?" 
                resposta="Mussum Ipsum, cacilds vidis litro abertis. Si num tem leite então bota uma pinga "
                alternarVisibilidade={alternarVisibilidade}
            />
            <Pergunta 
                indice={2}
                aberta={ativo === 2}
                texto="React é um framework?" 
                resposta="Mussum Ipsum, cacilds vidis litro abertis. Si num tem leite então bota uma pinga "
                alternarVisibilidade={alternarVisibilidade}
            /> 
            <Pergunta
                indice={3} 
                aberta={ativo === 3}
                texto="Quais as principais Funcionalidades do Next.JS" 
                resposta="Mussum Ipsum, cacilds vidis litro abertis. Si num tem leite então bota uma pinga "
                alternarVisibilidade={alternarVisibilidade}
            />
        </div>
    )
}