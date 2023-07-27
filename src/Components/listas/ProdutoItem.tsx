import Produto from "@/model/Produto";
import Moeda from "@/utils/Moeda";
import { IconShoppingCart } from "@tabler/icons-react";
import Image from "next/image";

interface ProdutoItemProps{
    produto: Produto
    comprar: (produto: Produto) => void;
}

export default function ProdutoItem(props: ProdutoItemProps){
    const { produto } = props;
    return (
        <div className={`
            flex flex-col rounded-md border border-blue-400 p-1
        `}>
            <Image src={produto.imagem} 
            width={300} 
            height={200} 
            alt="imagem do produto"/>
            <div className="flex flex-col p-3 gap-3">
                <div className="flex justify-between items-center">
                    <div className="text-2xl font-black">{produto.nome}</div>
                    <div className="text-xl text-green-500">{Moeda.formatarMoeda(produto.preco)}</div>
                </div>
                <div>
                    <div className="text-gray-500">{produto.descricao}</div>
                </div>
                <div>
                    <button className="flex justify-center p-2 gap-2 w-full bg-blue-400 hover:bg-blue-600 text-white 
                    rounded-md transition duration-500 ease-in-out 
                    transform hover:-translate-y-1 hover:scale-110"
                     onClick={() => props.comprar(produto)}>
                        <IconShoppingCart /> Comprar
                    </button>
                </div>
            </div>
        </div>
    )
}