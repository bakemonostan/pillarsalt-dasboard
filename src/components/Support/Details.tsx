import { Link, useParams } from "react-router-dom"
import Button from "../Button/Button"
import Form from "./Form"
import { useEffect } from "react"
import { useTicketStore } from "../../store/ticketStore"

type Props = {}
export default function ({ }: Props) {
    const { id } = useParams<{ id: string | undefined }>()
    const { getTicketById, ticketDetails } = useTicketStore()


    useEffect(() => {
        getTicketById(id)
    }, [])

    const formattedTime = new Date(ticketDetails.createdAt).toLocaleTimeString()
    return (
        <>
            <div className="flex justify-between pb-8">
                <h1>Tickets</h1>
                <Link to='/support/new-ticket' >
                    <Button label="New Ticket" type="button" variant="primary" />
                </Link>
            </div>
            <div className="space-y-4 border bg-white rounded-md  p-7 px-9">

                <div className="flex justify-between">
                    <div className="flex gap-2 items-center">
                        <div className="bg-[#F8C13499] w-3 h-3 rounded-full"></div>
                        <p className="text-sm w-36 truncate">Ticket# {ticketDetails.id}</p>
                    </div>

                    <div>
                        <p className="text-sm text-grayTwo">Posted at {formattedTime}</p>
                    </div>
                </div>
                <hr />

                <div>
                    <h2 className="text-headers font-bold text-lg">{ticketDetails.description}</h2>
                    <p className="text-sm text-grayTwo">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gsdi
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit ametdflsald, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
                <Form />
            </div>
        </>
    )
}