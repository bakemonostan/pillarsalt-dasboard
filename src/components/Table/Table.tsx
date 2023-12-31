import actionsIcon from '/images/actions.svg'
import { transactionHistory } from '../../utils/tableData'
import { useBranchStore } from '../../store/branchStore'
import BranchHead from './BranchHead'
import TransactionHead from './TransactionsHead'
import BranchBody from './BranchBody'
import TransactionBody from './TransactionBody'
import { useWalletStore } from '../../store/walletStore'
import { useEffect } from 'react'

type Props = {
    isReport?: boolean
    isWallet?: boolean
    isTransaction?: boolean
}
export default function Table({ isReport, isTransaction, isWallet }: Props) {

    return (
        <div className="overflow-x-auto hidden xl:block">
            <table className="table-auto border-collapse w-full">
                {""}
            </table>
        </div>
    )
}





