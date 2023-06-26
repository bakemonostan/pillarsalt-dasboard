import { useEffect } from "react"
import Transactions from "../../components/Branch/Transactions"
import { useBranchStore } from "../../store/branchStore"
import Loader from "../../components/Loaders/Loader"


type Props = {}
export default function Branch({ }: Props) {
    const { isLoading, getBranchTransactionHistory } = useBranchStore()
    useEffect(() => {
        getBranchTransactionHistory()
    }, [])


    if (isLoading) return <div className="flex flex-col items-center justify-center w-full h-screen pb-40">
        <Loader />
    </div>
    return (
        <div>
            <Transactions />
        </div>
    )
}




