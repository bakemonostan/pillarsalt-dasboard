import { useWalletStore } from "../../store/walletStore";
import actionsIcon from "/images/actions.svg"

export default function WalletBody() {
    const { transactionHistory } = useWalletStore()
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
                            <td className="px-4 py-2 border-b border-[#EBEBEB]">{transaction.id}</td>
                            <td className="px-4 py-2 border-b border-[#EBEBEB]">{formattedDateTime}</td>
                            <td className="px-4 py-2 border-b border-[#EBEBEB]">{transaction.transactionReference}</td>
                            <td className="px-4 py-2 border-b border-[#EBEBEB]">N1,200,200</td>
                            <td className="px-4 py-2 border-b border-[#EBEBEB]">{transaction!!.status ? 'Completed' : 'Pending'}</td>
                            <td className="px-4 py-2 border-b border-[#EBEBEB]">{transaction.description}</td>
                            <td className="px-4 py-2 border-b border-[#EBEBEB] cursor-pointer">
                                <img src={actionsIcon} alt="" className='mx-auto' />
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
    )
}