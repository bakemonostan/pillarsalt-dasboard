import TransactionCard from "./TransacttionsCard"
import BranchCard from "./BranchCard"
import WalletCard from "./WalletCard"

type Props = {
    page: 'branch' | 'wallet' | 'transaction'
}
export default function Card({ page }: Props) {
    return (

        <>
            {
                page === 'branch' ? <BranchCard /> : page === 'wallet' ? <WalletCard /> : <TransactionCard />
            }
        </>


    )
}