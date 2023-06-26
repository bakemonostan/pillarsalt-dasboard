import actionsIcon from '/images/actions.svg'
import { transactionHistory } from '../../utils/tableData'
import { useBranchStore } from '../../store/branchStore'

type Props = {

}
export default function Table({ }: Props) {
    const { allBranches } = useBranchStore()
    return (
        <div className="overflow-x-auto hidden xl:block">
            <table className="table-auto border-collapse w-full">
                <thead>
                    <tr className="text-left bg-[#ECF2BA] w-full py-3">
                        <th className="px-4 py-2">S/N</th>
                        <th className="px-4 py-2">Date</th>
                        <th className="px-4 py-2">Transaction Reference</th>
                        <th className="px-4 py-2">Amount</th>
                        <th className="px-4 py-2">Status</th>
                        <th className="px-4 py-2">Narration</th>
                        <th className="px-4 py-2 text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {allBranches?.map((transaction, i) =>
                    (
                        <tr className="border-b border-[#EBEBEB]" key={i}>
                            <td className="px-4 py-2 border-b border-[#EBEBEB]">{transaction.id}</td>
                            <td className="px-4 py-2 border-b border-[#EBEBEB]">12/03/2020</td>
                            <td className="px-4 py-2 border-b border-[#EBEBEB]">MLS1782739</td>
                            <td className="px-4 py-2 border-b border-[#EBEBEB]">₦1,200,000</td>
                            <td className="px-4 py-2 border-b border-[#EBEBEB]">Pending</td>
                            <td className="px-4 py-2 border-b border-[#EBEBEB]">Credit</td>
                            <td className="px-4 py-2 border-b border-[#EBEBEB] cursor-pointer">
                                <img src={actionsIcon} alt="" className='mx-auto' />
                            </td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </div>
    )
}



