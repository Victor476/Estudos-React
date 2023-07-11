import Pai from "./Pai";

interface AvoProps {
    nome:string
    sobrenome:string
}

export default function Avo(props: AvoProps) {
    return (
        <div  className={`
            flex flex-col flex-wrap justify-center items-center gap-5 p-5 m-5 rounded-md
            bg-purple-500 text-white max-h-[500px] border border-white`}>
            <div className="flex justify-center gap-2 text-2xl">
                <span className="font-black">Avô:</span>
                <span>{props.nome}</span>
                <span>{props.sobrenome}</span>
            </div>
            <div className="flex gap-5">
                <Pai nome="Sandra" sobrenome={props.sobrenome}/>
                <Pai nome="Vera" sobrenome={props.sobrenome}/>
                <Pai nome="Lucia" sobrenome={props.sobrenome}/>
            </div>
        </div>
    )

}