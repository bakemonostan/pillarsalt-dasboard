import profileIcon from '/images/icon-holder.svg'

type Props = {
    title: string
    children: React.ReactNode

}
export default function Cards({ title, children }: Props) {
    return (
        <div className="w-full max-w-[23rem] xl:w-full xl:max-w-[30rem] bg-white mx-auto xl:mx-0 shadow-lg rounded-md p-3">
            {/* head */}
            <div className='border-b border-b-[#F3F3F3]'>
                <p className='flex gap-2 items-center pb-2'>
                    <img src={profileIcon} alt="" className='w-4 h-4' />
                    <span className="text-sm text-grayOne font-semibold">{title}</span>
                </p>
            </div>
            {/* body */}
            {children}
        </div>
    )
}