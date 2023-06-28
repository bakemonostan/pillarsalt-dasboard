import { useEffect } from "react"
import { useBranchStore } from "../../store/branchStore"

type Props = {}
export default function TransactionCard({ }: Props) {
    const { } = useBranchStore()

    return (
        <div className="flex flex-col w-full max-w-[23rem] xl:w-full xl:max-w-[30rem] bg-white mx-auto xl:mx-0 shadow-lg rounded-lg p-4 space-y-3 xl:hidden">
            {/* Card head */}
            <div className='flex justify-between border-b border-b-[#F3F3F3]'>
                <p className='flex gap-2 pb-2'>
                    <span className="text-xs text-opacity-40 text-black font-semibold">S/N</span>
                    <span className="text-xs text-opacity-40 text-black font-semibold">1</span>
                </p>
                <p className='flex gap-2 pb-2'>
                    <span className="text-xs text-opacity-40 text-black font-semibold">Date:</span>
                    <span className="text-xs text-opacity-40 text-black font-semibold">12/03/2020</span>
                </p>
                <p className='flex gap-2 pb-2'>
                    <span className="text-xs text-opacity-40 text-black font-semibold">Status:</span>
                    <span className="text-xs text-white font-semibold bg-[#F08C00] rounded-lg px-1">Pending</span>
                </p>
            </div>

            {/* Card body */}
            <div className='flex justify-between  border-b border-b-[#F3F3F3]'>
                <p className='flex flex-col gap-2 pb-2'>
                    <span className="text-xs text-opacity-40 text-black font-semibold">Amount</span>
                    <span className="text-sm text-greenMain font-bold">₦1,200,000</span>
                </p>
                <p className='flex flex-col gap-2 pb-2'>
                    <span className="text-xs text-opacity-40 text-black font-semibold">Transaction Ref.</span>
                    <span className="text-sm text-greenMain font-bold">ML51782739</span>
                </p>
                <p className='flex flex-col gap-2 pb-2'>
                    <span className="text-xs text-opacity-40 text-black font-semibold">Depositor</span>
                    <span className="text-sm text-greenMain font-bold">James David</span>
                </p>
            </div>


            <div className='flex justify-between'>
                <p className='flex flex-col gap-2 pb-2'>
                    <span className="text-xs text-opacity-40 text-black font-semibold">Narration</span>
                    <span className="text-xs text-black font-semibold">Credit</span>
                </p>
                <p className='flex flex-col gap-2 pb-2'>
                    <span className="text-xs text-opacity-40 text-black font-semibold">Branch Name </span>
                    <span className="text-xs text-black font-semibold">PillarSalt LTD</span>
                </p>
                <p className='flex flex-col gap-2 pb-2'>
                    <span className="text-xs text-opacity-40 text-black font-semibold">Branch ID</span>
                    <span className="text-xs text-black font-semibold">Ikeja </span>
                </p>
                <p className='flex flex-col gap-2 pb-2'>
                    <span className="text-xs text-black text-opacity-40 font-semibold">Actions</span>
                    <span className="text-xs text-black font-semibold">|</span>
                </p>
            </div>



        </div>
    )
}