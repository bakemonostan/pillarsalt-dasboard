import Cards from "./Cards"
import profileIcon from '/images/icon-holder.svg'
import bank from '/images/bank.svg'
import Table from './Table'
import { useModal } from "../../store/wallet"
import { useWalletStore } from "../../store/walletStore"
import ModalMain from "../ModalsAndPopups/ModalMain"
import Card from "../Card/CardMain"
import WithdrawFunds from "../ModalsAndPopups/WithdrawFunds"
import Pagination from "../Paginate"
import { useState } from "react"


type Props = {}
export default function Walletin({ }: Props) {
    const { isFundWallet, showModal, isWithdraw } = useModal()
    const { merchantDashboard, transactionHistory } = useWalletStore()
    const [currentPage, setCurrentPage] = useState(1)
    const [rowsPerPage] = useState(5)
    const indexOfLastCard = currentPage * rowsPerPage
    const indexOfFirstCard = indexOfLastCard - rowsPerPage
    const currentTransactions = transactionHistory.slice(indexOfFirstCard, indexOfLastCard)


    const handlePageChange = (page: number) => {
        setCurrentPage(page)
    }



    return (
        <>
            {isFundWallet && <ModalMain title='Fund Wallet' >
                <h3>
                    Choose Method
                </h3>
            </ModalMain>
            }
            {isWithdraw && <WithdrawFunds title='Withdraw Funds' />

            }

            <h1 className="pt-10 text-xl font-extrabold text-headers">Wallet Management</h1>
            <section className="flex flex-col flex-wrap gap-5 py-4 lg:flex-row xl:flex-nowrap ">
                <Cards title="Account Details">
                    <div className='flex items-center justify-between p-3'>
                        <div className="space-y-1.5">
                            <p className="text-2xl font-bold text-headersTwo">{merchantDashboard.accountName}</p>
                            <p className="w-40 text-sm truncate text-grayTwo">Wallet ID: {merchantDashboard.walletId} </p>
                        </div>
                        <div>
                            <img src={profileIcon} alt="" className='' />
                        </div>
                    </div>
                </Cards>
                {/* <Cards title="Account Balance">
                    <div className='flex items-center justify-between p-3'>
                        <div className="space-y-1.5">
                            <p className="text-2xl font-bold text-headersTwo">{formatCurrency(merchantDashboard.accountBalance ?? '0')}</p>
                            <div className="flex justify-between gap-1">

                                <button type="button" className="bg-greenMain text-white rounded-md text-xs py-1.5 px-3" onClick={() => { showModal('fund') }} >
                                    Fund wallet
                                </button>

                                <button type="button" className="bg-white border-greenMain border rounded-md py-1.5 px-3 text-xs"
                                    onClick={() => { showModal('withdraw') }}
                                >
                                    Withdraw
                                </button>
                            </div>
                        </div>
                        <div>
                            <img src={walletIcon} alt="" className='' />
                        </div>
                    </div>
                </Cards> */}
                <Cards title="Bank Account">
                    <div className='flex items-center gap-3 p-3'>
                        <div>
                            <img src={bank} alt="" className='' />
                        </div>
                        <div className="space-y-1.5">
                            <p className="text-2xl font-bold text-headersTwo">Zenith Bank</p>
                            <p className="text-sm text-grayTwo">Account Connected</p>
                        </div>
                    </div>
                </Cards>
            </section>

            {/* table section */}
            {
                transactionHistory.length > 0 ?
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
                                <thead className="text-center">
                                    <tr className=" bg-[#ECF2BA] w-full py-3">
                                        <th className="px-4 py-2">S/N</th>
                                        <th className="px-4 py-2">Date</th>
                                        <th className="px-4 py-2">Transaction Reference</th>
                                        <th className="px-4 py-2">Amount</th>
                                        <th className="px-4 py-2">Status</th>
                                        <th className="px-4 py-2">Narration</th>
                                        <th className="px-4 py-2 text-center">Actions</th>
                                    </tr>
                                </thead>
                                {
                                    currentTransactions.map((transaction) => {
                                        return (
                                            <Table key={transaction.id} {...transaction} />
                                        )
                                    })
                                }
                            </table>
                        </div>
                        <Pagination
                            currentPage={currentPage}
                            onPageChange={handlePageChange}
                            totalPages={Math.ceil(transactionHistory.length / rowsPerPage)}
                        />
                        <Card page="wallet" />

                    </section>
                    :
                    <div className="flex flex-col items-center justify-center h-[50vh]">
                        <p className="text-2xl font-bold text-headers">No Transaction History</p>
                        <p className="text-sm text-grayTwo">You have no transaction history yet</p>
                    </div>

            }
        </>
    )
}