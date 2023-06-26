type Props = {}
export default function TransactionsHead({ }: Props) {
    return (
        <thead>
            <tr className="text-center bg-[#ECF2BA] w-full py-3">
                <th className="px-4 py-2">S/N</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Transaction Reference</th>
                <th className="px-4 py-2">Depositor</th>
                <th className="px-4 py-2">BranchID</th>
                <th className="px-4 py-2">BranchName</th>
                <th className="px-4 py-2">Amount</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Narration</th>
                <th className="px-4 py-2 text-center">Actions</th>
            </tr>
        </thead>
    )
}