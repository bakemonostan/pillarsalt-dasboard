import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Input from "../Form/Input";
import Card from "./Card";
import arrow from '/images/arrow-down.svg';
import { useTicketStore } from "../../store/ticketStore";
import Pagination from "../Paginate";

type Props = {};
export default function Tickets({ }: Props) {
    const { allTickets, getTickets } = useTicketStore();
    const [currentPage, setCurrentPage] = useState(1);
    const [filterValue, setFilterValue] = useState("");
    const [cardsPerPage] = useState(5);

    useEffect(() => {
        getTickets();
    }, []);
    const filteredTickets = allTickets.filter((ticket) =>
        ticket.description.toLowerCase().includes(filterValue.toLowerCase())
    );
    // Pagination logic
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = filteredTickets.slice(indexOfFirstCard, indexOfLastCard);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <>
            <section className="pb-5">
                <div className="flex flex-wrap justify-between pt-10">
                    <div>
                        <h1 className="text-headers font-bold text-xl">Tickets</h1>
                    </div>
                    <Link to="/support/new-ticket">
                        <Button label="New Ticket" type="button" variant="primary" />
                    </Link>
                </div>
            </section>

            <section className="space-y-4 border bg-white rounded-md px-2 py-10 lg:px-8">
                <div className=" flex flex-wrap  justify-between">
                    <div>
                        <Input
                            classes="w-[17rem]"
                            name="Search"
                            onchange={(e) => setFilterValue(e.target.value)}
                            placeholder="Search tickets"
                            type="search"
                            value={filterValue}
                            required={false}
                        />
                    </div>

                    <div className="flex gap-10  w-full py-3 md:w-1/2">
                        <div className="border p-2.5 px-2 rounded-md w-full lg:w-[17rem] ">
                            <p className="flex items-center justify-between">
                                <span>Select Priority</span>
                                <span>
                                    <img src={arrow} alt="" />
                                </span>
                            </p>
                        </div>
                        <div className="border p-2.5 px-2 rounded-md w-full lg:w-[17rem]">
                            <p className="flex items-center justify-between">
                                <span>This Week</span>
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
                {currentCards.map((data) => (
                    <Card key={data.id} {...data} />
                ))}
            </section>

            {/* Pagination */}
            <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(filteredTickets.length / cardsPerPage)}
                onPageChange={handlePageChange}
            />
        </>
    );
}
