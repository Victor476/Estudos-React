export default function Caixa(props: any) {
    return (
        <div className={`
            bg-purple-400 m-2 rounded-md p-2 
            w-[300px] h-[300px] flex justify-center items-center text-xl font-black`}>
            {props.children}
        </div>
    )
}