import If from "./If";
import { IconChevronDown, IconChevronUp} from "@tabler/icons-react";

interface PerguntaProps {
    indice: number
    texto: string;
    resposta: string;
    aberta: boolean;
    alternarVisibilidade: (indice: number) => void;
}

export default function Pergunta(props: PerguntaProps){
    return (
        <div className={` flex flex-col flex-wrap 
            border border-zinc-600 rounded-md overflow-hidden
        `}>
            <div className=" flex justify-between items-center
            bg-zinc-900 p-5 cursor-pointer"
            onClick={() => props.alternarVisibilidade(props.indice)}>
                <span>{props.texto}</span>
                {props.aberta ? <IconChevronUp/> : <IconChevronDown/>}
                {/* {<IfElse teste={aberta}>
                    <IconChevronUp/>
                    <IconChevronDown/>
                </IfElse>} */}

            </div>
            <If test={props.aberta}>
                <div className="p-5">
                    {props.resposta}
                </div>
            </If>
            
        </div>
    )
}