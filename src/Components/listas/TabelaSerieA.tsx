interface TabelaSeriAProps {
    times: string[];
}

export default function TabelaSerieA(props: TabelaSeriAProps) {
    
    // transformar uma string -> li
    // const itens: any[] = [];
    // for (let i = 0; i < props.times.length; i++) {
    //     itens.push(
    //         <li key={props.times[i]} className="text-xl list-decimal">
    //             {props.times[i]}
    //         </li>
    //     );
    // }

    const itens2 = props.times.map((times,i) => {
        return (
            <li key={times} className={`text-3xl list-decimal ${i % 2 === 0 ? 'text-green-300' : 'text-green-500'}`}>
                {times}
            </li>
        )
    })

    return (
        <ol>
            {itens2}
        </ol>
    )

}