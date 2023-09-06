import downarrow from '/images/arrow-down.svg'

import pie from '/images/pie.svg'
import bar from '/images/bar.svg'
import { useDashboardStore } from '../../store/dashboardStore'

type Props = {}
export default function ChartSection({ }: Props) {
    const {
        averageTransactionValue, transactionVolume, transactionsProcessed
    } = useDashboardStore()


    return (
        <>
            <div className="flex flex-col w-full gap-2 p-3 space-y-5 bg-white border rounded-lg shadow-xl xl:space-y-0 xl:w-2/3 xl:p-8">
                {/* title */}
                <div className="flex items-center justify-between ">
                    <h2 className="font-bold xl:text-xl">
                        Revenue
                    </h2>
                    <div className="cursor-pointer">
                        <p className="flex items-center justify-between gap-5 p-2 px-3 border rounded-dm xl:w-32">
                            <span className='text-sm'> By Pos</span>
                            <span><img src={downarrow} alt="" /></span>
                        </p>
                    </div>
                </div>

                <div className=" xl:flex">

                    <div className="flex justify-between xl:justify-evenly xl:flex-col xl:w-1/3 xl:space-y-5">
                        <div className="space-y-3">
                            <h2 className="font-bold text-[#353535] xl:text-xl">₦2,750,000</h2>
                            <p className="text-[#929292] text-sm xl:text-lg">Total Revenue </p>
                        </div>
                        <div className="space-y-3">
                            <h2 className="text-[#353535] xl:text-xl">
                                {averageTransactionValue}
                            </h2>
                            <p className="text-[#929292] text-sm xl:text-lg">Avg./Transaction</p>
                        </div>
                    </div>

                    <div className="xl:w-2/3">
                        <img src={
                            bar
                        } alt="bar chart" className="w-full" />
                    </div>
                </div>
            </div>

            <div className="w-full p-3 bg-white rounded-lg shadow-xl xl:w-1/3 xl:p-8">
                <div>
                    <h2 className="font-bold xl:text-xl">
                        Transactions
                    </h2>
                </div>

                <div className='flex flex-col gap-5 xl:flex-row xl:pt-8'>
                    <div className='flex flex-wrap justify-between gap-5 xl:w-1/2'>
                        <div>
                            <h3 className='text-[#353535] text-lg '>{transactionsProcessed}</h3>
                            <p className='text-xs text-[#929292] xl:text-lg'>Transactions Processed</p>
                        </div>
                        <div>
                            <h3 className='text-[#353535] text-lg xl:text-2xl'>{transactionVolume}</h3>
                            <p className='text-xs text-[#929292] xl:text-lg'>Transaction Volume</p>
                        </div>
                        <div>
                            <h3 className='text-[#353535] text-lg xl:text-2xl' >{averageTransactionValue}</h3>
                            <p className='text-xs text-[#929292] xl:text-lg'> Average Transaction Value</p>
                        </div>
                    </div>

                    {/* pie chart */}
                    <div className='xl:w-1/2'>
                        <div className=''>
                            <img src={pie} alt="pie chart" className="mx-auto xl:w-full xl:mx-0" />
                        </div>

                        <div className='flex justify-center gap-10 pt-3 xl:gap-5 xl:pt-5'>
                            <span className='flex items-center gap-1.5'>
                                <p className='bg-greenMain w-2.5 h-2.5 rounded-sm'></p>
                                <p className='text-xs'>Wallet (55%)</p>
                            </span>
                            <span className='flex items-center gap-1.5'>
                                <p className='bg-[#D6DF24] w-2.5 h-2.5 rounded-sm'></p>
                                <p className='text-xs'>Deposit (45%)</p>
                            </span>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}