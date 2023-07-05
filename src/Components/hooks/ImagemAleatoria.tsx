import Image from "next/image"
import { useState } from "react"

export default function ImagemAleatoria(){
    
    const [pesquisa, alterarPesquisa] = useState<string>('abstract')
    const [tamanho, alterarTamanho] = useState<number>(300)
    //let pesquisa: string = ''
    const url = 'https://source.unsplash.com/featured/'
    
    function urlImagem(){
        return `${url}${tamanho}x${tamanho}?${pesquisa}`
    }

    function rederizaBotao(valor: string){
        return (
            <button className={`
                bg-blue-500 px-4 py-2 rounded-md
            `} onClick={()=>{
                alterarPesquisa(valor)
                console.log(urlImagem())
                console.log(valor)
            }}>
                {valor}
            </button>
        )
    }

    return (
        <div className="flex flex-col gap-3 border border-zinc-500 p-7 rounded-md">
            <Image src={urlImagem()} height={300} width={300} alt="Imagem"/>
            <div className="flex justify-between gap-5">
            {rederizaBotao('abstract')}
            {rederizaBotao('city')}
            {rederizaBotao('person')}
            </div>
            <div>
                <input type="text" />
            </div>
        </div>

    )


}