import Circulo from "@/Components/basicos/Circulo";

export default function PaginaCirculo() {
    return (
        <div className="flex justify-around items-center bg-green-500 h-screen">
            <Circulo texto="Circ #1" />
            <Circulo texto="Circ #2" />
            <Circulo texto="Circ #3" quasePerfeiro/>
            <Circulo texto="Circ #4" />
        </div>
    )
}