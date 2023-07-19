import Pergunta from "./Pergunta";

export default function Faq(){
    return (
        <div className="flex flex-col gap-2 flex-wrap">
            <Pergunta texto="Mussum Ipsum, cacilds vidis litro abertis." resposta="Mussum Ipsum, cacilds vidis litro abertis. Si num tem leite então bota uma pinga "/>
            <Pergunta texto="Mussum Ipsum, cacilds vidis litro abertis." resposta="Mussum Ipsum, cacilds vidis litro abertis. Si num tem leite então bota uma pinga "/>
            <Pergunta texto="Mussum Ipsum, cacilds vidis litro abertis." resposta="Mussum Ipsum, cacilds vidis litro abertis. Si num tem leite então bota uma pinga "/> 
            <Pergunta texto="Mussum Ipsum, cacilds vidis litro abertis." resposta="Mussum Ipsum, cacilds vidis litro abertis. Si num tem leite então bota uma pinga "/>
        </div>
    )
}