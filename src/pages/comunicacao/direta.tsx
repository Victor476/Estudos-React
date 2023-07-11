import Avo from "@/Components/comunicacao/Direta/Avo";

export default function PaginaDireta() {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-5xl mb-10">Comunicação Direta</h1>
            <Avo nome="Angelo" sobrenome="de Souza Santos"/>
        </div>
    )

}