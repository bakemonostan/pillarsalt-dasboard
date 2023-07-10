import { useState } from "react"
import { merchantApi } from "../../config/api"
import { useTicketStore } from "../../store/ticketStore"
import Button from "../Button/Button"
import Input from "../Form/Input"
import arrow from '/images/arrow-down.svg'

type Props = {}
export default function Form({ }: Props) {
    const { ticketDetails } = useTicketStore()
    const [desc, setDesc] = useState('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const res = await merchantApi.put('Ticket/ticket-respond', {
                id: ticketDetails.id,
                ticketTittle: ticketDetails.ticketTittle,
                description: desc,
                phoneNumber: ticketDetails.phoneNumber,
                email: ticketDetails.email,
                responseBy: ticketDetails.createdBy,
                respond: 'ehiz',
                ticketStatus: 1,
                ticketType: 1,
            })
        } catch (error) {
            console.log(error)
        }
        setDesc('')

    }

    return (
        <form className="space-y-4 border bg-[#FAFAFA] rounded-md  p-7 px-9"
            onSubmit={handleSubmit}
        >
            <div>
                <h2>Respond to Tickect</h2>
            </div>


            <div className="flex flex-wrap gap-3 justify-between items-baseline">
                <div>
                    <Input isdisabled={true} type="text"
                        placeholder={ticketDetails.email}
                        name="" classes='w-full'
                        label="Customer Mail"
                        value=""
                        onchange={() => { }}

                    />
                </div>


                <div className="mt-auto">
                    <div>
                        <label htmlFor="ticketType" className="block text-sm font-medium leading-6 text-gray-900">
                            Request Ticket Type
                        </label>
                        <select
                            id="ticketType"
                            name="ticketType"
                            className="mt-2 block w-full rounded-md border-0 py-2.5 px-5 text-gray-400 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-gray-400 sm:text-sm sm:leading-6"
                            defaultValue="Failed Transfer"
                        >
                            <option>Failed Transfer</option>
                            <option>Unathourized Transfer</option>
                            <option>Others</option>
                        </select>
                    </div>
                </div>

                <div className="mt-auto">
                    <div>
                        <label htmlFor="status" className="block text-sm font-medium leading-6 text-gray-900">
                            Status
                        </label>
                        <select
                            id="status"
                            name="status"
                            className="mt-2 block w-52 rounded-md border-0 py-2.5 px-5 text-gray-400 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-gray-400 sm:text-sm sm:leading-6"
                            defaultValue="Ongoing"
                        >
                            <option >
                                Ongoing
                            </option>
                            <option>Completed</option>
                            <option>New</option>
                        </select>
                    </div>
                </div>


            </div>


            <div className="">
                <textarea
                    placeholder="Enter your reply here"
                    name={desc}
                    value={desc}
                    className="w-full resize-none border p-3 rounded-md h-40"
                    onChange={(e) => setDesc(e.target.value)}
                />
            </div>

            <div className=" ml-auto xl:w-1/5">
                <Button
                    type="submit"
                    label="Submit Response"
                    variant="primary"
                />
            </div>
        </form>
    )
}