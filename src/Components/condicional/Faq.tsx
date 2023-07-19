import Pergunta from "./Pergunta";

export default function Faq(){
    return (
        <div className="flex flex-col gap-2 flex-wrap w-[90%] md:w-3/5">
            <Pergunta texto="Quem descobriu o Brasil?" resposta="Mussum Ipsum, cacilds vidis litro abertis. Si num tem leite então bota uma pinga "/>
            <Pergunta texto="O que é TypeScript?" resposta="Mussum Ipsum, cacilds vidis litro abertis. Si num tem leite então bota uma pinga "/>
            <Pergunta texto="React é um framework?" resposta="Mussum Ipsum, cacilds vidis litro abertis. Si num tem leite então bota uma pinga "/> 
            <Pergunta texto="Quais as principais Funcionalidades do Next.JS" resposta="Mussum Ipsum, cacilds vidis litro abertis. Si num tem leite então bota uma pinga "/>
        </div>
    )
}