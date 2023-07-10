import actionsIcon from "/images/actions.svg"
import { BranchReportProps } from "../../types/branch";


type Props = {}
export default function BranchReportTable({ createdAt, id, branchName, branchCode, address, acquirerId }: BranchReportProps) {
    const date = new Date(createdAt);
    const formattedDateTime = date.toLocaleDateString();
    return (
        <tbody>
            <tr className="border-b border-[#EBEBEB] text-center" >
                <td className="px-4 py-2 border-b border-[#EBEBEB]">{id}</td>
                <td className="px-4 py-2 border-b border-[#EBEBEB]">{branchName.toUpperCase()}</td>
                <td className="px-4 py-2 border-b border-[#EBEBEB]">MLS1782739</td>
                <td className="px-4 py-2 border-b border-[#EBEBEB]">{branchCode}</td>
                <td className="px-4 py-2 border-b border-[#EBEBEB]">Lagos NIgeria</td>
                <td className="px-4 py-2 border-b border-[#EBEBEB]">{address}</td>
                <td className="px-4 py-2 border-b border-[#EBEBEB]">{formattedDateTime}</td>
                <td className="px-4 py-2 border-b border-[#EBEBEB]">{acquirerId}</td>
                <td className="px-4 py-2 border-b border-[#EBEBEB] cursor-pointer">
                    <img src={actionsIcon} alt="" className='mx-auto' />
                </td>
            </tr>
        </tbody>
    )
}