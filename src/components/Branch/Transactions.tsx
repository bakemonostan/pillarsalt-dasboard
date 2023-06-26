import Cards from "../Home/Cards"
import arrow from '/images/arrow-down.svg'
import Table from "../Table"
import TransactionCard from "../Wallet/TransactionCard"
import { useBranchStore } from "../../store/branchStore"

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

const stuff = [1, 2, 3]

type Props = {}
export default function Transactions({ }: Props) {

    return (
        <div className="flex flex-col space-y-6">
            <div className="pt-10 flex items-center justify-between gap-5">
                <h1 className="font-bold text-[#2C3C34] lg:text-2xl"> Branch Transactions</h1>
                <div className="border p-2.5 px-3 rounded-md w-full md:w-[17rem] ">
                    <p className="flex items-center justify-between">
                        <span>
                            Failed transfer
                        </span>
                        <span>
                            <img src={arrow} alt="" />
                        </span>
                    </p>
                </div>
            </div >
            <section className="hide flex gap-5 overflow-x-scroll ml-3 py-3">
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
                    <h2 className="font-bold text-xl text-headers">
                        Tranaction History
                    </h2>
                    <p className="text-sm text-greenMain font-bold cursor-pointer">
                        See all
                    </p>
                </div>
                <Table isTransaction={true} />
                {stuff.map((item, index) => (
                    <TransactionCard key={index} />
                ))}
            </section>
        </div>
    )
}