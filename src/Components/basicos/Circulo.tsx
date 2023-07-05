interface CirculoProps {
    texto: string;
    quasePerfeiro?: boolean;
}

export default function Circulo(props: CirculoProps) {
    console.log(props)
    return (
        <div className={` flex justify-center items-center
        h-64 w-64 bg-cyan-500 rounded-full text-3xl 
        ${props.quasePerfeiro ? 'rounded-2xl' : 'rounded-full'}`
        }>
        {props.texto}
        </div>
    )
}