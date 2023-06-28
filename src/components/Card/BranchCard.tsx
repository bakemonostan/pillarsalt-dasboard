import { useBranchStore } from "../../store/branchStore"
import { capitalizeFirst } from "../../utils/formatWord";

type Props = {}
export default function BranchCard({ }: Props) {
    const { allBranches } = useBranchStore();
    return (

        <>
            {
                allBranches?.map((branch) => {
                    const { createdAt } = branch
                    const date = new Date(createdAt);
                    const formattedDateTime = date.toLocaleDateString();
                    return (
                        <div key={branch.id} className="flex flex-col w-full max-w-[23rem] xl:w-full xl:max-w-[30rem] bg-white mx-auto xl:mx-0 shadow-lg rounded-lg p-4 space-y-3 xl:hidden mb-2">
                            {/* Card head */}
                            <div className='flex justify-between border-b items-center border-b-[#F3F3F3]'>
                                <p className='flex gap-2 pb-2'>
                                    <span className="text-xs text-opacity-40 text-black font-semibold">S/N</span>
                                    <span className="text-xs text-opacity-40 text-black font-semibold">{branch.id}</span>
                                </p>
                                <p className='flex gap-2 pb-2'>
                                    <span className="text-xs text-opacity-40 text-black font-semibold">ID:</span>
                                    <span className="text-xs text-opacity-40 text-black font-semibold">{branch.acquirerId}</span>
                                </p>
                                <p className='flex gap-2 pb-2'>
                                    <span>Code:</span>
                                    <span> {branch.branchCode}</span>
                                </p>
                            </div>

                            {/* Card body */}
                            <div className='flex justify-between font-bold text-greenMain items-center border-b border-b-[#F3F3F3]'>
                                <p className='flex flex-col gap-2 pb-2'>
                                    <span className="text-xs text-opacity-40 text-black ">Branch ID:</span>
                                    <span className="text-xs text-greenMain ">{branch.acquirerId}</span>
                                </p>
                                <p className='flex flex-col gap-2 pb-2'>
                                    <span className="text-xs text-opacity-40 text-black font-semibold">Location:</span>
                                    <span className="text-sm  ">{branch.address.charAt(0).toUpperCase() + branch.address.slice(1)}</span>
                                </p>

                                <p className='flex flex-col gap-2 pb-2'>
                                    <span className="text-xs text-black text-opacity-40 font-semibold">Requested by</span>
                                    <span className="text-xs  ">James David</span>
                                </p>


                            </div>
                            <div className='flex justify-between  items-center border-b border-b-[#F3F3F3]'>
                                <p className='flex flex-col gap-2 pb-2'>
                                    <span className="text-xs text-opacity-40 text-black font-semibold"> Address:</span>
                                    <span className="text-xs text-greenMain font-semibold">{capitalizeFirst(branch.address)}</span>
                                </p>
                                <p className='flex flex-col gap-2 pb-2'>
                                    <span className="text-xs text-opacity-40 text-black font-semibold">Date Created:</span>
                                    <span className="text-sm text-greenMain font-bold">{capitalizeFirst(formattedDateTime)}</span>
                                </p>

                                <p className='flex flex-col gap-2 pb-2'>
                                    <span className="text-xs text-black text-opacity-40 font-semibold">Actions</span>
                                    <span className="text-xs text-black font-semibold">|</span>
                                </p>


                            </div>


                        </div>
                    )
                })
            }
        </>
    )
}