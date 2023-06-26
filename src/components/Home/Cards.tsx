import up from '/images/green-arrow.svg'
import down from '/images/red-arrow.svg'

type Props = {
    id: string;
    title: string;
    amount: string;
    percentage: string;
    lastMonth: string;
    isRaising: boolean;

}
export default function Cards({ amount, id, isRaising, lastMonth, percentage, title }: Props) {
    return (
        // <div className="bg-white shadow-xl border rounded-lg lg:w-1/4 p-8 flex flex-col gap-2" key={id}>

        <div className="bg-white shadow-xl w-full min-w-[250px] p-4" key={id}>

            <h2 className="text-[#353535] text-sm font-medium">{title}</h2>
            <p className="text-2xl text-[#353535]">{amount}</p>
            <p className="text-xs flex items-center">
                {
                    isRaising ? <img src={up} alt="" /> : <img src={down} alt="" />
                }
                <span className={`${isRaising ? 'text-[#056839] ' : 'text-[#FF6161] '} font-bold mr-2`}>{percentage}</span>
                <span className="text-[#929292]">{lastMonth}</span>
            </p>


        </div>
    )
}




