import { useEffect } from "react"
import { useAuthStore } from "../../store/auth/auth"
import { useDashboardStore } from "../../store/dashboardStore"
import Card from "./Cards"
import ChartSection from './ChartSection'
import SystemHealth from "./SystemHealth"
import { formatCurrency } from "../../utils/formatCurrency"

type Props = {}
export default function Home({ }: Props) {
    const cards = [
        {
            id: "82eb99a1-6637-435a-a024-5d8cc9f90fe2",
            title: "Current Balance",
            amount: "₦12,750,000",
            percentage: "15%",
            lastMonth: "Last month",
            isRaising: true,
        },
        {
            id: "9bd44b34-3ebe-4fff-b386-5d42b2318d5e",
            title: "Total Transaction ",
            amount: "₦23,4892",
            percentage: "15%",
            lastMonth: "Last month",
            isRaising: true,
        },
        {
            id: "224770f4-02be-442d-8bce-2e7426ca9883",
            title: "Total Withdrawal",
            amount: "₦12,750,000",
            percentage: "15%",
            lastMonth: "Last month",
            isRaising: false,
        },
        {
            id: "91699973-7f80-4bd2-a58a-34462ca9adc2",
            title: "Total Branches",
            amount: "1,291",
            percentage: "15%",
            lastMonth: "Last month",
            isRaising: true,
        },

    ]
    const { logout, random } = useAuthStore()
    const {
        currentBalance, getCurrentBalance, getTotalBranches, getTotalTransactions, getTotalWithdrawals, isLoading, totalTransactions, totalbranches, totalwithdrawals, activeWallets, dormantWallets, getActiveWallets, getDormantWallets, getNewWallets, newWallets, getRegisteredWallets, registeredWallets
    } = useDashboardStore()


    useEffect(() => {
        getCurrentBalance()
        getTotalBranches()
        getTotalTransactions()
        getTotalWithdrawals()
        getActiveWallets()
        getDormantWallets()
        getNewWallets()
        getRegisteredWallets()
    }, [])

    return (
        <div className="flex flex-col space-y-6">
            <button onClick={logout}>log out</button>
            <button onClick={random}>login</button>
            <div className="pt-10">
                <h1 className="font-bold text-[#2C3C34] text-2xl"> Dashboard</h1>
            </div >
            <section className="hide flex gap-5 overflow-x-scroll ml-3 py-3">
                <Card
                    amount={formatCurrency(currentBalance)}
                    isRaising={true}
                    percentage="15%"
                    title="Current Balance"
                    id="82eb99a1-6637-435a-a024-5d8cc9f90fe2"
                    lastMonth="Last month"
                />
                <Card
                    amount={formatCurrency(totalTransactions)}
                    isRaising={true}
                    percentage="15%"
                    title="Total Transaction"
                    id="9bd44b34-3ebe-4fff-b386-5d42b2318d5e"
                    lastMonth="Last month"
                />
                <Card
                    amount={formatCurrency(totalwithdrawals)}
                    isRaising={false}
                    percentage="15%"
                    title="Total Withdrawal"
                    id="224770f4-02be-442d-8bce-2e7426ca9883"
                    lastMonth="Last month"
                />
                <Card
                    amount={totalbranches}
                    isRaising={true}
                    percentage="15%"
                    title="Total Branches"
                    id="91699973-7f80-4bd2-a58a-34462ca9adc2"
                    lastMonth="Last month"

                />
            </section>
            <section className="flex flex-wrap xl:flex-nowrap gap-8">
                <ChartSection />
            </section>
            <section className="hide flex gap-5 overflow-x-scroll ml-3 py-3">
                <Card
                    amount={registeredWallets}
                    isRaising={true}
                    percentage="15%"
                    title="Registered Wallets"
                    id="91699973-7f80-4bd2-a58a-34462ca9adc2"
                    lastMonth="Last month"
                />
                <Card
                    amount={activeWallets}
                    isRaising={true}
                    percentage="15%"
                    title="Active Wallets"
                    id="91699973-7f80-4bd2-a58a-34462ca9adc2"
                    lastMonth="Last month"
                />
                <Card
                    amount={newWallets}
                    id="91699973-7f80-4bd2-a58a-34462ca9adc2"
                    isRaising={true}
                    percentage="15%"
                    title="New Wallets Created"
                    lastMonth="Last month"
                />
                <Card
                    amount={dormantWallets}
                    id="91699973-7f80-4bd2-a58a-34462ca9adc2"
                    isRaising={true}
                    percentage="15%"
                    title="Dormant Wallets"
                    lastMonth="Last month"
                />
            </section>
            <section className="border ">
                <SystemHealth />
            </section>
        </div>
    )
}