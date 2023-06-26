import { useBranchStore } from "../../store/branchStore";
import actionsIcon from "/images/actions.svg"

export default function TransactionBody() {
    const { transactionHistory } = useBranchStore()
    return (

        <tbody>
            {
                transactionHistory?.map((transaction, i) => {
                    const { createdAt } = transaction
                    const { status } = transaction
                    const date = new Date(createdAt);
                    const formattedDateTime = date.toLocaleString();

                    return (
                        <tr className="border-b border-[#EBEBEB] text-center" key={i}>
                            <td className="p-4 border-b border-[#EBEBEB]">{transaction.id}</td>
                            <td className="p-4 border-b border-[#EBEBEB]">{formattedDateTime}</td>
                            <td className="p-4 border-b border-[#EBEBEB]">{transaction.transactionRef}</td>
                            <td className="p-4 border-b border-[#EBEBEB]">{transaction.depositor}</td>
                            <td className="p-4 border-b border-[#EBEBEB]">{transaction.branchID ?? 'N/A'}</td>
                            <td className="p-4 border-b border-[#EBEBEB]">{transaction.branchName}</td>
                            <td className="p-4 border-b border-[#EBEBEB]">N1,200,200</td>
                            <td className="p-4 border-b border-[#EBEBEB]">{transaction!!.status ? 'Completed' : 'Pending'}</td>
                            <td className="p-4 border-b border-[#EBEBEB]">{transaction.narration}</td>
                            <td className="p-4 border-b border-[#EBEBEB] cursor-pointer">
                                <img src={actionsIcon} alt="" className='mx-auto' />
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
    )
}