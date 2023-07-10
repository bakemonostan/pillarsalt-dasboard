import { useBranchStore } from "../../store/branchStore";
import actionsIcon from "/images/actions.svg"

export default function BranchBody() {
    const { allBranches } = useBranchStore()
    return (

        <tbody>
            {
                allBranches?.map((transaction, i) => {
                    const { createdAt } = transaction
                    const date = new Date(createdAt);
                    const formattedDateTime = date.toLocaleDateString();
                    return (
                        <tr className="border-b border-[#EBEBEB] text-center" key={i}>
                            <td className="px-4 py-2 border-b border-[#EBEBEB]">{transaction.id}</td>
                            <td className="px-4 py-2 border-b border-[#EBEBEB]">{transaction.branchName.toUpperCase()}</td>
                            <td className="px-4 py-2 border-b border-[#EBEBEB]">MLS1782739</td>
                            <td className="px-4 py-2 border-b border-[#EBEBEB]">{transaction.branchCode}</td>
                            <td className="px-4 py-2 border-b border-[#EBEBEB]">Lagos NIgeria</td>
                            <td className="px-4 py-2 border-b border-[#EBEBEB]">{transaction.address}</td>
                            <td className="px-4 py-2 border-b border-[#EBEBEB]">{formattedDateTime}</td>
                            <td className="px-4 py-2 border-b border-[#EBEBEB]">{transaction.acquirerId}</td>
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