import icon from '/images/icon-holder.svg'


type Props = {}
export default function
    ({ }: Props) {
    return (
        <div className="space-y-4 border bg-white rounded-md  p-5 lg:p-7 lg:px-9">

            <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                    <div className="bg-[#F8C13499] w-3 h-3 rounded-full"></div>
                    <p className="text-sm">Ticket# 2023-CS123</p>
                </div>

                <div>
                    <p className="text-sm text-grayTwo">Posted at 12:45 AM</p>
                </div>
            </div>

            <div>
                <h2 className="text-headers font-bold text-lg">How to deposit money to my portal?</h2>
                <p className="text-sm text-grayTwo">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <hr />
            <div className="flex justify-between">
                <p className="flex gap-2 items-center text-grayTwo ">
                    <span className="">
                        <img src={icon} alt="" className="w-5 h-5" />
                    </span > Rebecca Agbola</p>
                <p className="text-greenMain underline">Open Ticket</p>
            </div>
        </div>
    )
}