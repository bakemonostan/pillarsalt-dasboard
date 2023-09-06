import Cards from "../Home/Cards"
import { useBranchStore } from "../../store/branchStore"
import Card from "../Card/CardMain"
import TransactionBody from "../Table/TransactionBody"
import Pagination from "../Paginate"
import { useState } from "react"

const cards = [
    {
        id: "82eb99a1-6637-435a-a024-5d8cc9f90fe2",
        title: "Total Branches",
        amount: "1,291",
        percentage: "15%",
        lastMonth: "Last month",
        isRaising: true,
    },
    {
        id: "9bd44b34-3ebe-4fff-b386-5d42b2318d5e",
        title: "Total Deposit Amount",
        amount: "₦12,750,000",
        percentage: "15%",
        lastMonth: "Last month",
        isRaising: true,
    },
    {
        id: "224770f4-02be-442d-8bce-2e7426ca9883",
        title: "Total Transaction ",
        amount: "23,4892",
        percentage: "15%",
        lastMonth: "Last month",
        isRaising: false,
    },
    {
        id: "91699973-7f80-4bd2-a58a-34462ca9adc2",
        title: "Current Balance",
        amount: "₦121,750,000",
        percentage: "15%",
        lastMonth: "Last month",
        isRaising: true,
    },

]


type Props = {}
export default function Transactions({ }: Props) {
    const { transactionHistory } = useBranchStore();
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage] = useState(5);

    const indexOfLastCard = currentPage * rowsPerPage;
    const indexOfFirstCard = indexOfLastCard - rowsPerPage;
    const currentTransactions = transactionHistory.slice(indexOfFirstCard, indexOfLastCard);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };
    return (
        <div className="flex flex-col space-y-6">
            <div className="flex items-center justify-between gap-5 pt-10">
                <h1 className="font-bold text-[#2C3C34] lg:text-2xl"> Branch Transactions</h1>
                <div className="">
                    <label htmlFor="date-filter" className="hidden text-sm font-medium leading-6 text-gray-900">
                        date-filter
                    </label>
                    <select
                        id="date-filter"
                        name="date-filter"
                        className="mt-2 block border p-2.5 px-3 rounded-md w-full md:w-[17rem]  text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-gray-400 sm:text-sm sm:leading-6"
                        defaultValue="This month"
                    >
                        <option>This month</option>
                        <option>Last month</option>
                        <option>Last 2 months</option>
                        <option>This year</option>
                        <option>Last year</option>
                    </select>
                </div>

            </div >
            <section className="flex gap-5 py-3 ml-3 overflow-x-scroll hide">
                {
                    cards.map((card, index) => {
                        return (
                            <Cards {...card} key={index} />
                        )
                    })
                }
            </section>

            <section className="flex flex-col gap-5 py-4">
                <div className="flex justify-between md:w-[23rem] items-center md:mx-auto xl:w-full">
                    <h2 className="text-xl font-bold text-headers">
                        Tranaction History
                    </h2>
                    <p className="text-sm font-bold cursor-pointer text-greenMain">
                        See all
                    </p>
                </div>
                <div className="hidden overflow-x-auto xl:block">
                    <table className="w-full border-collapse table-auto">


                        <thead>
                            <tr className="text-center bg-[#ECF2BA] w-full py-3">
                                <th className="px-4 py-2">S/N</th>
                                <th className="px-4 py-2">Date</th>
                                <th className="px-4 py-2">Transaction Reference</th>
                                <th className="px-4 py-2">Depositor</th>
                                <th className="px-4 py-2">BranchID</th>
                                <th className="px-4 py-2">BranchName</th>
                                <th className="px-4 py-2">Amount</th>
                                <th className="px-4 py-2">Status</th>
                                <th className="px-4 py-2">Narration</th>
                                <th className="px-4 py-2 text-center">Actions</th>
                            </tr>
                        </thead>
                        {
                            transactionHistory.length > 0 ?
                                currentTransactions.map((transaction, index) => {
                                    return (
                                        <TransactionBody {...transaction} key={index} />
                                    )
                                }) :
                                <tbody>
                                    <tr className="w-full py-2 text-center">
                                        <td className="px-4 py-8" colSpan={9}>No Branches Found</td>
                                    </tr>
                                </tbody>
                        }

                    </table>
                </div>

                <Card page="transaction" />
                <Pagination
                    currentPage={currentPage}
                    totalPages={Math.ceil(transactionHistory.length / rowsPerPage)}
                    onPageChange={handlePageChange}
                />
            </section>
        </div>
    )
}