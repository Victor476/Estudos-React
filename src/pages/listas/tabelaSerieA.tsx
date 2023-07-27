import TabelaSerieA from "@/Components/listas/TabelaSerieA";
import { IconBallFootball } from "@tabler/icons-react";

export default function PaginaListaBasica() {
    const times = [	
    "Botafogo",
    "Grêmio",
    "Flamengo",
    "Palmeiras",
    "Athletico-PR",
    "São Paulo",
    "Fluminense",
    "Bragantino",
    "Fortaleza",
    "Internacional"
    ];

    return (
        <div className="
            flex justify-center items-center h-screen  flex-col"
        >
            <h1 className="flex items-center gap-2 text-5xl font-black">
                <IconBallFootball size={70} stroke={1} className="text-green-400"/>
                Tabela Séria A
            </h1>
            <TabelaSerieA times={times}/>
        </div>
    )
}