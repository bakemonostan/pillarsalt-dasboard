type Props = {}
export default function BranchHead({ }: Props) {
    return (
        <thead>
            <tr className="text-center bg-[#ECF2BA] w-full py-3">
                <th className="px-4 py-2">S/N</th>
                <th className="px-4 py-2">Branch Name</th>
                <th className="px-4 py-2"> BranchID</th>
                <th className="px-4 py-2">Branch Code</th>
                <th className="px-4 py-2">Branch Location</th>
                <th className="px-4 py-2">Branch Address</th>
                <th className="px-4 py-2">Date Created</th>
                <th className="px-4 py-2">Requested by</th>
                <th className="px-4 py-2 text-center">Actions</th>
            </tr>
        </thead>
    )
}