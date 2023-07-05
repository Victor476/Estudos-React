import Caixa from "@/Components/basicos/Caixa";

export default function PaginaCaixas() {
    return (
        <div className={`
            flex justify-center items-center align-middle gap-7 p-7
        `}>
            <Caixa>{(Math.random()*100).toFixed(2)}</Caixa>
            <Caixa>{(Math.random()*100).toFixed(2)}</Caixa>
            <Caixa>{(Math.random()*100).toFixed(2)}</Caixa>
        </div>
    )
}