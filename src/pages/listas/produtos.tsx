
import produtos from "@/constants/produtos";
import ListaProdutos from "../../Components/listas/ListaProdutos";
import ItemCarrinho from "@/model/ItemCarrinho";
import { useState } from "react";
import Produto from "@/model/Produto";
import Carrinho from "@/Components/listas/Carrinho";

export default function PaginaProdutos() {
    
    const [itens, setItens] = useState<ItemCarrinho[]>([])
    
    function adicionarProduto(produto: Produto){
        const itemAtual = itens.find((item) => item.produto.id === produto.id)?? {quantidade: 0, produto};
        const novoItem = {...itemAtual, produto, quantidade: itemAtual.quantidade + 1};
        const outrosItens = itens.filter((item) => item.produto.id !== produto.id);
        setItens([...outrosItens, novoItem]);
    }

    return (
        <div className={`
            flex m-3 justify-center gap-10 items-center flex-col
        `}>
            <Carrinho itens={itens}/>
            <ListaProdutos produtos={produtos} comprar={adicionarProduto}/>
        </div>
    )
}