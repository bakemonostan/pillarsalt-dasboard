import WalletComponent from "../components/Wallet"
import { useEffect } from "react"
import Loader from "../components/Loaders/Loader"
import { useWalletStore } from "../store/walletStore"
import { toast } from 'react-toastify';
export default function Wallet() {
    const { getTransactionHistory, isLoading, getMerchantDashboard, errorMsg, isError } = useWalletStore()

    useEffect(() => {
        getTransactionHistory();
        getMerchantDashboard();
    }, []);

    useEffect(() => {
        if (isError) {
            toast.error(errorMsg);
        }
    }, [isError, errorMsg]);


    if (isLoading) return <div className="flex flex-col items-center justify-center w-full h-screen pb-40">
        <Loader />
    </div>
    return (
        <div>
            <WalletComponent />
        </div>
    )
}


