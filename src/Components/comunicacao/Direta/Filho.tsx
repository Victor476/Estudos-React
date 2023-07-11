interface FilhoProps {
    nome:string
    sobrenome:string
}

export default function Filho(props:FilhoProps) {
    return (
        <div className="
            flex flex-col justify-center items-center 
            bg-green-500 max-h-[200px]  border border-white 
            rounded-md p-5">
            <span className="font-black">Filho:</span>
            <div className="flex justify-center gap-2 text-xl">
                <span>{props.nome}</span>
                <span>{props.sobrenome}</span>
            </div>
        </div>
    )

}