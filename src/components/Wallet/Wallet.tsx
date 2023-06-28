import Cards from "./Cards"
import profileIcon from '/images/icon-holder.svg'
import walletIcon from '/images/walletCard.svg'
import bank from '/images/bank.svg'
import Table from '../Table'
import { useModal } from "../../store/wallet"
import { useWalletStore } from "../../store/walletStore"
import { formatCurrency } from "../../utils/formatCurrency"
import ModalMain from "../ModalsAndPopups/ModalMain"
import Card from "../Card/CardMain"


const stuff = [1, 2, 3]
type Props = {}
export default function Walletin({ }: Props) {
    const isOpen = useModal(state => state.isOpen)
    const fundWallet = useModal(state => state.showModal)
    const { merchantDashboard } = useWalletStore()

    return (
        <>
            {isOpen && <ModalMain title='Fund Wallet' >
                <div>
                    <div>
                        <h3>
                            Choose Method
                        </h3>
                    </div>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </ModalMain>
            }

            <h1 className="text-xl font-extrabold text-headers pt-10">Wallet Management</h1>
            <section className="flex flex-col flex-wrap lg:flex-row gap-5 py-4 xl:flex-nowrap ">
                <Cards title="Account Details">
                    <div className='flex justify-between items-center p-3'>
                        <div className="space-y-1.5">
                            <p className="text-headersTwo text-2xl font-bold">{merchantDashboard.accountName}</p>
                            <p className="truncate w-40 text-grayTwo text-sm">Wallet ID: {merchantDashboard.walletId} </p>
                        </div>
                        <div>
                            <img src={profileIcon} alt="" className='' />
                        </div>
                    </div>
                </Cards>
                <Cards title="Account Balance">
                    <div className='flex justify-between items-center p-3'>
                        <div className="space-y-1.5">
                            <p className="text-headersTwo text-2xl font-bold">{formatCurrency(merchantDashboard.accountBalance ?? '0')}</p>
                            <div className="flex gap-1 justify-between">

                                <button type="button" className="bg-greenMain text-white rounded-md text-xs py-1.5 px-3" onClick={fundWallet} >
                                    Fund wallet
                                </button>

                                <button type="button" className="bg-white border-greenMain border rounded-md py-1.5 px-3 text-xs">
                                    Withdraw
                                </button>
                            </div>
                        </div>
                        <div>
                            <img src={walletIcon} alt="" className='' />
                        </div>
                    </div>
                </Cards>
                <Cards title="Bank Account">
                    <div className='flex gap-3 items-center p-3'>
                        <div>
                            <img src={bank} alt="" className='' />
                        </div>
                        <div className="space-y-1.5">
                            <p className="text-headersTwo text-2xl font-bold">Zenith Bank</p>
                            <p className="text-grayTwo text-sm">Account Connected</p>
                        </div>
                    </div>
                </Cards>
            </section>
            {/* table section */}
            <section className="flex flex-col gap-5 py-4">
                <div className="flex justify-between md:w-[23rem] items-center md:mx-auto xl:w-full">
                    <h2 className="font-bold text-xl text-headers">
                        Tranaction History
                    </h2>
                    <p className="text-sm text-greenMain font-bold cursor-pointer">
                        See all
                    </p>
                </div>
                <Table isWallet={true} />

                {/* <TransactionCard /> */}
                <Card page="wallet" />

            </section>
        </>
    )
}