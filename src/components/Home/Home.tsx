import { useEffect, useState } from "react"
import { useAuthStore } from "../../store/auth/auth"
import { useDashboardStore } from "../../store/dashboardStore"
import Card from "./Cards"
import ChartSection from './ChartSection'
import SystemHealth from "./SystemHealth"
import { formatCurrency } from "../../utils/formatCurrency"



type Props = {}
export default function Home({ }: Props) {
    const {
        currentBalance, getCurrentBalance,
        getTotalBranches, getTotalTransactions, getTotalWithdrawals,
        isLoading, totalTransactions, totalbranches, totalwithdrawals,
        activeWallets, dormantWallets, getActiveWallets, getDormantWallets,
        getNewWallets, newWallets, getRegisteredWallets, registeredWallets, getTransactionVolume, getTransactionsProcessed, getaverageTransactionValue,
    } = useDashboardStore()

    useEffect(() => {
        getCurrentBalance()
        getTotalBranches()
        // getTotalTransactions()
        // getTotalWithdrawals()
        getActiveWallets()
        getDormantWallets()
        getNewWallets()
        getRegisteredWallets()
        getTransactionVolume()
        getTransactionsProcessed()
        getaverageTransactionValue()
    }, [])


    return (
        <div className="flex flex-col space-y-6">
            <div className="pt-10">
                <h1 className="font-bold text-[#2C3C34] text-2xl"> Dashboard</h1>
            </div >
            <section className="flex gap-5 py-3 ml-3 overflow-x-scroll hide">
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
            <section className="flex flex-wrap gap-8 xl:flex-nowrap">
                <ChartSection />
            </section>
            <section className="flex gap-5 py-3 ml-3 overflow-x-scroll hide">
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