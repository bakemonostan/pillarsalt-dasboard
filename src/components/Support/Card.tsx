
import { Link } from 'react-router-dom'
import icon from '/images/icon-holder.svg'
import React from 'react'
import { useTicketStore } from '../../store/ticketStore'
import { TickekCardProps } from '../../types/tickets'

function Card({ id, createdAt, createdBy, description, email }: TickekCardProps) {
    const formattedTime = new Date(createdAt).toLocaleTimeString()

    return (
        <div className="space-y-4 border bg-white rounded-md  p-5 lg:p-7 lg:px-9">

            <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                    <div className="bg-[#F8C13499] w-3 h-3 rounded-full"></div>
                    <p className="text-sm w-32 truncate">Ticket# {id}</p>
                </div>

                <div>
                    <p className="text-sm text-grayTwo">Posted at {formattedTime}</p>

                </div>
            </div>

            <div>
                <h2 className="text-headers font-bold text-lg">{description}</h2>
                <p className="text-sm text-grayTwo">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <hr />
            <div className="flex justify-between">
                <p className="flex gap-2 items-center text-grayTwo ">
                    <span className="">
                        <img src={icon} alt="" className="w-5 h-5" />
                    </span >{createdBy}</p>
                <Link to={`/support/${id}`} className="text-greenMain underline">Open Ticket</Link>
            </div>
        </div>
    )
}

export default React.memo(Card)





