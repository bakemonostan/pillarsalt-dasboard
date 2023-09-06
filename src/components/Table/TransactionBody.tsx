import { BranchTransactionHistory } from "../../types/branch";
import { formatCurrency } from "../../utils/formatCurrency";
import actionsIcon from "/images/actions.svg"

export default function TransactionBody({ id, createdAt, status, transactionRef, depositor, branchID, branchName, narration, amount }: BranchTransactionHistory) {

    const date = new Date(createdAt);
    const formattedDateTime = date.toLocaleDateString();
    return (
        <tbody>
            <tr className="border-b border-[#EBEBEB] text-center" key={id}>
                <td className="p-4 border-b border-[#EBEBEB]">{id}</td>
                <td className="p-4 border-b border-[#EBEBEB]">{formattedDateTime}</td>
                <td className="p-4 border-b border-[#EBEBEB]">{transactionRef}</td>
                <td className="p-4 border-b border-[#EBEBEB]">{depositor}</td>
                <td className="p-4 border-b border-[#EBEBEB]">{branchID ?? 'N/A'}</td>
                <td className="p-4 border-b border-[#EBEBEB]">{branchName}</td>
                <td className="p-4 border-b border-[#EBEBEB]">{formatCurrency(amount)}</td>
                <td className="p-4 border-b border-[#EBEBEB]">{!!status ?
                    <span className='bg-green-500 text-white font-semibold px-2.5 py-1 rounded-xl'>
                        Completed
                    </span>
                    :
                    <span className='bg-orange-500 text-white font-semibold px-2.5 py-1 rounded-xl'>
                        Pending
                    </span>
                }</td>
                <td className="p-4 border-b border-[#EBEBEB]">{narration}</td>
                <td className="p-4 border-b border-[#EBEBEB] cursor-pointer">
                    <img src={actionsIcon} alt="" className='mx-auto' />
                </td>
            </tr>
        </tbody>
    )
}