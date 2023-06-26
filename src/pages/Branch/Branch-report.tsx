import Report from "../../components/Branch/Report";
import { useEffect } from "react"
import { useBranchStore } from "../../store/branchStore"
import Loader from "../../components/Loaders/Loader"

export default function BranchReport() {
    const { getAllBranches, isLoading } = useBranchStore()
    useEffect(() => {
        getAllBranches()
    }, [])


    if (isLoading) return <div className="flex flex-col items-center justify-center w-full h-screen pb-40">
        <Loader />
    </div>
    return (
        <div>
            <Report />
        </div>
    )
}


