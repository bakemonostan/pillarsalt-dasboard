import { useWalletStore } from "../../store/walletStore"

export default function WalletCard() {
    const { transactionHistory } = useWalletStore()

    return (
        <>
            {
                transactionHistory?.map((transaction, i) => {
                    const { createdAt } = transaction
                    const { status } = transaction
                    const date = new Date(createdAt);
                    const formattedDateTime = date.toLocaleDateString();
                    return (
                        <div className="flex flex-col w-full max-w-[23rem] xl:w-full xl:max-w-[30rem] bg-white mx-auto xl:mx-0 shadow-lg rounded-lg p-4 space-y-3 xl:hidden mb-2">
                            {/* Card head */}
                            <div key={transaction.id} className='flex justify-between border-b items-center border-b-[#F3F3F3]'>
                                <p className='flex gap-2 pb-2'>
                                    <span className="text-xs text-opacity-40 text-black font-semibold">S/N</span>
                                    <span className="text-xs text-opacity-40 text-black font-semibold">{transaction.id}</span>
                                </p>
                                <p className='flex gap-2 pb-2'>
                                    <span className="text-xs text-opacity-40 text-black font-semibold">Date:</span>
                                    <span className="text-xs text-opacity-40 text-black font-semibold">{formattedDateTime}</span>
                                </p>
                                <p className='flex gap-2 pb-2'>
                                    {!!status ? <span className="bg-greenMain text-white p-1  rounded-2xl">Completed</span> : <span className="bg-orange-400 text-white py-0.5 px-2 rounded-2xl">Pending</span>}
                                </p>
                            </div>

                            {/* Card body */}
                            <div className='flex justify-between  border-b border-b-[#F3F3F3]'>
                                <p className='flex flex-col gap-2 pb-2'>
                                    <span className="text-xs text-opacity-40 text-black font-semibold">Narration</span>
                                    <span className="text-xs text-black font-semibold">{transaction.description}</span>
                                </p>
                                <p className='flex flex-col gap-2 pb-2'>
                                    <span className="text-xs text-opacity-40 text-black font-semibold">Transaction Ref.</span>
                                    <span className="text-sm text-greenMain font-bold">{transaction.transactionReference}</span>
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
