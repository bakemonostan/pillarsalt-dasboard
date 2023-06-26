import meter from '/images/meter.svg'

type Props = {}
export default function SystemHealth({ }: Props) {
    return (
        <>
            <div>
                <div className="bg-white shadow-xl rounded-lg p-5 py-8">
                    <div>
                        <h2 className="font-bold pb-4 text-lg xl:text-xl text-[#353535]">System Health</h2>
                    </div>
                    <div className=" flex flex-col justify-center mx-auto  text-center space-y-3">
                        <div>
                            <h2 className="text-lg xl:text-2xl ">20% Below Limit</h2>
                        </div>

                        <div className='w-[12rem] h-[12rem] mx-auto'>
                            <img src={meter} alt="" className="w-full" />
                        </div>

                        <div className="flex justify-evenly px-5 xl:w-[25rem] xl:mx-auto">
                            <span className="flex gap-1 items-center">
                                <p className="bg-greenMain w-3 h-3 rounded-full">
                                </p>
                                <p className="text-xs">Safe zone</p>
                            </span>
                            <span className="flex gap-1 items-center">
                                <p className="bg-[#FAA017] w-3 h-3 rounded-full">
                                </p>
                                <p className="text-xs">Caution</p>
                            </span>
                            <span className="flex gap-1 items-center">
                                <p className="bg-[#E5000E] w-3 h-3 rounded-full">
                                </p>
                                <p className="text-xs">Danger</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}