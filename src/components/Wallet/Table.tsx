import actionsIcon from '/images/actions.svg'
import { TransactionHistory } from '../../types/wallet'

type Props = {

}
export default function Table({ id, createdAt, transactionReference, status }: TransactionHistory) {

    const formattedDateTime = new Date(createdAt).toLocaleDateString();

    return (
        <tbody className='text-center'>
            <tr className="border-b border-[#EBEBEB]" key={''}>
                <td className="p-4 border-b border-[#EBEBEB]">{id}</td>
                <td className="p-4 border-b border-[#EBEBEB]">{formattedDateTime}</td>
                <td className="p-4 border-b border-[#EBEBEB]">{transactionReference}</td>
                <td className="p-4 border-b border-[#EBEBEB]">₦1,200,000</td>
                <td className="p-4 border-b border-[#EBEBEB]">{!!status ?
                    <span className='bg-green-500 text-white font-semibold px-2.5 py-1 rounded-xl'>
                        Completed
                    </span>
                    :
                    <span className='bg-orange-500 text-white font-semibold px-2.5 py-1 rounded-xl'>
                        Pending
                    </span>
                }</td>
                <td className="p-4 border-b border-[#EBEBEB]">Credit</td>
                <td className="p-4 border-b border-[#EBEBEB] cursor-pointer">
                    <img src={actionsIcon} alt="" className='mx-auto' />
                </td>
            </tr>
        </tbody>

    )
}



