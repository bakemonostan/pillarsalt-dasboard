import { Link } from "react-router-dom"
import Button from "../Button/Button"
import Input from "../Form/Input"
import Card from "./Card"
import arrow from '/images/arrow-down.svg'

type Props = {}
export default function Tickets({ }: Props) {
    const cards = [1, 1, 1]
    return (
        <>
            <section className="pb-5">
                <div className="flex flex-wrap justify-between pt-10">
                    <div><h1 className="text-headers font-bold text-xl">Tickets</h1></div>
                    <Link to='/new-ticket'>
                        <Button label="New Ticket" type="button" variant="primary"
                        />
                    </Link>
                </div>
            </section>

            <section className="space-y-4 border bg-white rounded-md px-2 py-10 lg:px-8">

                <div className=" flex flex-wrap  justify-between">
                    <div>
                        <Input classes="w-[17rem]" name="Search" onchange={() => { }} placeholder="Search tickets" type="search" value="" required={false} />
                    </div>

                    <div className="flex gap-10  w-full pt-3 md:w-1/2 md:pt-0">
                        <div className="border p-2.5 px-2 rounded-md w-full lg:w-[17rem] ">
                            <p className="flex items-center justify-between">
                                <span>
                                    Select Priority
                                </span>
                                <span>
                                    <img src={arrow} alt="" />
                                </span>
                            </p>
                        </div>
                        <div className="border p-2.5 px-2 rounded-md w-full lg:w-[17rem]">
                            <p className="flex items-center justify-between">
                                <span>
                                    This Week
                                </span>
                                <span>
                                    <img src={arrow} alt="" />
                                </span>
                            </p>
                        </div>
                    </div>

                </div>

                {/* filteroptions */}
                <div className="flex flex-wrap gap-3  xl:gap-16">
                    <p>All Tickets</p>
                    <p>New Tickets</p>
                    <p>Outgoing</p>
                    <p>Resolved</p>
                </div>

            </section>
            {/* cards */}
            <section className="pt-7 space-y-7">
                {
                    cards.map((card, index) => (
                        <Card key={index} />
                    ))
                }
            </section>
        </>
    )
}